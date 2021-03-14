// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'C3P Twitter Birthday',
  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'FR',
          'ENG'
        ],
        pathAliases: { // path segment alias for each locales
          'FR': 'fr',
          'ENG': 'en'
        },
        fallbackLocale: 'eng-gb', // fallback language
        defaultLocale: 'eng-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'FR': require('./src/locales/fr-fr.json'),
          'ENG': require('./src/locales/en-gb.json'),
        }
      }
    }
  ]
}
