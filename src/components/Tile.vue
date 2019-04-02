<template>
    <transition
        appear
        appear-class="slide"
        appear-to-class="slide-to"
        appear-active-class="slide-active">
        <div class="tile" :class="type">
            <div class="tile-inner">
                <slot>This is just some dummy text.</slot>
            </div>
            <div class="lines-wrap" v-rellax="rellax">
                <lines type="secondary" />
            </div>
            <div class="circles-wrap" v-rellax="rellax">
                <circles type="secondary" />
            </div>
        </div>
    </transition>
</template>

<script>
import Lines from '~/components/Lines.vue'
import Circles from '~/components/Circles.vue'

export default {
    props: [ 'type' ],
    data() {
        return {
            rellax: {
                speed: 0.5,
                center: true,
                // percentage: 1,
                wrapper: this.$el,
                // min: -100,
                // max: 100
            }
        }
    },
    components: {
        Lines,
        Circles
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";

.tile {
    position: relative;
    padding: 2.4rem 2rem;
    margin: 1.5rem 0 2rem 0;

    .tile-inner {
        position: relative;
        z-index: 2;
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

    &:before {
        content:'';
        position: absolute;
        top: 1rem;
        left: -0.5rem;
        width: 100%;
        height: 100%;
        transform: $skew;
        box-shadow: $shadow;
        border-radius: 0.4rem;
        z-index: 0;

        background: linear-gradient(.25turn, transparentize($white, 0.3), transparentize($light, 0.3));
    }

    &.dark {
        color: $white;
        * {
            color: $white;
        }
        &:before {
            background: linear-gradient(.25turn, transparentize($dark, 0.3), transparentize(darken($dark, 8%), 0.3));
        }
    }
    
    &.light {
        &:before {
            background: linear-gradient(.25turn, transparentize($white, 0.3), transparentize($light, 0.3));
        }
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
    transform: translate(0,0);
    opacity: 1;
    transition: all 400ms;
}
</style>
