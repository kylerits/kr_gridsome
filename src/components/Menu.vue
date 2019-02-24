<template>
    <transition-group 
        name="menu" 
        tag="ul" 
        appear
        :css="false"
        @before="beforeEnter"
        @enter="enter"
        @leave="leave">
        <li 
            v-for="(item, index) in menu"
            :key="item.slug" 
            :data-index="index">
            <g-link class="nav__link" :to="{ name: item.slug }">{{ item.title }}</g-link>
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
            el.style.marginRight = '-1rem'
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
                { opacity: 0, marginRight: '-1rem' },
                { complete: done }
                )
            }, delay)
        },
    }
}
</script>

<style lang="scss" scoped>

</style>

