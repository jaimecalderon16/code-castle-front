import { defineStore } from "pinia";
import axiosIns from "@/plugins/axios";
import { useToast } from "../composables/useToast";
import type IAuth from "@/interfaces/IAuth";
import type ILogin from "@/interfaces/ILogin";
import type IRegister from "@/interfaces/IRegister";
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
const authenticationStore = AuthenticationStore()


const toast = useToast();

export const useAppStore = defineStore("useAppStore", {
  state: () => ({
    isAuthenticated: false as boolean,
    formulario: {
        user_id: authenticationStore.user.id,
        name: '',
        description: '',
        download_link: '',
        categories: Array,
        tags: Array,
    },
    arrayApps: Array<object>,
    categories: Array<object>,
  }),
  actions: {
    async save(){
      const preload = usePreloadStore();
      preload.isLoading = true;
      try {
        const result = await axiosIns.post("/appsList/", this.formulario);
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
