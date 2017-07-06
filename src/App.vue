<template>
  <div id="app">
    <a-header></a-header>
  </div>
</template>

<script>

import aHeader from '@/components/header.vue'

export default {
  name: 'app',
  components: {
      aHeader
  },

  computed: {

  }
}
</script>

<style lang="css">
  @import 'assets/css/reset.css';
</style>
