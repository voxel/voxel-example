require('voxel-registry')
require('voxel-stitch')
require('./lib/blocks') // TODO: refactor with game-shell-voxel

require('./')({require: require, pluginOpts: {
  'voxel-registry': {},
  'voxel-stitch': {debug: false},
  './lib/blocks': {}
}})
