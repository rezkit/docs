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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RezKit',
        logo: {
          alt: 'RezKit Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'platform/intro',
            position: 'left',
            label: 'Platform',
            sidebarId: 'platform'
          },
          {
            type: 'doc',
            docId: 'tours/intro',
            position: 'left',
            label: 'Tours',
            sidebarId: 'tours'
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
                label: 'Connect to the API',
                to: '/docs/platform/api/setup',
              },
              {
                label: 'Build a Product Provider',
                to: '/docs/platform/product-provider/tutorial-build-a-product-provider/introduction',
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
