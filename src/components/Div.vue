<template>
  <div class="pagination">

    <button class="nav-btn">← Previous</button>

    <div class="page-numbers">
      <button class="page active">1</button>
      <button class="page">2</button>
      <button class="page">3</button>
      <button class="page">4</button>
      <button class="page">5</button>
    </div>

    <button class="nav-btn">Next Page →</button>

  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content:space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin: 50px auto;
  padding: 10px;
}

/* NAV BUTTON */
.nav-btn {
  background: #59BDBD;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;
}

.nav-btn:hover {
  background: #086969;
}

/* PAGE NUMBERS */
.page-numbers {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

/* PAGE BUTTON */
.page {
  width: 45px;
  height: 45px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.3s;
}

.page:hover {
  background: #009999;
  color: white;
  border-color: #009999;
}

.page.active {
  background: #009999;
  color: white;
  border-color: #009999;
}

/* 📱 MOBILE RESPONSIVE */
@media (max-width: 600px) {
  .nav-btn {
    padding: 8px 12px;
    font-size: 12px;
  }

  .page {
    width: 38px;
    height: 38px;
    font-size: 13px;
  }
}
</style>