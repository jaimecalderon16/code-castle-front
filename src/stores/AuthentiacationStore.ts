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
    isAuthenticated: false as boolean,
    token: "" as string,
    user: {} as IAuth,
  }),
  persist: true,
  actions: {
    async logout(): Promise<void> {
      this.$reset();
      this.router.push({ name: 'login' });
    },

    async login(formulario: any): Promise<boolean> {
      const preload = usePreloadStore();
      preload.isLoading = true;

      try {
        const result = await axiosIns.post("/login/", formulario);
        preload.isLoading = false;

        this.isAuthenticated = true;
        this.user = result.data.user;

        toast.toast("Éxito", result.data.message, "success");

        this.router.push({ name: 'home' });
        console.log(this.user);
        
      } catch (error) {
        preload.isLoading = false;
        console.error(error);

        this.$reset();
        toast.toast("Error", error.response.data.message, "danger");

        return false;
      }
    },

    async register(formulario: IRegister): Promise<object> {
      const preload = usePreloadStore();
      preload.isLoading = true;

      try {
        const result = await axiosIns.post("/users", formulario);
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
