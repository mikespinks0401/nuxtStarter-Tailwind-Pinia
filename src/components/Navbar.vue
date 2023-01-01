<script setup lang='ts'>

import { storeToRefs } from 'pinia';
import { useUserStore } from '~~/src/stores/user';

// const userStore = useUserStore()
// const userStoreRefs = storeToRefs(userStore)

// const user = userStoreRefs.username.value

interface Page{
    title: string
    href: string
}

interface LinkHover{
    before: string
    after: string
}
interface NavBarData{
    height?: number
    pages: Page[]
    logo: string
    linkHover: LinkHover

}

interface Props{
    data: NavBarData
}
const props = withDefaults(defineProps<Props>(),{
})
const useProps = {
    height: 100
}
if(props.data.height){
    useProps.height = props.data.height
}
const useClass = `h-[${useProps.height}px]`

</script>

<template>
    <div class="flex flex-col w-12 sm:w-18 md:w-24 min-h-screen">
    
        <div class=" w-full" :class="useClass">
            <ul>
                <li v-for="page of props.data.pages">
                    <NuxtLink :to="page.href" >{{page.title}}</NuxtLink>
             </li>
            </ul>
            <p>Username: </p>
        </div>
        
    </div>
</template>