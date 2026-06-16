<template>

  <div class="gallery">

    <!-- Header -->
    <div class="top-bar">
      <h2>Latest Photos</h2>

      <div class="page">
        Page <button>1</button> of <span>200</span>
      </div>
    </div>

  <div class="images">

  <div class="child">
    <img src="/public/img-01.jpg" alt="">
    <div class="child-flex">
      <p>18 Oct 2020</p>
      <p>9,906 views</p>
    </div>
  </div>

  <div class="child">
    <img src="/public/img-02.jpg" alt="">
    <div class="child-flex">
      <p>20 Sep 2020</p>
      <p>12,860 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-03.jpg" alt="">
    <div class="child-flex">
      <p>16 Sep 2020</p>
      <p>10,900 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-04.jpg" alt="">
    <div class="child-flex">
      <p>12 Sep 2020</p>
      <p>11,300 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-05.jpg" alt="">
    <div class="child-flex">
      <p>14 Oct 2020</p>
      <p>16,100 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-06.jpg" alt="">
    <div class="child-flex">
      <p>12 Oct 2020</p>
      <p>12,460 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-07.jpg" alt="">
    <div class="child-flex">
      <p>10 Oct 2020</p>
      <p>11,402 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-08.jpg" alt="">
    <div class="child-flex">
      <p>12 Sep 2020</p>
      <p>11,300 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-09.jpg" alt="">
    <div class="child-flex">
      <p>10 Sep 2020</p>
      <p>42,700 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-10.jpg" alt="">
    <div class="child-flex">
      <p>8 Sep 2020</p>
      <p>11,402 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-11.jpg" alt="">
    <div class="child-flex">
      <p>4 Sep 2020</p>
      <p>32,906 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-12.jpg" alt="">
    <div class="child-flex">
      <p>28 Aug 2020</p>
      <p>50,700 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-13.jpg" alt="">
    <div class="child-flex">
      <p>22 Aug 2020</p>
      <p>107,510 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-14.jpg" alt="">
    <div class="child-flex">
      <p>22 Aug 2020</p>
      <p>107,510 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-15.jpg" alt="">
    <div class="child-flex">
      <p>14 Aug 2020</p>
      <p>118,006 views</p>
    </div>
  </div>

  <div>
    <img src="/public/img-16.jpg" alt="">
    <div class="child-flex">
      <p>9 Aug 2020</p>
      <p>121,300 views</p>
    </div>
  </div>

</div>




  </div>

  
</template>

<script setup>

</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.gallery {
  padding: 20px;
}
button{
  width: 40px;
  height: 27px;
  
}


.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar h2 {
  font-size: 29px;
  color: #009999;

}

.page {
  font-size: 14px;
color: #009999;;
}

button{
    color: #009999;
}


.images {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.images img {
  width: 100%;
  height: auto;
  display: block;
}
.child-flex{
    display: flex;
    justify-content: space-between;
    color: #666666;
}

</style>



