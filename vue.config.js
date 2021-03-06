module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '.'
      }
    }
  },
  pwa: {
    themeColor: '#20731C',
    msTileColor: '#FAFAFA'
  },
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/connect-melbournecbd.pineapple.net.au/'
    : '/'
}
