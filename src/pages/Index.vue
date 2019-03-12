<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <intro>
      
      <h1 class="title">I am a<br> web developer.</h1>
    
      <p>
        I utilize tools afforded me by countless hours of learning, practice, testing, failure, and success in order to create digital productls that make an impact in the physical world.
      </p>

    </intro>

  </Layout>
</template>

<script>
import Intro from '~/components/Intro.vue'
export default {
 components: {
   Intro
 }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
</style>
