const isDev = process.env.NODE_ENV == 'development'

let plugins = [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-apply'),
    require('postcss-custom-properties'),
    require('postcss-apply'),
    require('postcss-calc'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-color-function'),
    require('pixrem'),
    require('postcss-write-svg'),
    require('autoprefixer')({ browsers: 'last 5 version' })
]

if (!isDev) {
    plugins.push(require('cssnano')({ zindex: false, autoprefixer: false }))
}

module.exports = {
    plugins: plugins
}