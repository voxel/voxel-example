var createExample = require('./')
var createGUI = require('dat-gui')

require('./lib/blocks.js')
require('./lib/terrain.js')
require('voxel-plugins-ui')
require('kb-bindings-ui')
require('voxel-drop')
require('voxel-keys')
require('voxel-artpacks')
require('voxel-wireframe')

createExample({require: require, pluginOpts: {
  'game-shell-fps-camera': {position: [28,-37,27], rotationX:20*Math.PI/180, rotationY:133*Math.PI/180},
  //'voxel-stitch': {debug: true},

  './lib/blocks.js': {},
  './lib/terrain.js': {},
  'voxel-plugins-ui': {gui: new createGUI.GUI()},
  'kb-bindings-ui': {},
  'voxel-drop': {},
  'voxel-keys': {},
  'voxel-artpacks': {},
  'voxel-wireframe': {},
}})
