<template>
<nav class="navbar">

  <div class="logo">
    Catalog-Z
  </div>

  <ul class="nav-links">
<!-- <li><a href="#" class="active">Photo</a></li> -->
       <li> <router-link to="/">Home</router-link></li>
      <li>  <router-link to="/video">Video</router-link></li>
      <li>  <router-link to="/about">About</router-link> </li>
     <li><router-link to="contact">Contact</router-link></li>
        


  </ul>

</nav>



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