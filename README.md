cytoscape-auto-pan-on-out-of-canvas-bounds
================================================================================


## Description

An extension to automatically pan when nodes are out of canvas bounds.


## Dependencies

 * Cytoscape.js ^2.7.0


## Usage instructions

Download the library:
 * via npm: `npm install cytoscape-auto-pan-on-out-of-canvas-bounds`,
 * via bower: `bower install cytoscape-auto-pan-on-out-of-canvas-bounds`, or
 * via direct download in the repository (probably from a tag).

`require()` the library as appropriate for your project:

CommonJS:
```js
var cytoscape = require('cytoscape');
var auto-pan-on-out-of-canvas-bounds = require('cytoscape-auto-pan-on-out-of-canvas-bounds');

auto-pan-on-out-of-canvas-bounds( cytoscape ); // register extension
```

AMD:
```js
require(['cytoscape', 'cytoscape-auto-pan-on-out-of-canvas-bounds'], function( cytoscape, auto-pan-on-out-of-canvas-bounds ){
  auto-pan-on-out-of-canvas-bounds( cytoscape ); // register extension
});
```

Plain HTML/JS has the extension registered for you automatically, because no `require()` is needed.

## Default Options

```js
var options = {
    enabled: true, // Whether the extension is enabled on register
    selector: 'node' // Which elements will be affected by this extension
};
```

## API

```js
var instance = cy.autoPanOnOutOfCanvasBounds( options );
```

An instance has a number of functions available:

```js
instance.enable(); // enable the instance

instance.disable(); // disable the instance
```

You can also get an existing instance:

```js
cy.autoPanOnOutOfCanvasBounds('get');
```


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Set the version number environment variable: `export VERSION=1.2.3`
1. Publish: `gulp publish`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-auto-pan-on-out-of-canvas-bounds https://github.com/iVis-at-Bilkent/cytoscape.js-auto-pan-on-out-of-canvas-bounds.git`

## Team

  * [Metin Can Siper](https://github.com/metincansiper), [Ugur Dogrusoz](https://github.com/ugurdogrusoz) of [i-Vis at Bilkent University](http://www.cs.bilkent.edu.tr/~ivis)
