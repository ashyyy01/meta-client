<template>
  <div>
    <sidebar-menu :menu="menu" :collapsed="true" />
  </div>
</template>

<script>
import menu_items from "./menu-items";
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

export default {
  components: { SidebarMenu },
  data() {
    return {
      menu: menu_items,
    };
  },
};
</script>
<style scoped>
.v-sidebar-menu {
  margin-top: 3.25rem;
}
.vsm_expanded {
  max-width: 320px !important;
}
.vsm--link {
  padding: 15px 15px !important;
}
</style>