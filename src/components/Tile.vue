<template>
  <transition
    appear
    appear-class="slide"
    appear-to-class="slide-to"
    appear-active-class="slide-active"
  >
    <div class="tile" :class="type" v-tilt="tilt">
      <div class="tile-bg">
        <slot name="background"></slot>
      </div>
      <div class="tile-inner">
        <slot>This is just some dummy text.</slot>
      </div>
      <!-- <div class="lines-wrap" v-rellax="rellax">
                <lines type="secondary" />
            </div>
            <div class="circles-wrap" v-rellax="rellax">
                <circles type="secondary" />
      </div>-->
    </div>
  </transition>
</template>

<script>
import Lines from "~/components/Lines.vue";
import Circles from "~/components/Circles.vue";

export default {
  props: ["type"],
  data() {
    return {
      rellax: {
        speed: 0.5,
        center: true,
        // percentage: 1,
        wrapper: this.$el
        // min: -100,
        // max: 100
      },
      tilt: {
        reverse: false, // reverse the tilt direction
        max: 25, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 400, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        glare: true, // if it should have a "glare" effect
        "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
        "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
        "mouse-event-element": null, // css-selector or link to HTML-element what will be listen mouse events
        // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
        gyroscope: true, // Boolean to enable/disable device orientation detection,
        gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
        gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
        gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
        gyroscopeMaxAngleY: 45 // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
      }
    };
  },
  components: {
    Lines,
    Circles
  }
};
</script>

<style lang="scss">
@import "../assets/scss/global/variables";

.tile {
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  color: $dark;
  border-radius: 0.25rem;
  overflow: hidden;

  .tile-bg {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: perspective(1000px) scale(1.2) translateZ(-100px);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .tile-inner {
    position: relative;
    // padding: 2.4rem 2rem;
    padding: 5rem 2.4rem 2rem 2.4rem;
    z-index: 2;
    background: linear-gradient(
      5deg,
      $white,
      transparentize($white, 0.4) 40%,
      transparentize($white, 0.8)
    );
    // background: $white;
    // opacity: 0.8;
  }

  .lines-wrap {
    position: absolute;
    top: 1rem;
    right: 3rem;
  }

  .circles-wrap {
    position: absolute;
    bottom: -1.5rem;
    left: 1rem;
  }

  //   &:before {
  //     content: "";
  //     position: absolute;
  //     top: 1rem;
  //     left: -0.5rem;
  //     width: 100%;
  //     height: 100%;
  //     transform: $skew translateZ(-40px);
  //     box-shadow: $shadow;
  //     border-radius: 0.4rem;
  //     z-index: 0;

  //     background: linear-gradient(
  //       0.25turn,
  //       transparentize($white, 0.1),
  //       transparentize($light, 0.1)
  //     );
  //   }

  &.dark {
    color: $white;
    .tile-inner {
      background: $dark;
    }
    * {
      color: $white;
    }
    // &:before {
    //   background: linear-gradient(
    //     0.25turn,
    //     transparentize($dark, 0.3),
    //     transparentize(darken($dark, 8%), 0.3)
    //   );
    // }
  }

  &.light {
    color: $dark;
    .tile-inner {
      background: linear-gradient(
        5deg,
        transparentize($white, 0.1) 40%,
        transparentize($white, 0.4),
        transparentize($white, 0.8)
      );
    }
    // &:before {
    //   background: linear-gradient(
    //     0.25turn,
    //     transparentize($white, 0.1),
    //     transparentize($light, 0.1)
    //   );
    // }
  }
}

// Transition
.slide-active {
  transform: translate(20%, 10%);
  opacity: 0;
  transition: all 400ms;
}
.slide {
  transform: translate(-20%, -10%);
  opacity: 0;
  transition: all 400ms;
}
.slide-to {
  transform: translate(0, 0);
  opacity: 1;
  transition: all 400ms;
}
</style>
