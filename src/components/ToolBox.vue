<template>
    <section class="section-margin tool-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-6">
                    <div class="info-wrap mb-5">
                        <slot></slot>
                    </div>
                </div>
                <div class="col-lg-7 col-md-6">
                    <div class="tool-grid">
                        <!-- Tool Loop -->
                        <div 
                            v-for="(tool, index) in tools"
                            :key="`tool-${index}`"
                            class="tool-wrap">
                            <button class="tool-button circle-button" :aria-label="tool.title">
                                <!-- tool icon -->
                                <brand-icon :icon="tool.icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BrandIcon from '~/components/BrandIcon.vue'

export default {
    components: {
        BrandIcon
    },
    data() {
        return {
            tools: [
                {
                    title: 'Github',
                    desc: 'Collaborative project workflow tool.',
                    icon: 'github'
                },
                {
                    title: 'Webpack',
                    desc: 'Code running and build tool.',
                    icon: 'webpack'
                },
                {
                    title: 'Vue',
                    desc: 'Powerful and eloquent javascript framework.',
                    icon: 'vue'
                },
                {
                    title: 'Sass',
                    desc: 'CSS processing language.',
                    icon: 'sass'
                },
                {
                    title: 'Laravel',
                    desc: 'PHP framework.',
                    icon: 'laravel'
                },
                {
                    title: 'Craft',
                    desc: 'Incredibly scalable and flexible CMS.',
                    icon: 'craft'
                },
                {
                    title: 'Wordpress',
                    desc: 'Popular PHP based CMS.',
                    icon: 'wordpress'
                },
                {
                    title: 'Heroku',
                    desc: 'Popular PHP based CMS.',
                    icon: 'heroku'
                },
                {
                    title: 'Netlify',
                    desc: 'Popular PHP based CMS.',
                    icon: 'netlify'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";

.tool-box {
    .tool-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        .tool-wrap {
            display: flex;
            justify-content: center;
            .tool-button {
                margin-bottom: 2rem;
            }
        }
        @media (min-width: $md) {
            grid-template-columns: repeat(4, 1fr);
            .tool-wrap {
                &:nth-child(even) {
                    transform: translateY(50%);
                }
                .tool-button {
                    margin-bottom: 4rem;
                }
            }
            
        }
    }
}
</style>
