<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <intro>
      <tile type="light">

        <h1 class="title">I am a<br> web developer.</h1>
      
        <p>
          I utilize tools afforded me by hours of learning, practicing, testing, failing, and succeeding in order to create digital productls that make an impact in the physical world.
        </p>

      </tile>
    </intro>

  </Layout>
</template>

<script>
import Intro from '~/components/Intro.vue'
import Tile from '~/components/Tile.vue'

export default {
 components: {
   Intro,
   Tile
 }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
</style>
