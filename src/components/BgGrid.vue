<template>
    <div class="background-wrap" :class="color">
        <div class="background-grid">
            <div class="grid-item first">
                <div class="bg-gradient" :class="color"></div>
            </div>

            <div class="grid-item second">
                <div class="bg-gradient" :class="color"></div>
            </div>

            <div class="grid-item third">
                <div class="bg-gradient" :class="color"></div>
            </div>
            
            <div class="grid-item fourth">
                <div class="bg-gradient" :class="color"></div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['color']
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";
.background-wrap {
    &.primary {
        background: linear-gradient(.3turn, lighten($primary, 5%), lighten($primary, 12%));
    }
    &.secondary {
        background: linear-gradient(.3turn, lighten($secondary, 5%), lighten($secondary, 12%));
    }

    .background-grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        transform: $skew;

        .grid-item {
            position: relative;
            width: 100%;
            height: 100%;
            &.first {
                grid-column: 2;
                grid-row: 1;
            }
            &.second {
                grid-column: 1;
                grid-row: 2;
            }
            &.third {
                grid-column: 4;
                grid-row: 3;
            }
            &.fourth {
                grid-column: 3;
                grid-row: 4;
            }
        }

        .bg-gradient {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            width: 100vw;
            &.primary {
                background: linear-gradient(0.25turn,transparent, $primary 50%, transparent);
            }
            &.secondary {
                background: linear-gradient(0.25turn,transparent, $secondary 50%, transparent);
            }
        }
    }
}
</style>
