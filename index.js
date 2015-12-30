var createEngine = require('voxel-engine-stackgl')

require('./lib/blocks.js')
require('./lib/terrain.js')

var main = function() {
  createEngine({require: require, exposeGlobal: true, pluginOpts: {
    'game-shell-fps-camera': {position: [-4, -40, -5], rotationX:15*Math.PI/180, rotationY:135*Math.PI/180 },

    './lib/blocks.js': {},
    './lib/terrain.js': {}
  }})
};

module.exports = main

