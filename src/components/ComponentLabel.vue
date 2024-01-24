<template>
  <div class="component">
    <div
      ref="inputLabel"
      contenteditable="true"
      v-text="label"
      @input="changeLabel"
      @compositionstart="mutateComposition($event, 'start')"
      @compositionend="mutateComposition($event, 'end')"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isCompositioning: false,
    };
  },
  computed: {
    ...mapGetters({
      label: 'getLabel',
    }),
  },
  methods: {
    changeLabel(event) {
      let updateLabel = event.target.textContent.trim();
      if (this.isCompositioning || updateLabel.length === 0) {
        return;
      }

      // commitするとカーソルが先頭に移動しちゃうので、カーソル位置を保持しておく
      const selection = window.getSelection();
      const offset = selection.focusOffset;

      this.$store.commit('SET_LABEL', updateLabel);
      this.$refs.inputLabel.innerText = updateLabel;

      // コミットした後、カーソル位置を戻す
      this.$nextTick(() => {
        if (!event.target.firstChild || event.target.firstChild.textContent.length < offset) {
          return;
        }
        const range = document.createRange();
        range.setStart(event.target.firstChild, offset);
        range.setEnd(event.target.firstChild, offset);
        selection.removeAllRanges();
        selection.addRange(range);
      });
    },
    mutateComposition(event, state) {
      this.isCompositioning = state === 'start';
      if (state === 'end') {
        this.changeLabel(event);
      }
    },
  },
};
</script>

<style scoped>
.component {
  padding: 200px;
}
</style>
