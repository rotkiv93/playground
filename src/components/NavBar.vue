<script setup>
</script>

<template>
  <nav class="navbar">
    <!-- NAVIGATION MENU -->
    <ul class="nav-links">
      <!-- NAVIGATION MENUS -->
      <div class="menu">
        <router-link class="nav-link" to="/playground/">Home</router-link>
        <router-link class="nav-link" to="/playground/about">About</router-link>
        <router-link class="nav-link" to="/playground/scroll"
          >Scroll</router-link
        >
      </div>
    </ul>
  </nav>
</template>

<style scoped>
/* NAVBAR STYLING STARTS */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  background-color: rgb(87, 0, 128);
  color: #fff;
}
.nav-links a {
  color: #fff;
}
/* LOGO */
.logo {
  font-size: 32px;
}
/* NAVBAR MENU */
.menu {
  display: flex;
  gap: 1em;
  font-size: 18px;
}
.menu li:hover {
  background-color: #4c9e9e;
  border-radius: 5px;
  transition: 0.3s ease;
}
.menu li {
  padding: 5px 14px;
}
/* DROPDOWN MENU */
.services {
  position: relative;
}
.dropdown {
  background-color: rgb(1, 139, 139);
  padding: 1em 0;
  position: absolute; /*WITH RESPECT TO PARENT*/
  display: none;
  border-radius: 8px;
  top: 35px;
}
.dropdown li + li {
  margin-top: 10px;
}
.services:hover .dropdown {
  display: block;
}
</style>
