<template>
  <section id="intro" class="full-screen">
    <bg-grid v-rellax="rellax" color="dark"/>
    <div class="content-wrap">
      <div class="container position-relative">
        <div class="illustration-wrap" v-if="illustration" v-rellax="rellax">
          <div class="illustration">
            <slot name="illustration"></slot>
          </div>
        </div>

        <div class="row full-height justify-content-center align-content-center">
          <div class="col-md-9 col-lg-7">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="slope"></div>
  </section>
</template>

<script>
import BgGrid from "~/components/BgGrid.vue";
export default {
  props: ["illustration"],
  components: {
    BgGrid
  },
  data() {
    return {
      rellax: {
        speed: -4
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/global/variables";

.full-screen {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-bottom: -8rem;

  @media (min-width: $md) {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 95vh;
  }
}

.full-height {
  height: auto;
  padding: 2rem 0;
  @media (min-width: $md) {
    padding: 0;
    min-height: 85vh;
  }
}

.background-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.slope {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  // background: $white;
  border-bottom: 5vh solid $dark;
  border-right: 100vw solid transparent;
}

.illustration-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;

  .illustration {
    padding: 1rem;
  }
}

@media (min-width: $md) {
  .slope {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    // background: $white;
    border-bottom: 15vh solid $dark;
    border-right: 100vw solid transparent;
  }

  .illustration-wrap {
    padding-top: 0;

    .illustration {
      position: absolute;
      width: 50vw;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      padding: 0;

      svg {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
