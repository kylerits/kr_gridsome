<template>
  <Layout>
    <!-- Page Intro -->
    <intro>
      <tile type="light">
        <h1 class="title">Projects I have built.</h1>
      </tile>
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
