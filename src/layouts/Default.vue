<template>
  <div id="main">
    <header-comp />
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import HeaderComp from '~/components/Header.vue'

export default {
  components: {
    HeaderComp
  }  
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
