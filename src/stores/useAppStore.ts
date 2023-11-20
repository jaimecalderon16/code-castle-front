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
        categories: [],
        version: '',
        company: '',
        size: '',
        requirements: '',
        imgFile: File,
      },
    tags: [],
    app: {},
    arrayApps: [],
    categories: [],
  }),
  actions: {
    async save(){
      let formData = new FormData
      const preload = usePreloadStore();
      for (const key in this.formulario) formData.append(key, this.formulario[key]);
      formData.append('tags', JSON.stringify(this.tags))
      preload.isLoading = true;
      try {
        const result = await axiosIns.post("/apps/create", formData);
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

    async AppList(){
      const preload = usePreloadStore();
      try {
        preload.isLoading = true;

        const result = await axiosIns.get("/apps")
        .then( (res) => {
          preload.isLoading = false;
          this.arrayApps = res.data.apps;
        }
        ).catch( (error) => {
          preload.isLoading = false;
          toast.toast("Error", error.response.data.message, "danger");
        }
        );
      } catch (error) {
          preload.isLoading = false;
          toast.toast("Error", error.response.data.message, "danger");
      }
    },
    async findApp(id){
      try {
        const result = await axiosIns.get("/apps/" +  id)
        .then( (res) => {
          this.app = res.data;
        }
        ).catch( (error) => {
          toast.toast("Error", error.response.data.message, "danger");
        }
        );
      } catch (error) {
          toast.toast("Error", error.response.data.message, "danger");
      }
    },
    async listCategory(){
      try {
        const result = await axiosIns.get("/categories")
        .then( (res) => {
          this.categories = res.data.categories;
        }
        ).catch( (error) => {
          toast.toast("Error", error.response.data.message, "danger");
        }
        );
      } catch (error) {
          toast.toast("Error", error.response.data.message, "danger");
      }
    },
    async saveDownload(appID){
      try {
        const result = await axiosIns.get("apps/download/" + appID)
        .then( (res) => {
          console.log(res);
        }
        ).catch( (error) => {
          toast.toast("Error", error.response.data.message, "danger");
        }
        );
      } catch (error) {
          toast.toast("Error", error.response.data.message, "danger");
      }
    },
    async searh(appName: string){
      const preload = usePreloadStore();

      try {
        preload.isLoading = true;

        const result = await axiosIns.post("/apps/search", {name: appName})
        .then( (res) => {
          preload.isLoading = false;

          this.arrayApps = res.data.apps;
        }
        ).catch( (error) => {
          preload.isLoading = false;

          toast.toast("Error", error.response.data.message, "danger");
        }
        );
      } catch (error) {
        preload.isLoading = false;

          toast.toast("Error", error.response.data.message, "danger");
      }
    },
  },
});
