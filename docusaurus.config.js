//const remarkPlugin = require("remark-plugin");

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require("prism-react-renderer/themes/github");
//const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const title = "The Founder Engineer Handbook";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: "Building tech before product/market fit",
  url: "https://precious-mochi-9fa3c1.netlify.app", // Url to your site with no trailing slash
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "readikus", // Usually your GitHub org/user name.
  projectName: "early-stage-saas-handbook", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title,
        logo: {
          alt: "Founder Engineer Handbook",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "/category/product",
            position: "left",
            label: "Understand the Product",
          },
          {
            type: "doc",
            docId: "/category/building-the-team",
            position: "left",
            label: "Build The Team",
          },

          {
            type: "doc",
            docId: "/category/engineering-process",
            position: "left",
            label: "Product Engineering",
          },
          {
            type: "doc",
            docId: "engineering-habits/index",
            position: "left",
            label: "Engineering Habits",
          },
          {
            type: "doc",
            docId: "meetings/index",
            position: "left",
            label: "Meetings",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/readikus/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ian Read. Built with Docusaurus.`,
      },
      prism: {
       // theme: lightCodeTheme,
       // darkTheme: darkCodeTheme,
      },
    }),
};

//module.exports = config;
export default config;//
