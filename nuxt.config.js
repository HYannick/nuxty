module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxty',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: ['~/plugins/element-ui.js', '~/plugins/filters.js'],
  loading: { color: '#3B8070' },
  css: [
    'element-ui/lib/theme-default/index.css',
    '~/assets/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'element-ui']
  }
}
