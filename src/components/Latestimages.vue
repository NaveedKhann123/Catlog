<template>
  <div class="gallery">

    <!-- HEADER -->
    <div class="top-bar">
      <h2>Latest Photos</h2>

      <div class="page">
        Page <button class="page-btn">1</button> of <span>200</span>
      </div>
    </div>

    <!-- GRID -->
    <div class="images">

      <div class="child" v-for="n in 16" :key="n">
        
        <div class="img-wrapper">
          <img :src="`/img-${String(n).padStart(2,'0')}.jpg`" alt="photo" />
        </div>

        <div class="child-flex">
          <p>📅 2020</p>
          <p>👁 10k views</p>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.gallery {
  padding: 25px;
  max-width: 1200px;
  margin: auto;
}

/* TOP BAR */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.top-bar h2 {
  font-size: 28px;
  color: #009999;
  font-weight: bold;
}

/* PAGE */
.page {
  font-size: 14px;
  color: #009999;
  display: flex;
  align-items: center;
  gap: 6px;
}

.page-btn {
  width: 35px;
  height: 28px;
  border: 1px solid #009999;
  background: white;
  color: #009999;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
}

.page-btn:hover {
  background: #009999;
  color: white;
}

/* GRID */
.images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

/* CARD */
.child {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  transition: 0.3s;
}

.child:hover {
  transform: translateY(-5px);
}

/* IMAGE */
.img-wrapper {
  overflow: hidden;
}

.child img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: 0.4s;
}

.child:hover img {
  transform: scale(1.05);
}

/* TEXT */
.child-flex {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 13px;
  color: #666;
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 1024px) {
  .images {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Mobile */
@media (max-width: 768px) {
  .images {
    grid-template-columns: repeat(2, 1fr);
  }

  .top-bar {
    flex-direction: column;
    gap: 10px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .images {
    grid-template-columns: 1fr;
  }

  .child img {
    height: 160px;
  }
}
</style>