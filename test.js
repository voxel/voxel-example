require('./lib/blocks') // TODO: refactor with game-shell-voxel

require('./')({require: require, pluginOpts: {
  './lib/blocks': {}
}})
