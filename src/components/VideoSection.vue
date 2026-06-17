<template>
  <div>

    <!-- HERO VIDEO -->
    <div class="hero-video">

      <video autoplay muted loop playsinline class="video">
        <source src="/video/hero.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      <!-- SEARCH BAR -->
      <div class="search-bar">
        <input
          type="text"
          v-model="search"
          placeholder="Search photos, videos..."
        />

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
import Latestimages from './Latestimages.vue'

const search = ref('')

function doSearch() {
  console.log(search.value)
}
</script>

<style scoped>

/* HERO */
.hero-video {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

/* VIDEO */
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* SEARCH BAR */
.search-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  width: 500px;
  max-width: 90%;
  height: 50px;

  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  overflow: hidden;

  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

/* INPUT */
.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 15px;
  font-size: 16px;
  background: transparent;
  color: #222;
}

.search-bar input::placeholder {
  color: #666;
}

/* BUTTON */
.search-bar button {
  width: 70px;
  border: none;
  cursor: pointer;
  background: #00a6a6;
  color: white;
  font-size: 18px;
  transition: 0.3s;
}

.search-bar button:hover {
  background: #007f7f;
}

/* ================= RESPONSIVE ================= */
@media (max-width: 768px) {
  .hero-video {
    height: 300px;
  }

  .search-bar {
    height: 45px;
  }

  .search-bar button {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .hero-video {
    height: 220px;
  }

  .search-bar input {
    font-size: 14px;
  }
}
</style>