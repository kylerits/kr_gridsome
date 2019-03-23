<template>
    <section class="section-margin tool-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6">
                    <div class="info-wrap">
                        <slot></slot>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6">
                    <div class="tool-grid">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";

.tool-box {
    .tool-grid {
        @media (min-width: $md) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            
        }
    }
}
</style>
