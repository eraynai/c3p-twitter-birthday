// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'C3P Twitter Birthday',
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-KGMWRKH',
        enabled: true,
        loadScript: true,
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'fr',
          'en'
        ],
        pathAliases: { // path segment alias for each locales
          'fr': 'fr',
          'en': 'en'
        },
        fallbackLocale: 'en', // fallback language
        defaultLocale: 'en', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'fr': require('./src/locales/fr-fr.json'),
          'en': require('./src/locales/en-gb.json'),
        }
      }
    }
  ]
}
