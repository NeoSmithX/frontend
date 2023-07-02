// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// If you are using dotenv (https://www.npmjs.com/package/dotenv)
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindcssPlugin = require('./plugins/tailwind-loader.cjs');

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: section,
      path: `docs/${section}`,
      routeBasePath: section,
      include: ['**/*.md', '**/*.mdx'],
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/NeoSmithX/frontend-for-polkadot-js-ink-tutorial',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('polkadot-js-start'),
  // defineSection('solidity-advanced'),
  // defineSection('solidity-application'),
  // defineSection('ether-start'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polkadot Academy',
  tagline: 'Open University for Polkadot Developers',
  url: 'https://NeoSmithX.github.io',
  baseUrl: '/frontend-for-polkadot-js-ink-tutorial/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NeoSmithX', // Usually your GitHub org/user name.
  projectName: 'frontend-for-polkadot-js-ink-tutorial', // Usually your repo name.
  themes: ['solive-docusaurus-theme-code'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    ...SECTIONS,
    webpackPlugin,
    tailwindcssPlugin,
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/polkadot_log.png',
      navbar: {
        logo: {
          alt: 'polkadot Logo',
          src: 'img/polkadot_log.png',
        },
        items: [
          // {
          //   href: '/learning-center',
          //   label: '波卡架构',
          //   position: 'left',
          // },
          {
            href: '/polkadot-js-start',
            position: 'left',
            exact: false,
            label: 'polkadot-js 101',
          },
          // {
          //   href: '/solidity-advanced',
          //   position: 'left',
          //   exact: false,
          //   label: 'polkadot-js 102',
          // },
          // {
          //   href: '/solidity-application',
          //   position: 'left',
          //   exact: false,
          //   label: 'polkadot-ink 101',
          // },
          // {
          //   href: 'https://github.com/AmazingAng/WTFSolidity/discussions',
          //   label: 'Forum',
          //   position: 'left',
          // },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'custom-profile',
            position: 'right'
          }
        ],
      },
      footer: {
        logo: {
          src: 'img/polkadot_log.png',
          height: '36px',
        },
        links: [
          // {
          //   title: 'Products',
          //   items: [
          //     {
          //       label: 'Learning Center',
          //       to: '/learning-center',
          //     },
          //     {
          //       label: 'Courses',
          //       to: '/learning-center',
          //     },
          //     {
          //       label: 'Youtube',
          //       href: 'https://www.youtube.com/channel/UCosq09qMFKuxA7pVCw1Xt_g',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com',
              // },
              {
                label: 'Discord',
                href: 'https://discord.gg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Mr_Neo_Smith',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCosq09qMFKuxA7pVCw1Xt_g',
              },
            ],
          },
          {
            title: 'Donation',
            items: [
              {
                label: 'Gitcoin',
                href: 'https://gitcoin.co/',
              },
              {
                label: 'Mirror',
                href: 'https://mirror.xyz/',
              },
            ],
          },
        ],
        // copyright:"ddd"
        // copyright: '339339'
        copyright: `© Polkadot Academy.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"]
      },
    }),
};

module.exports = config;
