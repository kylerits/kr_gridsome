<template>
    <div class="lines" :class="type">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    props: [ 'type' ]
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";

.lines {
    width: 6rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: $skew;

    .line {
        width: 0.2rem;
        height: 100%;
        background: $primary;
        transform: rotate(45deg);
        border-radius: 0.5rem;
    }

    &.primary {
        .line {
            background: $primary;
        }
    }

    &.secondary {
        .line {
            background: $secondary;
        }
    }
}
</style>
