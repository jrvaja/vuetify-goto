<template>
  <v-app>
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>
<style type="text/css">
  html {
    overflow: hidden;
  }
  .v-content {
    max-height: 100vh;
  }
  .scroll-container {
    height: 100%;
    position: relative;
    overflow: hidden !important;
  }
  .ps__rail-y {
    left: auto !important;
    right: 0px;
  }
</style>
