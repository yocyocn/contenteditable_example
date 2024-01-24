<template>
  <div class="app">
    <div class="left-menu">
      <left-menu-label></left-menu-label>
    </div>
    <div>
      <component-label></component-label>
    </div>
  </div>
</template>

<script>
import ComponentLabel from './components/ComponentLabel.vue';
import LeftMenuLabel from './components/LeftMenuLabel.vue';

export default {
  name: 'App',
  components: {
    'component-label': ComponentLabel,
    'left-menu-label': LeftMenuLabel,
  },
};
</script>

<style>
.app {
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
}
.left-menu {
  background-color: #286663;
}
</style>
