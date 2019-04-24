<template>
  <header class="header">
    <g-link :to="{ name: 'home' }" class="circle-button">
      <logo class="logo"></logo>
    </g-link>
    <button
      class="circle-button secondary"
      :class="{ visible: visible }"
      id="triggerNav"
      @click="toggleNav()"
    >
      <div class="lines">
        <div class="line"></div>
        <div class="line short"></div>
        <div class="line"></div>
      </div>
    </button>
    <nav class="nav" v-if="visible">
      <Menu/>
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
import Logo from "~/assets/svgs/KR-Logo-FINAL.svg";

// Components
import Menu from "~/components/Menu.vue";

export default {
  name: "Header",
  components: {
    Logo,
    Menu
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggleNav: function() {
      let lines = document.querySelector(".lines");
      if (this.visible) {
        this.visible = false;
        lines.classList.remove("x");
      } else {
        this.visible = true;
        lines.classList.add("x");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/variables";

.header {
  position: fixed;
  z-index: 1000;
  top: 1rem;
  right: 1rem;
}

.logo {
  width: 30px;
  height: 30px;
}

.nav {
  position: absolute;
  top: 100%;
  right: 0;
  margin: 0 1rem;
}

.circle-button {
  .lines {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    opacity: 0.8;
    .line {
      width: 1.5rem;
      border: solid 1px $white;
      margin-bottom: 0.3rem;
      transition: all 400ms;
      &.short {
        width: 1.1rem;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    &.x {
      .line {
        margin-bottom: 0;
        transform: rotate(45deg);
        &.short {
          border: solid 0 transparent;
        }
        &:last-child {
          margin-top: -2px;
          transform: rotate(-45deg);
        }
      }
    }
  }
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

