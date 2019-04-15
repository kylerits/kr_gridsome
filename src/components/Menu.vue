<template>
    <transition-group 
        name="menu" 
        tag="ul" 
        class="nav-list"
        appear
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
        <li 
            class="nav-item"
            v-for="(item, index) in menu"
            :key="item.slug" 
            :data-index="index">
            <g-link class="nav-link pill-button" :to="{ name: item.slug }"><span class="icon-wrap"><font-awesome :icon="item.icon"/></span><span class="link-text">{{ item.title }}</span></g-link>
        </li>
    </transition-group>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: 'About',
                    slug: 'about',
                    icon: 'user'
                },
                {
                    title: 'Projects',
                    slug: 'projects',
                    icon: 'code-branch'
                },
                {
                    title: 'Freelance',
                    slug: 'freelance',
                    icon: 'mug-hot'
                }
            ]
        }
    },
    methods: {
        beforeEnter: (el) => {
            el.style.opacity = 0
            el.style.marginRight = '-1.5rem'
        },
        enter: (el, done) => {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                    el,
                    { opacity: 1, marginRight: 0 },
                    { complete: done }
                )
            }, delay)
        },
        leave: (el, done) => {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                el,
                { opacity: 0, marginRight: '-1.5rem' },
                { complete: done }
                )
            }, delay)
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/_variables.scss";

.nav-list {
    display: block;
    text-align: right;
    padding: 0;
    margin: 0;

    .nav-item {
        display: block;
        margin: 0 0.5rem;
        margin-bottom: 0.8rem;

        .nav-link {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: inline-flex;
            align-items: center;

            .icon-wrap {
                margin-left: -0.5rem;
                margin-right: 0.5rem;
            }
            
            .link-text {
                display: inline;
            }

        }
    }
}

@media (min-width: $md) {
    .nav-list {
        display: block;
        text-align: right;
        .nav-item {
            margin-bottom: 0.8rem;
        }
    }
}
</style>

