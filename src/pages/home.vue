<template>
    <div>
        <div> <Navbar /></div>
        <div> <Hero/></div>
        <div> <Latestimages/> </div>
       <div> <Div/> </div>
       <div> <Lastpage/> </div>
    
    </div>
</template>

<script setup>
import Div from '../components/Div.vue';
import Hero from '../components/Hero.vue';
import Lastpage from '../components/Lastpage.vue';
import Latestimages from '../components/Latestimages.vue';
import Navbar from '../components/Navbar.vue';
</script>

<style lang="scss" scoped>

</style>