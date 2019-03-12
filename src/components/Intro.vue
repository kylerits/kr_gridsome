<template>
    <section id="intro" class="full-screen">
        <bg-grid color="primary" />
        <div class="content-wrap">
            <div class="container">
                <div class="row full-height align-content-center">
                    <div class="col-md-8 col-lg-6">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BgGrid from '~/components/BgGrid.vue'
export default {
    components: {
        BgGrid
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";

.full-screen {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.full-height {
    height: 100vh;
}

.background-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
}
</style>
