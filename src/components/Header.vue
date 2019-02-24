<template>
    <header class="header">
        <g-link :to="{ name: 'home' }" class="circle-button">
            <g-image alt="Example image" src="~/assets/svgs/KR-Logo-FINAL.svg" width="30" />
        </g-link>
        <button class="circle-button" :class="{ visible: visible }" id="triggerNav" @click="toggleNav()">...</button>
        <nav class="nav" v-if="visible">
            <Menu />
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
import Menu from '~/components/Menu.vue'

export default {
    name: 'Header',
    components: {
        Menu
    },
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
.nav {
    position: absolute;
    bottom: 1.5rem;
    right: 100%;
    margin: 0 1rem;
}
</style>

