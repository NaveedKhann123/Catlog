<template>
  <footer class="last">

    <!-- LEFT -->
    <div class="col">
      <h1>About Catalog-Z</h1>
      <p>
        Catalog-Z is a free Bootstrap template for video and photo websites.
        You can use it for CMS integration.
      </p>
      <p class="copyright">
        © 2020 Catalog-Z Company. All rights reserved.
      </p>
    </div>

    <!-- MIDDLE -->
    <div class="col">
      <h1>Our Links</h1>
      <a href="#">Advertise</a>
      <a href="#">Support</a>
      <a href="#">Our Company</a>
      <a href="#">Contact</a>
    </div>

    <!-- RIGHT -->
    <div class="col">

      <div class="social-icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-pinterest"></i>
      </div>

      <div class="bottom">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p class="design">Designed by TemplateMo</p>
      </div>

    </div>

  </footer>
</template>

<style scoped>

/* ================= FOOTER BASE ================= */
.last {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  background: #eee;
  padding: 60px;
}

/* ================= COLUMN ================= */
.col h1 {
  margin-bottom: 15px;
  color: #0f172a;
}

.col p {
  color: #777;
  line-height: 1.7;
}

.col a {
  display: block;
  text-decoration: none;
  color: #555;
  margin-bottom: 10px;
  transition: 0.3s;
}

.col a:hover {
  color: #009999;
  transform: translateX(5px);
}

/* ================= SOCIAL ================= */
.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.social-icons i {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.social-icons i:hover {
  background: #009999;
  color: white;
  transform: translateY(-5px);
}

/* ================= BOTTOM ================= */
.bottom p {
  color: #777;
  margin-bottom: 8px;
}

.design {
  margin-top: 15px;
  font-size: 14px;
}

/* ===================================================
   📱 RESPONSIVE MEDIA QUERIES (ADVANCED)
=================================================== */

/* 🔵 Large Tablets / Small Laptops */
@media (max-width: 1024px) {
  .last {
    grid-template-columns: repeat(2, 1fr);
    padding: 50px;
    gap: 40px;
  }
}

/* 🟢 Tablets */
@media (max-width: 768px) {
  .last {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 25px;
  }

  .social-icons {
    justify-content: center;
  }

  .col a {
    font-size: 15px;
  }
}

/* 🟡 Mobile Large */
@media (max-width: 480px) {
  .last {
    padding: 30px 15px;
  }

  .col h1 {
    font-size: 20px;
  }

  .col p {
    font-size: 14px;
  }

  .social-icons i {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
}

/* 🔴 Small Mobile */
@media (max-width: 360px) {
  .col h1 {
    font-size: 18px;
  }

  .col p,
  .col a {
    font-size: 13px;
  }

  .social-icons {
    gap: 10px;
  }

  .social-icons i {
    width: 35px;
    height: 35px;
  }
}

</style>