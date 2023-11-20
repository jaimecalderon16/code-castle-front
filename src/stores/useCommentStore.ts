import { defineStore } from "pinia";
import axiosIns from "@/plugins/axios";
import { useToast } from "../composables/useToast";
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
import { usePreloadStore } from '@/stores/usePreloadStore';
const authenticationStore = AuthenticationStore()


const toast = useToast();

export const useCommentStore = defineStore("useCommentStore", {
  state: () => ({
    isAuthenticated: false as boolean,
    formulario: {
        comment: '',
        user_id: authenticationStore.user.id,
      },
    comentsArray: [],
  }),
  actions: {

    async save(appId: number){
      let formData = new FormData
      const preload = usePreloadStore();
      for (const key in this.formulario) formData.append(key, this.formulario[key]);
      formData.append('app_id', appId)
      preload.isLoading = true;
      try {
        const result = await axiosIns.post("/comments-store", formData);
        preload.isLoading = false;
        this.comentsArray = result.data.comments;

        toast.toast("Éxito", result.data.message, "success");
        
      } catch (error) {
        preload.isLoading = false;
        console.error(error);
        this.$reset();
        toast.toast("Error", error.response.data.message, "danger");
      }
    },

    async ComentsList(app_id: number){
      try {
        const result = await axiosIns.get("/comments/" + app_id)
        .then( (res) => {
          this.comentsArray = res.data.comments;
        }
        ).catch( (error) => {
          toast.toast("Error", error.response.data.message, "danger");
        }
        );
      } catch (error) {
          toast.toast("Error", error.response.data.message, "danger");
      }
    },
  },
});
