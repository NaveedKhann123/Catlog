<script setup>
import Hero from '../components/Hero.vue'
import Lastpage from '../components/Lastpage.vue'
</script>

<template>
  <!-- HERO -->
  <Hero />

  <!-- ABOUT WRAPPER -->
  <div class="about">

    <!-- TITLE -->
    <h1 class="about-title">
      About Catalog-Z Website Template
    </h1>

    <!-- ABOUT SECTION -->
    <div class="about-container">

      <div class="about-image"></div>

      <div class="about-content">
        <p>
          You may support TemplateMo website by making a small contribution via PayPal.
          This will be helpful for us. We hope you like this Catalog-Z photo / video template
          for your website. We are making new templates regularly for you.
        </p>

        <p>
          Credits go to Pexels and Unsplash for photos and video used in this template.
          Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template designed for video and photo websites.
        </p>

        <p>
          You are allowed to use this template for your commercial or non-commercial websites.
          You can integrate it with any kind of CMS website. You are NOT allowed to redistribute
          the downloadable template ZIP file on any template collection website.
        </p>
      </div>
    </div>

    <!-- TWO COLUMN CONTENT -->
    <div class="content">

      <div class="content-1">
        <h1>Left side of 2-Column content</h1>
        <p>
          Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque.
          Ut augue justo, tincidunt nec aliquet ac, cursus vel augue.
        </p>

        <p>
          Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.
          Suspendisse id consequat risus.
        </p>
      </div>

      <div class="content-2">
        <h1>Right side of 2-Column content</h1>
        <p>
          Aliquam varius posuere nunc, nec imperdiet neque condimentum at.
          Aenean porta eleifend venenatis.
        </p>

        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>

    </div>

    <!-- SERVICES SECTION -->
    <section class="services">

      <div class="service-card">
        <div class="icon-box">
          <i class="fas fa-desktop"></i>
        </div>

        <h2>Three-column title one</h2>

        <p>
          Integer tristique arcu scelerisque mauris posuere convallis.
          Fusce egestas ipsum sapien, hendrerit ultricies nisi viverra eget.
        </p>

        <p>
          Cras auctor velit urna, et feugiat ex tincidunt ut.
        </p>
      </div>

      <div class="service-card">
        <div class="icon-box">
          <i class="fas fa-mobile-alt"></i>
        </div>

        <h2>Title two of three-column</h2>

        <p>
          Donec nec est tincidunt, rhoncus nulla sit amet, imperdiet augue.
          Phasellus sodales placerat ipsum ac auctor.
        </p>

        <button class="service-btn">Read More</button>
      </div>

      <div class="service-card">
        <div class="icon-box">
          <i class="fas fa-image"></i>
        </div>

        <h2>Third Title goes here</h2>

        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </p>

        <p>
          Mauris molestie blandit turpis. Mauris ante tellus.
        </p>
      </div>

    </section>

    <!-- FOOTER COMPONENT -->
    <Lastpage />

  </div>
</template>

<style>
.about {
  width: 100%;
  background: #fff;
  padding: 50px 20px;
}

/* TITLE */
.about-title {
  text-align: center;
  font-size: 32px;
  color: #009999;
  margin-bottom: 40px;
}

/* =========================
   ABOUT SECTION
========================= */

.about-container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 30px;
  align-items: stretch;
}

/* IMAGE */
.about-image {
  flex: 1;
  min-height: 350px;
  background: url("/about.jpg") center/cover no-repeat;
  border-radius: 12px;
}

/* CONTENT */
.about-content {
  flex: 1;
  color: #777;
  line-height: 1.9;
}

.about-content p {
  margin-bottom: 15px;
}

/* =========================
   TWO COLUMN
========================= */

.content {
  max-width: 1200px;
  margin: 70px auto;
  display: flex;
  gap: 40px;
}

.content-1,
.content-2 {
  flex: 1;
}

.content h1 {
  color: #009999;
  margin-bottom: 15px;
}

.content p {
  color: #666;
  line-height: 1.8;
}

/* =========================
   SERVICES
========================= */

.services {
  max-width: 1200px;
  margin: 90px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  display: flex;
  flex-direction: column;
}

.icon-box {
  width: 120px;
  height: 120px;
  border: 2px solid #0a9ca0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
}

.icon-box i {
  font-size: 45px;
  color: #0a9ca0;
}

.service-card h2 {
  color: #0a9ca0;
  margin-bottom: 10px;
}

.service-card p {
  color: #777;
  line-height: 1.7;
}

.service-btn {
  margin-top: 10px;
  padding: 10px 18px;
  background: #0a9ca0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* =========================
   MEDIA QUERIES - RESPONSIVE
========================= */

/* Large Tablets and small laptops (max-width: 1024px) */
@media (max-width: 1024px) {
  .about-container {
    flex-direction: column;
    gap: 20px;
  }

  .about-image {
    min-height: 280px;
  }

  .content {
    flex-direction: column;
    gap: 30px;
    margin: 50px 0;
  }

  .services {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin: 60px 0;
  }

  .about-title {
    font-size: 28px;
  }
}

/* Tablets and small devices (max-width: 768px) */
@media (max-width: 768px) {
  .about {
    padding: 30px 15px;
  }

  .about-title {
    font-size: 24px;
    margin-bottom: 30px;
  }

  .about-image {
    min-height: 220px;
  }

  .about-content {
    font-size: 15px;
    line-height: 1.8;
  }

  .services {
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 40px 0;
  }

  .service-card {
    align-items: center;
    text-align: center;
  }

  .icon-box {
    width: 100px;
    height: 100px;
  }

  .icon-box i {
    font-size: 35px;
  }

  .service-card h2 {
    font-size: 20px;
  }

  .service-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .content h1 {
    font-size: 22px;
  }

  .content p {
    font-size: 15px;
  }
}

/* Mobile phones (max-width: 480px) */
@media (max-width: 480px) {
  .about {
    padding: 20px 12px;
  }

  .about-title {
    font-size: 20px;
    margin-bottom: 25px;
  }

  .about-image {
    min-height: 180px;
    border-radius: 8px;
  }

  .about-content {
    font-size: 14px;
    line-height: 1.7;
  }

  .about-content p {
    margin-bottom: 12px;
  }

  .content {
    gap: 25px;
    margin: 35px 0;
  }

  .content h1 {
    font-size: 19px;
  }

  .content p {
    font-size: 14px;
    line-height: 1.7;
  }

  .services {
    gap: 25px;
    margin: 30px 0;
  }

  .icon-box {
    width: 80px;
    height: 80px;
  }

  .icon-box i {
    font-size: 28px;
  }

  .service-card h2 {
    font-size: 18px;
  }

  .service-card p {
    font-size: 14px;
    line-height: 1.6;
  }

  .service-btn {
    padding: 7px 14px;
    font-size: 13px;
  }
}

/* Very small phones (max-width: 360px) */
@media (max-width: 360px) {
  .about-title {
    font-size: 18px;
  }

  .about-image {
    min-height: 150px;
  }

  .about-content {
    font-size: 13px;
  }

  .content h1 {
    font-size: 17px;
  }

  .content p {
    font-size: 13px;
  }

  .icon-box {
    width: 70px;
    height: 70px;
  }

  .icon-box i {
    font-size: 24px;
  }

  .service-card h2 {
    font-size: 16px;
  }

  .service-card p {
    font-size: 13px;
  }

  .service-btn {
    padding: 6px 12px;
    font-size: 12px;
  }
}

/* For landscape orientation on mobile */
@media (max-height: 500px) and (orientation: landscape) {
  .about-image {
    min-height: 150px;
  }

  .about-container {
    flex-direction: row;
    gap: 20px;
  }

  .services {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .icon-box {
    width: 60px;
    height: 60px;
  }

  .icon-box i {
    font-size: 22px;
  }

  .service-card h2 {
    font-size: 16px;
  }

  .service-card p {
    font-size: 13px;
  }
}
</style>