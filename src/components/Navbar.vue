
<template>
  <nav class="navbar">
    <div class="logo">Catalog-Z</div>

    <ul class="nav-links">
      <li><router-link to="/" class="nav-item">Home</router-link></li>
      <li><router-link to="/video" class="nav-item">Video</router-link></li>
      <li><router-link to="/about" class="nav-item">About</router-link></li>
      <li><router-link to="/contact" class="nav-item">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: rgba(0, 0, 255, 0.6);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-item {
  text-decoration: none;
  font-size: 20px;
  color: #A49999;
  padding: 8px 12px;
  transition: 0.3s;
}

.nav-item:hover {
  color: #34AEAE;
}

/* ACTIVE LINK */
.router-link-active {
  color: #33CCFF;
  border-bottom: 3px solid #33CCFF;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }
}
</style>