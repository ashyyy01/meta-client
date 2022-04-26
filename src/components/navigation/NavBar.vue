<template>
  <b-navbar class="navbar">
    <template #brand>
      <img class="logo" alt="Meta logo" src="../../assets/logo.png" />
      <span class="temp">Meta Management Portal :: 1st Prototype</span>
    </template>
    <template #start> </template>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light"
            ><i class="fa fa-sign-out-alt" style="margin-right: 10px"></i> Log
            out
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-image: linear-gradient(to left, #2a2a2e, #2a2a2e);
  /* background-color: #2a2a2e; */
  z-index: 40 !important;
}
.logo {
  height: 3rem;
  width: 3rem;
  margin-left: 2rem;
}
.temp {
  color: #48cb73;
  margin: 1rem 0 0 1rem;
  /* font-weight: bold;
  font-style: italic; */
  font-size: 24px;
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
}
</style>