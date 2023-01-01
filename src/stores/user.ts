import {defineStore} from "pinia"

export const useUserStore = defineStore("User", ()=> {
    const username = ref("sample")
    return { username }
})