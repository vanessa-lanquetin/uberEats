const { defineConfig } = require('@vue/cli-service')
const pathfs = require('path')

module.exports = defineConfig({
  outputDir: pathfs.resolve(__dirname, 'server', 'public'),
  transpileDependencies: true
})
