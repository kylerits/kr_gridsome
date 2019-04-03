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

    <section class="section-margin">
      <div class="container">
        <div class="text-center">
          <h2 class="title">The Toolbox</h2>
        </div>
      </div>

      <tool-box>
        <h2>An ever-growing list:</h2>
        <p>This is a collection of some of my favorite tools to use when building websites. I try to stay up to date with latest technology that is available, both for the benefit of client and because I have an incessant need desire to play tech that in new and shiny.</p>
      </tool-box>
    </section>

  </Layout>
</template>

<script>
import Intro from '~/components/Intro.vue'
import Tile from '~/components/Tile.vue'
import ToolBox from '~/components/ToolBox.vue'

export default {
 components: {
   Intro,
   Tile,
   ToolBox
 }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
</style>
