var createGame = require('voxel-engine')
var extend = require('extend')

module.exports = function(opts, setup) {
  setup = setup || defaultSetup
  var defaults = {
    generate: 'Valley',
    chunkDistance: 2,
    materials: ['#fff', '#000'],
    materialFlatColor: true,
    worldOrigin: [0, 0, 0],
    controls: { discreteFire: true }
  }
  opts = extend({}, defaults, opts || {})

  // setup the game and add some trees
  var game = createGame(opts)
  var container = opts.container || document.body
  window.game = game // for debugging
  game.appendTo(container)
  if (game.notCapable()) return game

  setup(game)

  return game
}

function defaultSetup(game) {
  
  // block interaction
  var currentMaterial = 3

  game.on('fire', function (target, state) {
    var hit = game.raycastVoxels()
    if (!hit) {
      console.log('no block')
      return
    }

    var position = hit.voxel
    console.log('hit.voxel',position)
    if (position) {
      game.createBlock(position, currentMaterial)
    } /* TODO: firealt else {
      position = blockPosErase
      if (position) game.setBlock(position, 0)
    }*/
  })
}
