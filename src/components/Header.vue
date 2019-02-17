<template>
    <header class="header">
        <g-link :to="{ name: 'home' }" class="circle-button">
            <g-image alt="Example image" src="~/assets/svgs/KR-Logo-FINAL.svg" width="30" />
        </g-link>
        <button class="circle-button" id="triggerNav" @click="toggleNav()">...</button>
        <nav class="nav" v-if="visible">
            <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
            <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
        </nav>
    </header>
</template>

<static-query>
query {
    metaData {
        siteName
    }
}
</static-query>

<script>
export default {
    name: 'Header',
    data() {
        return {
            visible: false
        }
    },
    methods: {
        toggleNav: function () {
            if (this.visible) {
                this.visible = false
            } else {
                this.visible = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
}
</style>

