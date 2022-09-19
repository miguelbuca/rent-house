module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            components: './src/components',
            hooks: './src/hooks',
            screens: './src/screens',
            utils: './src/utils',
            types: './src/types',
            routes: './src/routes'
          }
        }
      ]
    ]
  }
}