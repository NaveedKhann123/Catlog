<template>
    <div class="last">

<div class="last-first">
<h1>About Catalog-Z</h1>
<p class="last-p">Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template for video <br>
     and photo websites. You can freely use this TemplateMo layout <br>
      for a front-end integration with any kind of CMS website.</p>
      <p class="last-pp">Copyright 2020 Catalog-Z Company. All rights reserved.</p>
</div>

<div class="last-second">
<h1>Our Links</h1>
<a href="">Advertise</a>
<a href="">Support</a>
<a href="">Our Company</a>
<a href="">Contact</a>
</div>

<div>
<div class="social-icons">

  <i class="fa-brands fa-facebook"></i>

  <i class="fa-brands fa-instagram"></i>

  <i class="fa-brands fa-linkedin"></i>

  <i class="fa-brands fa-pinterest"></i>

</div>
<div class="terms">
<p>Terms of use </p>
<p>Privacy Policy</p>
</div>
<div>
   
    <p class="div-p">Designed by TemplateMo</p>
</div>
</div>



    </div>




</template>
<style scoped>
.last {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  background-color: #EEEEEE;
  padding: 50px;
  min-height: 250px;
}



.last-first h1,
.last-second h3 {
  margin-bottom: 20px;
  color: #0f172a;
  font-weight: 700;
  position: relative;
}

.terms{
  margin-left: 100px;
  color: #9696AC;
  margin-top: 70px;
}

.last-p {
  font-size: 15px;
  line-height: 1.8;
  color: #9696AC;
  margin-top: 10px;
}
.last-pp{
  margin-top: 90px;
   color: #9696AC;
}
.div-p{
  margin-top: 80px ;
   color: #9696AC;
}
.last-second {
  display: flex;
  flex-direction: column;
}

.last-second a {
  text-decoration: none;
  color: #475569;
  margin-bottom: 14px;
  transition: 0.3s;
  font-weight: 500;
}

.last-second a:hover {
  color: #009999;
  transform: translateX(8px);
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.social-icons i {
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  border-radius: 50%;

  font-size: 22px;
  cursor: pointer;

  box-shadow: 0 5px 15px rgba(0,0,0,.08);
  transition: all .4s ease;
}

.social-icons i:hover {
  background: #10b981;
  color: white;
  transform: translateY(-8px) rotate(360deg);
}

.last-third p {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 10px;
}

.last-third div {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #d1d5db;
}

@media (max-width: 768px) {
  .last {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }

  .social-icons {
    justify-content: center;
  }

  .last-second {
    align-items: center;
  }

  p {
    margin-left: 0;
  }

  .last-first h1::after,
  .last-second h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>