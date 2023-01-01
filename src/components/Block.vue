<script setup lang='ts'>
interface Background{
    color?: string
    bgImage?: string
}

interface BlockData{
    container?: boolean
}

interface Props{
    container?: boolean
    background?: Background
}


const props = withDefaults(defineProps<Props>(), {
    container: false
})

const useContainer = props.container ? "container" : ""
const containerColor = props.background?.color ? props.background.color : ""
const containerImage = props.background?.bgImage ? props.background.bgImage : ""
const blockBackgroundClass = `${containerColor} ${containerImage}`


</script>

<template>
    <div class="w-full flex justify-center" :class="blockBackgroundClass">
        <div class="flex-1 flex flex-col bg-blue-200" :class="useContainer" >
            <slot />
        </div>
    </div>
</template>