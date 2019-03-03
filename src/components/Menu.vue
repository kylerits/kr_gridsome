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
            <g-link class="nav-link pill-button" :to="{ name: item.slug }"><span class="link-text">{{ item.title }}</span></g-link>
        </li>
    </transition-group>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: 'Home',
                    slug: 'home'
                },
                {
                    title: 'About',
                    slug: 'about'
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
    .nav-list {
        display: flex;
        padding: 0;
        margin: 0;

        .nav-item {
            display: block;
            margin: 0 0.5rem;

            .nav-link {
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        }
    }
</style>

