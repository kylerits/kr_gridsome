// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'KR Portfolio',
  siteDescription: 'The web development portfolio for Fort Wayne native, Kyle Rodgers',
  plugins: [],
  icon: {
    favicon: {
      src: 'src/assets/favicon/favicon-16x16.png',
      sizes: [16]
    },
    touchicon: 'src/assets/favicon/favicon-16x16.png'
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}

