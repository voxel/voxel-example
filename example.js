'use strict';

require('voxel-engine-stackgl')({
  pluginLoaders: {
    'voxel-bedrock': require('voxel-bedrock'),
    'voxel-flatland': require('voxel-flatland')
  },
  pluginOpts: {
    'voxel-engine-stackgl': {generateChunks: false},
    'voxel-stitch': {
      artpacks: ['ProgrammerArt-ResourcePack.zip']
    },
    'game-shell-fps-camera': {position: [0, -100, 0]},

    'voxel-bedrock': {},
    'voxel-flatland': {block: 'bedrock'}
  }});
