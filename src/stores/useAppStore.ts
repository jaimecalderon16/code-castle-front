import { defineStore } from "pinia";
import axiosIns from "@/plugins/axios";
import { useToast } from "../composables/useToast";
import type IAuth from "@/interfaces/IAuth";
import type ILogin from "@/interfaces/ILogin";
import type IRegister from "@/interfaces/IRegister";
import { usePreloadStore } from '@/stores/usePreloadStore';


const toast = useToast();

export const AuthenticationStore = defineStore("authentication", {
  state: () => ({
    formulario: {
        n_downloads: null,
        upload_date: null,
        download_link: '',
        description: '',
        application_name: ''
    },
    arrayApps: []
  }),
  persist: true,
  actions: {
    async logout(): Promise<void> {
      this.$reset();
    },

    async findAll() {
      const preload = usePreloadStore();
      preload.isLoading = true;

      try {
        const result = (await axiosIns.post("/apps/create", this.formulario));
        preload.isLoading = false;
        this.arrayApps = result.data.apps
        toast.toast("Éxito", result.data.message, "success");
        
      } catch (error) {
        preload.isLoading = false;
        this.$reset();
        toast.toast("Error", error.response.data.message, "danger");

        return false;
      }
    },

    async store(): Promise<object> {
      const preload = usePreloadStore();
      preload.isLoading = true;

      try {
        const result = await axiosIns.post("/users", this.formulario);
        preload.isLoading = false;

        if (result.data.code === 200) {
          toast.toast("Éxito", result.data.message, "success");

        } else if (result.data.code === 500) {
          toast.toast("Error", error.response.data.message, "danger");

        }

        if (result.data.status === 422) {
          toast.toast("Error", error.response.data.message, "danger");

          return { error: result.data.errors, status: result.data.status };
        }

        return { status: result.data.code };
      } catch (error) {
        preload.isLoading = false;

        if (error.response && error.response.status === 500) {
          toast.toast("Error", error.response.data.message, "danger");

        }

        console.error(error);
        return { status: error.response?.state || "Error desconocido" };
      }
    },
  },
});
