<template>
    <figure class="brand">
        <!-- List of svg components -->
        <Github v-if="icon == 'github'"/>
        <Webpack v-if="icon == 'webpack'"/>
        <Vue v-if="icon == 'vue'"/>
        <Sass v-if="icon == 'sass'"/>
        <Laravel v-if="icon == 'laravel'"/>
        <Craft v-if="icon == 'craft'"/>
        <Wordpress v-if="icon == 'wordpress'"/>
        <Heroku v-if="icon == 'heroku'"/>
        <Netlify v-if="icon == 'netlify'"/>
    </figure>
</template>

<script>
import Github from '~/assets/svgs/tools/github.svg'
import Webpack from '~/assets/svgs/tools/webpack.svg'
import Vue from '~/assets/svgs/tools/vue.svg'
import Sass from '~/assets/svgs/tools/sass.svg'
import Laravel from '~/assets/svgs/tools/laravel.svg'
import Craft from '~/assets/svgs/tools/craft.svg'
import Wordpress from '~/assets/svgs/tools/wordpress.svg'
import Heroku from '~/assets/svgs/tools/heroku.svg'
import Netlify from '~/assets/svgs/tools/netlify.svg'

export default {
    props: ['icon'],
    components: {
        Github,
        Webpack,
        Vue,
        Sass,
        Laravel,
        Craft,
        Wordpress,
        Heroku,
        Netlify
    },
}
</script>

<style lang="scss">
.brand {
    display: flex;
    align-items: center;
    svg {
        width: 30px;
        height: 30px;
    }
}
</style>


