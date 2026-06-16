<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue';

const showDropdown = ref(false)
</script>



<template>

<div class="hero">

</div>

  <div class="contact">
    <div class="parent">
    <div class="contact-1">
      <h1 class="contact-h1">Contact Page</h1>

      <input type="text" placeholder="Name" /> <br>  <br>
      <input type="email" placeholder="Email" /> <br> <br>

       <div class="dropdown">
        <button class="dropbtn" @click="showDropdown = !showDropdown">
          Subject ▼
        </button>

        <div class="dropdown-content" v-show="showDropdown">
          <a href="#">Sales and Marketing</a>
          <a href="#">Create and Design</a>
          <a href="#">UI / UX</a>
        </div>
      </div>

      <textarea placeholder="Message"></textarea> <br> <br>

      <button class="send-btn">Send</button>

    </div>
 <div class="ouraddress">
 <h1 class="ouraddress-h1">Our Address</h1>
  <p class="ouraddress-p1">Quisque eleifend mi et nisi eleifend pretium. Duis porttitor accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget vestibulum purus.</p>
  <p class="ouraddress-p2">Nulla ut scelerisque elit, in fermentum ante. Aliquam congue mattis erat, eget iaculis enim posuere nec. Quisque risus turpis, tempus in iaculis.</p>
  <p class="ouraddress-p3">120-240 Fusce eleifend varius tempus <br>
Duis consectetur at ligula 10660</p>

<div class="last-second">
   

    <a href="mailto:info@company.com">
        <i class="fas fa-envelope"></i>
        Email: info@company.com
    </a>

    <a href="tel:0100200340">
        <i class="fas fa-phone"></i>
        Tel: 010-020-0340
    </a>

    <a href="https://www.company.com" target="_blank">
        <i class="fas fa-globe"></i>
        URL: www.company.com
    </a>
</div>

 </div>
<div class="ourlocation">
  <h1>Our Location</h1>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3522926915375!2d71.49182065189301!3d34.00594202221674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917261b47bb2f%3A0x846a5953da915116!2sGharibabad%20Rd%2C%20Peshawar%2C%20Pakistan!5e0!3m2!1sen!2s!4v1781375639157!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


</div>


<div class="image">
  <div class="image-1">
    <img src="/public/people-1.jpg" alt="">
    <h1 class="ryan">Ryan White</h1>
    <p class="ryan-p">Chief Executive Officer</p>
    <p class="ryan-pp">Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi</p>
    <div class="social-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
</div>

  </div>




  <div class="image-2">
    <img src="/public/people-2.jpg" alt="">
    <h1 class="ryan">Catherine Pinky</h1>
    <p class="ryan-p">Chief Marketing Officer</p>
    <p class="ryan-pp">Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra, in varius lacus eleifend. Quisque ut eleifend lacus.</p>
 <div class="social-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
</div>
  </div> 

  <div class="image-3">
    <img src="/public/people-3.jpg" alt="">
    <h1 class="ryan">Johnny Brief</h1>
    <p class="ryan-p">Accounting Executive</p>
    <p class="ryan-pp">Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra, in varius lacus eleifend. Quisque ut eleifend lacus.</p>
     <div class="social-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
</div>
  </div>

   <div class="image-4">
    <img src="/public/people-4.jpg" alt="">
    <h1 class="ryan">George Nelson</h1>
    <p class="ryan-p">Creative Art Director #C69</p>
    <p class="ryan-pp">Nunc convallis facilisis congue. Curabitur gravida rutrum justo sed pulvinar. Pellentesque ac ante in erat bibendum dignissim.</p>
       <div class="social-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
</div>
   </div> 

</div>








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







  </div>



</template>


<style scoped>
.navbar {
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  color: black;
 
}

.logo {

  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
   color:rgba(0, 0, 255, 0.587);
  padding:   9px 14px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}
.nav-links li a {
  text-decoration: none;
 font-size: 22px;
  transition: 0.3s;
  padding: 8px 12px;
  border-radius: 5px;
  color: #A49999;
}
 .active {
  border-bottom: 5px solid #33CCFF;
  color: #33CCFF;
}
.nav-links li a:hover {
  color: #34AEAE;
}
.video-active:hover {
  border-bottom: 5px solid red;
}
.about:hover{
  color:#3EB2B2;
  border-bottom: 5px solid #33CC66;
}
.contact:hover{
color:#029A9A;
border-bottom: 5px solid #CC66CC

}

.hero {
  width: 100%;
  height: 200px;

  background-image: url('/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;


}
.contact{
    width: 100%;
    height: 1700px;

}

.contact-h1{
    color: #099999;
}
input {
    width: 300px;
    padding: 14px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: 0.3s ease;
    background: #fff;
    color:royalblue
}
.dropdown{
    position:relative;
    width:100%;
}

.dropbtn{
    width:331px;
    padding:14px 16px;
    border:1px solid #ddd;
    border-radius:8px;
    background:#fff;
    color:#099999;
    text-align:left;
    cursor:pointer;
}

.dropdown-content{
    position:absolute;
    width:331px;
    background:#fff;
    box-shadow:0 4px 8px rgba(0,0,0,.15);
    z-index:100;
}

.dropdown-content a{
    display:block;
    padding:12px;
    text-decoration:none;
    color:#333;
}

.dropdown-content a:hover{
    background:blue;
    color:#fff;
}
textarea{
    width:300px;
    height:150px;
    margin-top:20px;
    padding:15px;
    border:1px solid #ddd;
    border-radius:8px;
    resize:none;
    outline: none;
}
.send-btn{
    margin-top:20px;
    padding:12px 30px;
    border:none;
    border-radius:8px;
    background:#099999;
    color:#fff;
    cursor:pointer;
}

.send-btn:hover{
    background:#009999;
}
.parent{
  display:flex;
  justify-content: space-around;
}
.ourlocation{
  width: 400px;
  height: 500px;

}

.contact-1{
  margin-left: 20px;
  width: 410px;
}
.ouraddress{
  margin-left: 20px;
  width: 410px;
}
.ouraddress-h1{
  color: #009999;
}
input,
textarea {
    color: #099999;
}

input::placeholder,
textarea::placeholder {
    color: #099999;
}

.send-btn {
    background: #099999;
    color: #fff;
}

.dropbtn {
    color: #099999;
}
.ouraddress-p1{
  margin-top: 23px;
  line-height: 1.4;
  color:#C1C1C1
 
}
.ouraddress-p2{
  margin-top: 23px;
  line-height: 1.4;
  color:#C1C1C1
}
.ouraddress-p3{
    margin-top: 23px;
  line-height: 1.4;
  color:#C1C1C1
}
.last-second{
    display:flex;
    flex-direction:column;
    gap:15px;
    line-height: 1.9;
    margin-top: 40px;
}

.last-second a{
    text-decoration:none;
    color:#C1C1C1;
    font-size:18px;
    display:flex;
    align-items:center;
    gap:10px;
}

.last-second a i{
    color:#C1C1C1;
    font-size:20px;
}

.last-second a:hover,
.last-second a:hover i{
    color: #009999;
}
.image{
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  gap: 10px;
}
.image-1{
  width: 300px;
  height: 490px;
 margin-left: 10px;

}
.image-2{
  width: 300px;
  height: 490px;
 margin-left: 10px;

}
img{
  width: 300px;
  height: 180px;
}



.ryan{
  color: #099999;
}

.ryan-p{
  color: #CC6699;
  font-size: 23px;
}
.ryan-pp{
  line-height: 1.4;
  color: #C1C1C1;
}







.social-icons{
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-icons a{
    width: 45px;
    height: 45px;
    border: 1px solid #C1C1C1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s ease;
    background-color: #C1C1C1;
    outline: none;
}

.social-icons a i{
    font-size: 20px;
    color:black;
    transition: 0.3s ease;
}

.social-icons a:hover{
    background: #009999;
}

.social-icons a:hover i{
    color: #fff;
}
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


/* Responsive */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    gap: 10px;
  }

  .nav-links li a {
    display: block;
    width: 100%;
  }
}
</style>