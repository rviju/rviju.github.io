const siteMetadata = {
  title: 'Viju',
  author: 'Vijayaraghavan R',
  headerTitle: 'Viju',
  description:
    'Personal website of Vijayaraghavan R hosting apps, utilities and articles related to banking and personal finance',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://rviju.github.io',
  siteRepo: 'https://github.com/rviju/rviju.github.io',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'rvnotes143@gmail.com',
  twitter: 'https://twitter.com/Vijay13085315',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    googleAnalyticsId: 'UA-157572600-1', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: '', // supported providers: giscus, utterances, disqus
  },
};

module.exports = siteMetadata;
