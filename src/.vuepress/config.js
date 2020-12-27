module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Ángel Cruz Notes",
  locales: {
    "/": {
      lang: "es-ES",
    },
  },

  description: `Bienvenido 😃
  Sientete libre de explorar y colaborar en las notas`,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      { text: "Utilidades", link: "/utilities/" },
      { text: "Frontend", link: "/frontend/" },
      { text: "Backend", link: "/backend/" },
      { text: "VuePress", link: "https://v1.vuepress.vuejs.org" },
    ],
    sidebar: {
      "/utilities/": ["", "git"],
      "/frontend/": ["", "html", "css", "js"],
      "/backend/": [""],
    },
  },
};
