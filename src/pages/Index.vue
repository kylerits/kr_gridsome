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
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <p class="mb-0">Need help on a project?</p>
            <h2 class="title">You may need a freelancer.</h2>
            <p>
              <g-link :to="{ name: 'freelance' }" class="btn btn-secondary">Learn more</g-link>
            </p>
          </div>
        </div>
      </div>
    </section>

    <tool-box>
      <h2>Check out what is in my tool box.</h2>
      <p>This is a collection of some of my favorite tools to use when building websites.</p>
    </tool-box>

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
