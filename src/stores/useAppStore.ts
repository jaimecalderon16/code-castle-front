import { defineStore } from "pinia";
import axiosIns from "@/plugins/axios";
import { useToast } from "../composables/useToast";
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
import { usePreloadStore } from '@/stores/usePreloadStore';
const authenticationStore = AuthenticationStore()


const toast = useToast();

export const useAppStore = defineStore("useAppStore", {
  state: () => ({
    isAuthenticated: false as boolean,
    formulario: {
        categoria_id: null,
        user_id: authenticationStore.user.id,
        application_name: '',
        description: '',
        download_link: '',
        categories: Array,
        tags: Array,
    },
    arrayApps: Array<object>,
    categories: [
        {value: '3', name: 'asdasd'},
        {value: '2', name: 'asdasd'},
        {value: '1', name: 'asdasd'},
    ],
  }),
  actions: {
    async save(){
      const preload = usePreloadStore();
      preload.isLoading = true;
      try {
        const result = await axiosIns.post("/apps/create", this.formulario);
        preload.isLoading = false;
        this.arrayApps = result.data.apps;

        toast.toast("Éxito", result.data.message, "success");
        
      } catch (error) {
        preload.isLoading = false;
        console.error(error);

        this.$reset();
        toast.toast("Error", error.response.data.message, "danger");
      }
    },

    async search(appName: object){

      try {
        const result = await axiosIns.post("/users", appName);
        
        if (result.data.code === 200) {
            this.arrayApps = result.data.apps;
        } else if (result.data.code === 500) {
          toast.toast("Error", error.response.data.message, "danger");

        }

        if (result.data.status === 422) {
          toast.toast("Error", error.response.data.message, "danger");

          return { error: result.data.errors, status: result.data.status };
        }

        return { status: result.data.code };
      } catch (error) {

        if (error.response && error.response.status === 500) {
          toast.toast("Error", error.response.data.message, "danger");

        }
      }
    },
  },
});
