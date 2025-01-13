const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081, // Aquí especifica el nuevo puerto puerto
    https: true,
  },
})
