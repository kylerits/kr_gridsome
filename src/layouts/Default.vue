<template>
  <div id="main">
    <main id="default">
      <header-comp/>
      <slot/>
    </main>
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
import HeaderComp from "~/components/Header.vue";

export default {
  components: {
    HeaderComp
  }
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";

body {
  // background: darken($primary, 2%);
  // color: $light;
  background: white;
  color: $dark;
  padding-bottom: 1rem;
}
</style>
