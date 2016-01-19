var createEngine = require('voxel-engine-stackgl')

var main = function() {
  createEngine({pluginLoaders: {
    'voxel-bedrock': require('voxel-bedrock'),
    'voxel-flatland': require('voxel-flatland'),
  }, exposeGlobal: true, pluginOpts: {
    'game-shell-fps-camera': {position: [-4, -40, -5], rotationX:15*Math.PI/180, rotationY:135*Math.PI/180 },

    'voxel-bedrock': {},
    'voxel-flatland': {block: 'bedrock'},
  }})
};

module.exports = main

