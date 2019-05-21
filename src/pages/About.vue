<template>
  <Layout>
    <!-- Page Intro -->
    <intro>
      <h1 class="title">Learn about me.</h1>
      <p
        class="lead"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <!-- <tile type="light">
        <h1 class="title">Learn about me.</h1>
      </tile>-->
    </intro>
  </Layout>
</template>

<script>
import Intro from "~/components/Intro.vue";
import Tile from "~/components/Tile.vue";

export default {
  components: {
    Intro,
    Tile
  }
};
</script>
