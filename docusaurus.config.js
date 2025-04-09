// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RezKit Documentation',
  tagline: 'Documentation for RezKit',
  url: 'https://docs.rezkit.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rezkit', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  themes: ["docusaurus-json-schema-plugin"],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rezkit/docs/tree/master/',
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'RezKit Logo',
          src: 'img/rezkit-core-logo.svg',
          srcDark: 'img/rezkit-core-logo-light.svg',
          height: 55
        },
        items: [
          {
            type: 'doc',
            docId: 'user_guide/user_guide',
            position: 'left',
            label: 'User Guide',
            sidebarId: 'user_guide'
          },
          {
            type: 'doc',
            docId: 'developer/intro',
            position: 'left',
            label: 'Developer Docs',
            sidebarId: 'developer'
          },
          {
            position: 'right',
            label: 'rezkit.com',
            href: 'https://rezkit.com'
          },
          {
            position: 'right',
            label: 'Contact',
            href: '/contact'
          },
          {
            href: 'https://github.com/mrzen/rezkit-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'User Guide',
                to: '/docs/user_guide',
              },              {
                label: 'Connect to the API',
                to: '/docs/developer/api/setup',
              },
              {
                label: 'Build a Product Provider',
                to: '/docs/developer/product-provider/tutorial-build-a-product-provider/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/rezkit',
              },
              {
                label: 'RezKit',
                href: 'https://rezkit.app/'
              },
              {
                label: 'Dashboard',
                href: 'https://dashboard.rezkit.app/'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mrzen',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RezKit Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php']
      },
    }),
};

module.exports = config;
