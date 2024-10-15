<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <router-link class="navbar-brand" to="/">
          <span> {{ title }} </span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li
              v-for="(item, index) in navs"
              class="nav-item"
              :key="index"
              :class="{ active: $route.path == item.path }"
            >
              <router-link :to="item.path" class="nav-link"
                >{{ $t(item.name) }}
                <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item">
              <button @click="changeLanguage">Switch Language</button>
            </li>
            <form class="form-inline">
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: "home",
          path: "/",
        },
        {
          name: "about",
          path: "/about",
        },
        {
          name: "skills",
          path: "/skills",
        },

        {
          name: "experiences",
          path: "/experiences",
        },

        {
          name: "contact",
          path: "/contact",
        },
      ],
      title: process.env.VUE_APP_TITLE,
    };
  },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>