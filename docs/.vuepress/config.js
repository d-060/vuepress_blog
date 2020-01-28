// .vuepress/config.js

module.exports = {
  // Title of your website
  title: 'WEB活 日記',

  // Description of your website
  description: 'This is my web_blog',

  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {ga: 'UA-157125969-1'},
    ]
  ],

  markdown: {
    linkify: true,
    config: md => {
      md.use(require('markdown-it-mark'))
    },
  },
  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: require('./public/lang/ja-JP'),

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'Daiki',

      // Introduction of yourself (HTML supported)
      description: '27years old Web designer',

      // Your location
      location: 'Japan',

      // Your avatar image
      // Set to external link
      avatar: '/assets/img/logo.png',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {

        // Twitter account and link
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn',
        },

        // Instagram account and link
        instagram: {
          account: 'meteorlxy.cn',
          link: 'https://www.instagram.com/meteorlxy.cn',
        },

      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        // url: '/assets/img/bg-1.jpg',
        // url: '/assets/img/bg-2.jpg',
        // url: '/assets/img/bg-3.jpg',
        // url: '/assets/img/bg-4.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,


      // Add your custom footer (HTML supported)
      // custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        // url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'All Posts', link: '/_posts/', exact: false },
      { text: 'Categories', link: '/_posts/categories/', exact: false },
      { text: 'About', link: '/about/', exact: false },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /_posts/)
      posts: true,
    },
  },
}