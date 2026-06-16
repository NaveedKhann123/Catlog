<script setup >
import Hero from '../components/Hero.vue';
import Lastpage from '../components/Lastpage.vue';


</script>





<template>




<Hero/>



<div class="about">
    <h1 class="about-tittle">About Catalog-Z Website Template</h1>

    <div class="about-container">
        <div class="about-image"></div>
        <div class="about-content">
            You may support TemplateMo website by making a small contribution via PayPal. This will be helpful for us. We hope you like this Catalog-Z photo / video template for your website. We are making new templates regularly for you. Please come back and visit our TemplateMo website again.Credits go to Pexels and Unsplash for photos and video used in this template. Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template designed for video and photo websitesYou are allowed to use this template for your commercial or non-commercial websites. You can integrate it with any kind of CMS website. You are NOT allowed to redistribute the downloadable template ZIP file on any template collection website. Please contact us for more information. Thank you.

        </div>
    </div>

    <div class="content">
      <div class="content-1">
        <h1 class="">Left side of 2-Column content</h1>
        <p>Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.

        Suspendisse id consequat risus. Aliquam varius posuere nunc, nec imperdiet neque condimentum at. Aenean porta eleifend venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
      </div>

       <div class="content-2">
        <h1>Left side of 2-Column content</h1>
        <p>Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.

        Suspendisse id consequat risus. Aliquam varius posuere nunc, nec imperdiet neque condimentum at. Aenean porta eleifend venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

       </div>
    </div>

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
            Cras auctor velit urna, et feugiat ex tincidunt ut. Sed viverra, elit at pulvinar tristique, sem quam vehicula dolor, sed scelerisque augue mauris non dolor.
        </p>
    </div>

    <div class="service-card">
        <div class="icon-box">
            <i class="fas fa-mobile-alt"></i>
        </div>

        <h2>Title two of three-column</h2>

        <p>
           Donec nec est tincidunt, rhoncus nulla sit amet, imperdiet augue. Phasellus sodales placerat ipsum ac auctor. Mauris molestie blandit turpis. Mauris ante tellus, feugiat nec metus non, bibendum semper velit.
        </p>

        <button>Read More</button>
    </div>

    <div class="service-card">
        <div class="icon-box">
            <i class="fas fa-image"></i>
        </div>

        <h2>Third Title goes here</h2>

        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec est tincidunt, rhoncus nulla sit amet, imperdiet augue.
        </p>

        <p>
          Phasellus sodales placerat ipsum ac auctor. Mauris molestie blandit turpis. Mauris ante tellus, feugiat nec metus non, bibendum semper velit.
        </p>
    </div>
</section>

  <Lastpage/>

</div>

</template>


<style scoped>





.about {
    width: 100%;
    background-color: #fff;
    padding: 40px 20px;
    height: 1900px;
}

.about-tittle {
    margin-top: 40px;
    color: #009999;
  
}


.about-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    max-width: 1200px;
    margin: auto;
}



.about-image {
    flex: 1;
    max-width: 600px;
    min-width: 600px;
    min-height: 300px;
     background-image: url("/public/about.jpg");
}


.about-content {
    flex: 2;
    line-height: 2.7;
    color: #C1C1C1;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
}

.content-1,
.content-2 {
    flex: 1;
    min-width: 0;
}

.content-1 h1,
.content-2 h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #009999;
    line-height: 1.3;
}

.content-1 p,
.content-2 p {
    font-size: 1rem;
    line-height: 1.8;
    color: #666;
    text-align: justify;
}


.services{
    max-width:1200px;
    margin:80px auto;
    padding:0 20px;

    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:60px;
}

.service-card{
    display:flex;
    flex-direction:column;
}

.icon-box{
    width:160px;
    height:160px;
    border:1px solid #0a9ca0;

    display:flex;
    justify-content:center;
    align-items:center;

    margin-bottom:50px;
}

.icon-box i{
    font-size:70px;
    color:#0a9ca0;
}

.service-card h2{
    font-size:30px;
    color:#0a9ca0;
 

}

.service-card p{
    color:#8d8d8d;
    font-size:20px;

  
}


</style>