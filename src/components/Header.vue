<template>
    <header class="header">
        <g-link :to="{ name: 'home' }" class="circle-button">
            <logo class="logo"></logo>
        </g-link>
        <button class="circle-button secondary" :class="{ visible: visible }" id="triggerNav" @click="toggleNav()">...</button>
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
// SVGs
import Logo from '~/assets/svgs/KR-Logo-FINAL.svg'

// Components
import Menu from '~/components/Menu.vue'

export default {
    name: 'Header',
    components: {
        Logo,
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
@import "../assets/scss/global/variables";

.header {
    position: fixed;
    z-index: 1000;
    bottom: 2rem;
    right: 2rem;
}

.logo {
    width: 30px;
    height: 30px;
}

.nav {
    position: absolute;
    bottom: 1.8rem;
    right: 100%;
    margin: 0 1rem;
}

@media (min-width: $md) {
    .header {
        top: 2rem;
        bottom: auto;
        display: flex;
        padding-bottom: 1rem;
        & > * {
            margin: 0 0.5rem;
        }
    }

    .nav {
        top: 100%;
        right: 0;
    }

}

</style>

