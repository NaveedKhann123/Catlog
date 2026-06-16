<template>

<div>

   <div class="hero-video">

    <!-- VIDEO BACKGROUND -->
    <video autoplay muted loop class="video">
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>

    <!-- SEARCH OVER VIDEO -->
    <div class="search-bar">
      <input type="text" v-model="search" placeholder="Search" />
      <button @click="doSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>

  </div>

<Latestimages/>




 
</div>

</template>
<script setup>

import { ref } from 'vue'
import Latestimages from './Latestimages.vue';
import Div from './Div.vue';

const search = ref('')

function doSearch() {
  console.log(search.value)
}
</script>

<style scoped>










.hero-video {
  position: relative;
  width: 100%;
  height: 380px;
  overflow: hidden;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.search-bar {
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 450px;
  height: 50px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
}

/* INPUT */
.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 18px;
  font-size: 16px;
  background: transparent;
  color: #299999;
}
 .search-bar input::placeholder {
  color: #299999;
} 
.search-bar input:focus {
 

  border: 4px solid #299999;
}

/* BUTTON */
.search-bar button {
  width: 70px;
  height: 100%;

  border: none;
  cursor: pointer;

  background: #00a6a6;
  color: white;

  font-size: 18px;
  transition: 0.3s;
}

.search-bar button:hover {
  background: #007f7f;
  transform: scale(1.05);
}



</style>