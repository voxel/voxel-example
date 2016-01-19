var createEngine = require('voxel-engine-stackgl')

var main = function() {
  createEngine({pluginLoaders: {
    './lib/blocks.js': require('./lib/blocks.js'),
    'voxel-flatland': require('voxel-flatland'),
    //'./terrain.js: require('./lib/terrain.js'),
  }, exposeGlobal: true, pluginOpts: {
    'game-shell-fps-camera': {position: [-4, -40, -5], rotationX:15*Math.PI/180, rotationY:135*Math.PI/180 },

    './lib/blocks.js': {},
    'voxel-flatland': {block: 'bedrock'},

    //'./lib/terrain.js': {}
  }})
};

module.exports = main

