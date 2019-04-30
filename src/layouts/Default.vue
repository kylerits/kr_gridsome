<template>
  <div id="main">
    <main id="default">
      <header-comp/>
      <slot/>
      <footer-comp/>
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
import FooterComp from "~/components/Footer.vue";

export default {
  components: {
    HeaderComp,
    FooterComp
  }
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";

body {
  // background: darken($primary, 2%);
  // color: $light;
  // background: white;
  background: $dark;
  color: $white;
  padding-bottom: 1rem;
}
</style>
