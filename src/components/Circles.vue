<template>
    <div class="circles" :class="type">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>

<script>
export default {
    props: [ 'type' ]
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";

.circles {
    width: 8rem;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: $skew;

    .circle {
        width: 1rem;
        height: 1rem;
        border: solid 0.1rem;
        border-radius: 50%;
        &:nth-child(even) {
            align-self: flex-end;
        }
    }

    &.primary {
        .circle {
            border-color: $primary;
        }
    }

    &.secondary {
        .circle {
            border-color: $secondary;
        }
    }
}
</style>
