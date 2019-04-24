<template>
  <section class="section-margin tool-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <div class="info-wrap mb-5">
            <slot v-if="!hide"></slot>
            <tile v-if="visible">
              <h2 class="mb-0">{{ toolName }}</h2>
              <p>{{ toolDesc }}</p>
              <p>
                <a :href="toolSite" target="_blank" rel="noreferrer">Check out {{ toolName }}</a>
              </p>
              <brand-icon :icon="toolIcon" slot="icon"/>
            </tile>
          </div>
        </div>
        <div class="col-lg-7 col-md-6">
          <div class="tool-grid">
            <!-- Tool Loop -->
            <div v-for="(tool, index) in tools" :key="`tool-${index}`" class="tool-wrap">
              <button
                class="tool-button circle-button"
                @click="showInfo(tool.title, tool.desc, tool.site, tool.icon)"
                :aria-label="tool.title"
              >
                <!-- tool icon -->
                <brand-icon :icon="tool.icon"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BrandIcon from "~/components/BrandIcon.vue";
import Tile from "~/components/Tile.vue";
import { setTimeout } from "timers";

export default {
  components: {
    BrandIcon,
    Tile
  },
  data() {
    return {
      visible: false,
      hide: false,
      toolName: "",
      toolDesc: "",
      toolSite: "",
      toolIcon: "",
      tools: [
        {
          title: "Github",
          desc:
            "GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 31 million developers.",
          icon: "github",
          site: "https://github.com/"
        },
        {
          title: "Webpack",
          desc:
            'A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.',
          icon: "webpack",
          site: "https://webpack.js.org/"
        },
        {
          title: "Node JS",
          desc:
            "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.",
          icon: "nodejs",
          site: "https://nodejs.org/en/"
        },
        {
          title: "Vue",
          desc:
            "Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
          icon: "vue",
          site: "https://vuejs.org/"
        },
        {
          title: "Sass",
          desc:
            "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
          icon: "sass",
          site: "https://sass-lang.com/"
        },
        {
          title: "Laravel",
          desc: "A PHP framework for web artisans.",
          icon: "laravel",
          site: "https://laravel.com/"
        },
        {
          title: "Craft",
          desc:
            "Craft is a flexible, user-friendly CMS for creating custom digital experiences on the web and beyond.",
          icon: "craft",
          site: "https://craftcms.com/"
        },
        {
          title: "Wordpress",
          desc:
            "WordPress is open source CMS software you can use to create a beautiful website, blog, or app.",
          icon: "wordpress",
          site: "https://wordpress.org/"
        },
        {
          title: "Heroku",
          desc:
            "Heroku is a cloud platform as a service supporting several programming languages.",
          icon: "heroku",
          site: "https://www.heroku.com/"
        },
        {
          title: "Netlify",
          desc:
            "An all-in-one workflow that combines global deployment, continuous integration, and automatic HTTPS. And that’s just the beginning.",
          icon: "netlify",
          site: "https://www.netlify.com/"
        },
        {
          title: "VS Code",
          desc:
            "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.",
          icon: "vs-code",
          site: "https://code.visualstudio.com/"
        }
      ]
    };
  },
  methods: {
    showInfo: function(tool, desc, site, icon) {
      this.visible = false;
      this.hide = true;
      this.toolName = tool;
      this.toolDesc = desc;
      this.toolSite = site;
      this.toolIcon = icon;

      setTimeout(() => {
        this.visible = true;
      }, 200);
    }
  }
};
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
