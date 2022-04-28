<template>
  <div id="app">
    <div v-if="!isAuthenticated">
      <log-in @isUserAuthenticated="isAuthenticated = true"></log-in>
    </div>
    <div v-else>
      <nav>
        <nav-bar></nav-bar>
      </nav>
      <side-bar></side-bar>
      <div class="meta-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/navigation/NavBar.vue";
import SideBar from "./components/navigation/SideBar.vue";
import LogIn from "./components/sign-in/LogIn.vue";
export default {
  name: "App",
  components: { NavBar, SideBar, LogIn },
  data() {
    return {
      isAuthenticated: true,
    };
  },
  mounted() {
    this.getPrice().then((response) => {
      console.log(response);
    });
  },
};
</script>

<style>
#app {
  font-family: Calibri, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.meta-body {
  margin: 1rem 1rem 1rem 3.5rem;
  max-width: -webkit-fill-available;
  /* border: 2px red solid; */
}
</style>
