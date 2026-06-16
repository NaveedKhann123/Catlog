<template>
<div class="pagination">

  <button class="nav-btn">
    ← Previous
  </button>

  <div class="page-numbers">
    <button class="page active">1</button>
    <button class="page">2</button>
    <button class="page">3</button>
    <button class="page">4</button>
    <button class="page">5</button>
  </div>

  <button class="nav-btn">
    Next Page →
  </button>

</div>


</template>

<style scoped>
.pagination{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 70px;
}

.nav-btn{
    background-color: #59BDBD;
    color: white;
    border: 2px solid #59BDBD;
    height: 42px;
    width: 150px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-left: -50px;
    margin-right: -50px;
}
.nav-btn:first-child{
    background: #59BDBD;
    color: white;
    border: 2px solid #59BDBD;
}
.nav-btn:last-child:hover{
    background: #086969;
    border-color: #086969;
}
.page-numbers{
    display: flex;
    gap: 20px;
    align-items: center;
}
.page{
    width: 60px;
    height: 50px;
    border: 1px solid #ddd;
    background: white;
    cursor: pointer;
    border-radius: 5px;
    gap: 20px;
}

.page.active{
    background-color: #009999;
    color: white;
    border-color: #009999;
}
.page:hover{
background-color: #009999;
color: white;
}

</style>