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


## API

Please briefly describe your API here:

```js
cy.auto-pan-on-out-of-canvas-bounds({
  foo: 'bar', // some option that does this
  baz: 'bat' // some options that does that
  // ... and so on
});
```

Or maybe if you have a collection extension:

```js
cy.elements().test({
  foo: 'bar', // some option that does this
  baz: 'bat' // some options that does that
  // ... and so on
});
```


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Set the version number environment variable: `export VERSION=1.2.3`
1. Publish: `gulp publish`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-auto-pan-on-out-of-canvas-bounds https://github.com/iVis-at-Bilkent/cytoscape.js-auto-pan-on-out-of-canvas-bounds.git`
