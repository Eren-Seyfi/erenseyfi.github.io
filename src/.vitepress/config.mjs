import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/", // çünkü bu özel domain için
  title: "CodeGarden by Eren",
  description: "A digital garden of ideas, code, and personal growth by Eren.",

  themeConfig: {
    logo: "/logo.svg",
  },

  locales: {
    root: {
      label: "Türkçe",
      lang: "tr",
      link: "/",
      themeConfig: {
        nav: [
          { text: "Anasayfa", link: "/" },
          { text: "Projeler", link: "/projects" },
          { text: "Kütüphaneler", link: "/libraries" }, // ✅ Eklendi
          { text: "Hakkımda", link: "/about" },
        ],
        outlineTitle: "Bu sayfada",
      },
    },
  },
});
