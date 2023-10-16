import {  ref } from "vue";
export function useConfig() {
    const baseURL = ref('http://127.0.0.1:8000/')
    //const baseURL = ref('https://codeCastle.com/')
  
    return {
      baseURL,
    }
  }
  