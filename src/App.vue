<template>
  <v-app>
    <router-view v-if="loaded" />

    <v-snackbar
      v-for="(item, index) in snackbars"
      :key="`snackbars_${index}`"
      v-bind="item"
      @input="$store.commit('app/snackbarDelete', index)"
    >
      {{ item.message }}
    </v-snackbar>

    <v-overlay :value="spinner">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      loaded: true,
    };
  },

  computed: {
    ...mapState('app', ['spinner']),
    ...mapState('app', ['snackbars']),
  },
};
</script>

<style lang="scss">
@import './css/base.scss';
</style>
