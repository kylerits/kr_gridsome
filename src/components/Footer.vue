<template>
  <footer id="myFooter">
    <div class="container">
      <p class="copyright text-center py-5">&copy; Kyle Rodgers 2019</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.copyright {
  font-family: $title-font;
  font-size: 0.725rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}
</style>

