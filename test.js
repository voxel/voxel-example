require('./lib/blocks.js')
require('./lib/terrain.js')

require('./')({require: require, pluginOpts: {
  './lib/blocks.js': {},
  './lib/terrain.js': {},
}})
