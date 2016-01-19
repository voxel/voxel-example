# voxel-example

Minimal example of using [voxel-engine-stackgl](https://github.com/voxel/voxel-engine-stackgl)

![screenshot](http://imgur.com/0oDGqRq.png "Screenshot")

Learn more at http://voxeljs.com

# Get it running on your machine

The first time you set up, you should install the required npm packages:

```
cd voxel-example
npm install
```

Then run the start script:

```
npm start
```

Then point your browser to [http://localhost:8081](http://localhost:8081) and have fun!

# Features

voxel-example loads two plugins into the engine: [voxel-bedrock](https://github.com/voxel/voxel-bedrock)
to register a block, and [voxel-flatland](https://github.com/voxel/voxel-flatland) to generate flat
terrain voxel chunks configured to solely consist of this block. The built-in camera plugin is
configured to start the player above the terrain.

For more advanced plugins, see [https://github.com/voxel](https://github.com/voxel) or
[search npm](https://www.npmjs.com/search?q=voxel+plugin).

## How does this work?

voxel.js modules use [browserify](http://browserify.org) for packaging modules together into game bundles. This means that every time you change code in your game you have to build a new bundle in order to test it out. Luckily this is very easy and is automated. When you run the `npm start` script, it runs a local server: when the browser requests `index.js`, it compiles it serverside and then serves up the compiled version.

The upshot is, as long as you're running the `npm start` script in the background, you can save your changes to index.js and reload the game to see the new code in action, without having to have a build step in between. (If you'd like to change the start script, it's contained in the `package.json` file in the root directory.)

# History

voxel-example was originally based [voxel-hello-world](https://github.com/maxogden/voxel-hello-world)
(for the three.js-based [voxel-engine](https://github.com/maxogden/voxel-engine)),
ported to use [voxel-engine-stackgl](https://github.com/voxel/voxel-engine-stackgl)
(built on [stackgl](https://github.com/stackgl)/[ndarray scijs](https://github.com/scijs/),
for more background see [voxel/issues#4](https://github.com/voxel/issues/issues/4)).
It is now a simple yet complete working example of using voxel-engine-stackgl.

## License

BSD
