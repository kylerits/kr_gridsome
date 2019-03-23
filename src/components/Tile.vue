<template>
    <div class="tile" :class="type">
        <slot>This is just some dummy text.</slot>
        <div class="lines-wrap">
            <lines type="secondary" />
        </div>
        <div class="circles-wrap">
            <circles type="secondary" />
        </div>
    </div>
</template>

<script>
import Lines from '~/components/Lines.vue'
import Circles from '~/components/Circles.vue'

export default {
    props: [ 'type' ],
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

    * {
        position: relative;
    }

    .lines-wrap {
        position: absolute;
        top: 0;
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

        background: linear-gradient(.25turn, transparentize($white, 0.5), transparentize($light, 0.5));
    }

    &.dark {
        color: $white;
        * {
            color: $white;
        }
        &:before {
            background: linear-gradient(.25turn, transparentize($dark, 0.5), transparentize(darken($dark, 8%), 0.5));
        }
    }
    
    &.light {
        &:before {
            background: linear-gradient(.25turn, transparentize($white, 0.5), transparentize($light, 0.5));
        }
    }

}
</style>
