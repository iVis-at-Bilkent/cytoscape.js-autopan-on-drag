;(function(){ 'use strict';

  // registers the extension on a cytoscape lib ref
  var register = function( cytoscape ){

    if( !cytoscape ){ return; } // can't register if cytoscape unspecified

    var cy;
    var currentNode;
    var tapstartFcn, tapdragFcn, tapendFcn;
    
    // Default options
    var defaults = {
      enabled: true, // Whether the extension is enabled on register
      selector: 'node' // Which elements will be affected by this extension
    };
    
    var options;
    
    // Merge default options with the ones coming from parameter
    function extend(defaults, options) {
      var obj = {};

      for (var i in defaults) {
        obj[i] = defaults[i];
      }

      for (var i in options) {
        obj[i] = options[i];
      }

      return obj;
    };
    
    function bindCyEvents() {
      
      cy.on('tapstart', options.selector, tapstartFcn = function() {
        var node = this;
        currentNode = node;
      });
      
      cy.on('tapdrag', tapdragFcn = function() {
        if(currentNode === undefined) {
          return;
        }
        
        var newPosition = {
          x: currentNode.position('x'),
          y: currentNode.position('y')
        };
        
        var maxRenderedX = $(cy.container()).width();
        var maxRenderedY = $(cy.container()).height();

        var topLeftPosition = {
          x: newPosition.x - currentNode.width() / 2,
          y: newPosition.y - currentNode.height() / 2
        };

        var bottomRightPosition = {
          x: newPosition.x + currentNode.width() / 2,
          y: newPosition.y + currentNode.height() / 2
        };

        var topLeftRenderedPosition = convertToRenderedPosition(topLeftPosition);
        var bottomRightRenderedPosition = convertToRenderedPosition(bottomRightPosition);
       
        var exceedX;
        var exceedY;
        
        if(bottomRightRenderedPosition.x >= maxRenderedX) {
          exceedX = -bottomRightRenderedPosition.x + maxRenderedX;
        }
        
        if(topLeftRenderedPosition.x <= 0) {
          exceedX = -topLeftRenderedPosition.x;
        }
        
        if(bottomRightRenderedPosition.y >= maxRenderedY ) {
          exceedY = -bottomRightRenderedPosition.y + maxRenderedY;
        }
        
        if(topLeftRenderedPosition.y <= 0) {
          exceedY = -topLeftRenderedPosition.y;
        }
        
        if(exceedX) {
          cy.panBy({x: exceedX});
        }
        
        if(exceedY) {
          cy.panBy({y: exceedY});
        }
      });
      
      cy.on('tapend', tapendFcn = function() {
        currentNode = undefined;
      });
    }
    
    function unbindCyEvents() {
      cy.off('tapstart', options.selector, tapstartFcn);
      cy.off('tapdrag', tapdragFcn);
      cy.off('tapend', tapendFcn);
    }
    
    function convertToRenderedPosition(modelPosition) {
      var pan = cy.pan();
      var zoom = cy.zoom();

      var x = modelPosition.x * zoom + pan.x;
      var y = modelPosition.y * zoom + pan.y;

      return {
        x: x,
        y: y
      };
    }
    
    cytoscape( 'core', 'autoPanOnOutOfCanvasBounds', function(opts){
      cy = this;

      if(opts !== 'get') {
        // merge the options with default ones
        options = extend(defaults, opts);
        
        if(options.enabled) {
          bindCyEvents();
        }
      }
      
      return {
        enable: function() {
          bindCyEvents();
        },
        disable: function() {
          unbindCyEvents();
        }
      };
    } );

  };

  if( typeof module !== 'undefined' && module.exports ){ // expose as a commonjs module
    module.exports = register;
  }

  if( typeof define !== 'undefined' && define.amd ){ // expose as an amd/requirejs module
    define('cytoscape-context-menus', function(){
      return register;
    });
  }

  if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
    register( cytoscape );
  }

})();