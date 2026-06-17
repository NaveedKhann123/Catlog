<template>
  <div class="hero">
    <div class="search-bar">
      <input type="text" v-model="search" placeholder="Search" />
   

      <button @click="doSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')

function doSearch() {
  console.log(search.value)
}
</script>

<style scoped>
:global(body) {
  margin: 0;
  padding: 0;
}

/* HERO */
.hero {
  width: 100%;
  height: 250px;

  /* BACKGROUND IMAGE PROPERTIES */
  background-image: url('/hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;
}
/* SEARCH BAR */
.search-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -130%);

  display: flex;
  width: 450px;
  height: 50px;

  border-radius: 8px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.8);
}

/* INPUT */
.search-bar input {
  flex: 1;
  border: none;
  padding: 0 15px;
  outline: none;
  font-size: 16px;
}


.search-bar input:focus {
  outline: none;
  box-shadow: 0 0 0 3px #9AC7E6;
  border: 4px solid #9AC7E6;
}

/* BUTTON */
.search-bar button {
  width: 80px;
  border: none;
  background: #00a6a6;
  color: white;
  cursor: pointer;
  font-size: 18px;
}

.search-bar button:hover {
  background: #177D4E;
}
@media (max-width: 768px) {
  .search-bar {
    width: 90%;
    height: 45px;
  }

  .search-bar button {
    width: 60px;
    font-size: 16px;
  }
}

/* 📱 SMALL MOBILE */
@media (max-width: 480px) {
  .hero {
    height: 200px;
  }

  .search-bar {
    width: 95%;
    height: 42px;
  }

  .search-bar input {
    font-size: 14px;
  }

  .search-bar button {
    width: 55px;
  }
}
</style>