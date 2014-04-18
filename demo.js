require('./lib/blocks.js')
require('./lib/terrain.js')

require('./')({require: require, pluginOpts: {
  './lib/blocks.js': {},
  './lib/terrain.js': {},
  'game-shell-fps-camera': {position: [28,-37,27], rotationX:20*Math.PI/180, rotationY:133*Math.PI/180},
}})
