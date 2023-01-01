<script setup lang='ts'>
import Navbar from '../components/Navbar.vue';
//pages  pages[]
//page {title: string, href: string} **Pages Must exist in Pages Folder**
//linkHover {before: string, after: string}
const pages = [
    {title: "Home", href:"/"},
    {title: "About", href:"/about"},
    {title: "Contact", href:"/contact"},
]
const logo = ""
const banner = {
    text: "",
    link: ""
}
const navBarData = {
    pages: pages,
    banner: banner,
    linkHover: {before: "", after: ""},
    logo: "",
}

//footer color should be included in tailwind defaults color or listed in tailwindConfigFile
const footerColor = 'slate-700'

</script>

<template>
    <div class="w-full flex min-h-screen max-h-screen">

        <Navbar :data="navBarData"/>

        <div class="flex-1 flex flex-col">
            <slot/>
            <TheFooter :class="footerColor"/>
        </div>


    </div>
</template>