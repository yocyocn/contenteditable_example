<template>
  <div class="component">
    <div ref="inputLabel" contenteditable="true" v-text="label" @blur="changeLabel"></div>
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
    changeLabel(event) {
      let updateLabel = event.target.textContent.trim();
      this.$store.commit('SET_LABEL', updateLabel);
      this.$refs.inputLabel.innerText = updateLabel;
    },
  },
};
</script>

<style scoped>
.component {
  padding: 200px;
}
</style>
