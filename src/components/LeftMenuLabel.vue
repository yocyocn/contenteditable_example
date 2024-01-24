<template>
  <div class="menu-container">
    <div>左のメニューのラベル</div>
    <input type="text" :value="label" @input="updateLabel" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      label: 'getLabel',
    }),
  },
  methods: {
    updateLabel(event) {
      const newLabel = event.target.value.trim();
      this.$store.commit('SET_LABEL', newLabel);
      event.target.value = newLabel;
    },
  },
};
</script>

<style scoped>
.menu-container {
  padding: 40px;
  color: #fff;
}
</style>
