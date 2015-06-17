System.register(["angular2/angular2", "angular2/src/facade/collection", "angular2/src/facade/lang", "angular2/src/facade/math"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      __param,
      Component,
      View,
      Parent,
      onDestroy,
      onChange,
      onAllChangesDone,
      ListWrapper,
      StringWrapper,
      isString,
      NumberWrapper,
      RegExpWrapper,
      Math,
      MdGridList,
      MdGridTile,
      TileCoordinator,
      Position,
      TileStyle;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Parent = $__m.Parent;
      onDestroy = $__m.onDestroy;
      onChange = $__m.onChange;
      onAllChangesDone = $__m.onAllChangesDone;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      StringWrapper = $__m.StringWrapper;
      isString = $__m.isString;
      NumberWrapper = $__m.NumberWrapper;
      RegExpWrapper = $__m.RegExpWrapper;
    }, function($__m) {
      Math = $__m.Math;
    }],
    execute: function() {
      __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
          case 2:
            return decorators.reduceRight(function(o, d) {
              return (d && d(o)) || o;
            }, target);
          case 3:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key)), void 0;
            }, void 0);
          case 4:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key, o)) || o;
            }, desc);
        }
      };
      __metadata = (this && this.__metadata) || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      __param = (this && this.__param) || function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      MdGridList = $__export("MdGridList", (($traceurRuntime.createClass)(function() {
        this.tiles = [];
        this.rows = 0;
      }, {
        set cols(value) {
          this._cols = isString(value) ? NumberWrapper.parseInt(value, 10) : value;
        },
        get cols() {
          return this._cols;
        },
        set rowHeight(value) {
          if (value === 'fit') {
            this.rowHeightMode = 'fit';
          } else if (StringWrapper.contains(value, ':')) {
            var ratioParts = StringWrapper.split(value, RegExpWrapper.create(':'));
            if (ratioParts.length !== 2) {
              throw ("md-grid-list: invalid ratio given for row-height: \"" + value + "\"");
            }
            this.rowHeightMode = 'ratio';
            this.rowHeightRatio = NumberWrapper.parseFloat(ratioParts[0]) / NumberWrapper.parseFloat(ratioParts[1]);
          } else {
            this.rowHeightMode = 'fixed';
            this.fixedRowHeight = value;
          }
        },
        onAllChangesDone: function() {
          this.layoutTiles();
        },
        layoutTiles: function() {
          var tracker = new TileCoordinator(this.cols, this.tiles);
          this.rows = tracker.rowCount;
          for (var i = 0; i < this.tiles.length; i++) {
            var pos = tracker.positions[i];
            var tile = this.tiles[i];
            var style = this.getTileStyle(tile, pos.row, pos.col);
            tile.styleWidth = style.width;
            tile.styleHeight = style.height;
            tile.styleTop = style.top;
            tile.styleLeft = style.left;
            tile.styleMarginTop = style.marginTop;
            tile.stylePaddingTop = style.paddingTop;
          }
        },
        addTile: function(tile) {
          ListWrapper.push(this.tiles, tile);
        },
        removeTile: function(tile) {
          ListWrapper.remove(this.tiles, tile);
        },
        getBaseTileSize: function(sizePercent, gutterFraction) {
          return ("(" + sizePercent + "% - ( " + this.gutterSize + " * " + gutterFraction + " ))");
        },
        getTilePosition: function(baseSize, offset) {
          return ("calc( (" + baseSize + " + " + this.gutterSize + ") * " + offset + " )");
        },
        getTileSize: function(baseSize, span) {
          return ("calc( (" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this.gutterSize + ") )");
        },
        getTileStyle: function(tile, rowIndex, colIndex) {
          var percentWidthPerTile = 100 / this.cols;
          var gutterWidthFractionPerTile = (this.cols - 1) / this.cols;
          var baseTileWidth = this.getBaseTileSize(percentWidthPerTile, gutterWidthFractionPerTile);
          var tileStyle = new TileStyle();
          tileStyle.left = this.getTilePosition(baseTileWidth, colIndex);
          tileStyle.width = this.getTileSize(baseTileWidth, tile.colspan);
          switch (this.rowHeightMode) {
            case 'fixed':
              tileStyle.top = this.getTilePosition(this.fixedRowHeight, rowIndex);
              tileStyle.height = this.getTileSize(this.fixedRowHeight, tile.rowspan);
              break;
            case 'ratio':
              var percentHeightPerTile = percentWidthPerTile / this.rowHeightRatio;
              var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidthFractionPerTile);
              tileStyle.marginTop = this.getTilePosition(baseTileHeight, rowIndex);
              tileStyle.paddingTop = this.getTileSize(baseTileHeight, tile.rowspan);
              break;
            case 'fit':
              var percentHeightPerTile = 100 / this.cols;
              var gutterHeightFractionPerTile = (this.rows - 1) / this.rows;
              var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightFractionPerTile);
              tileStyle.top = this.getTilePosition(baseTileHeight, rowIndex);
              tileStyle.height = this.getTileSize(baseTileHeight, tile.rowspan);
              break;
          }
          return tileStyle;
        }
      }, {})));
      $__export("MdGridList", MdGridList = __decorate([Component({
        selector: 'md-grid-list',
        properties: ['cols', 'rowHeight', 'gutterSize'],
        lifecycle: [onAllChangesDone]
      }), View({templateUrl: 'angular2_material/src/components/grid_list/grid_list.html'}), __metadata('design:paramtypes', [])], MdGridList));
      MdGridTile = $__export("MdGridTile", (($traceurRuntime.createClass)(function(gridList) {
        this.gridList = gridList;
        this.rowspan = 1;
        this.colspan = 1;
      }, {
        set rowspan(value) {
          this._rowspan = isString(value) ? NumberWrapper.parseInt(value, 10) : value;
        },
        get rowspan() {
          return this._rowspan;
        },
        set colspan(value) {
          this._colspan = isString(value) ? NumberWrapper.parseInt(value, 10) : value;
        },
        get colspan() {
          return this._colspan;
        },
        onChange: function(_) {
          if (!this.isRegisteredWithGridList) {
            this.gridList.addTile(this);
            this.isRegisteredWithGridList = true;
          }
        },
        onDestroy: function() {
          this.gridList.removeTile(this);
        }
      }, {})));
      $__export("MdGridTile", MdGridTile = __decorate([Component({
        selector: 'md-grid-tile',
        properties: ['rowspan', 'colspan'],
        host: {
          '[style.height]': 'styleHeight',
          '[style.width]': 'styleWidth',
          '[style.top]': 'styleTop',
          '[style.left]': 'styleLeft',
          '[style.marginTop]': 'styleMarginTop',
          '[style.paddingTop]': 'stylePaddingTop',
          '[role]': '"listitem"'
        },
        lifecycle: [onDestroy, onChange]
      }), View({templateUrl: 'angular2_material/src/components/grid_list/grid_tile.html'}), __param(0, Parent()), __metadata('design:paramtypes', [MdGridList])], MdGridTile));
      TileCoordinator = (function() {
        var TileCoordinator = function TileCoordinator(numColumns, tiles) {
          var $__0 = this;
          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = ListWrapper.createFixedSize(numColumns);
          ListWrapper.fill(this.tracker, 0);
          this.positions = ListWrapper.map(tiles, (function(tile) {
            return $__0._trackTile(tile);
          }));
        };
        return ($traceurRuntime.createClass)(TileCoordinator, {
          get rowCount() {
            return this.rowIndex + 1;
          },
          _trackTile: function(tile) {
            if (tile.colspan > this.tracker.length) {
              throw ("Tile with colspan " + tile.colspan + " is wider\n          than grid with cols=\"" + this.tracker.length + "\".");
            }
            var gapStartIndex = -1;
            var gapEndIndex = -1;
            do {
              if (this.columnIndex + tile.colspan > this.tracker.length) {
                this._nextRow();
                continue;
              }
              gapStartIndex = ListWrapper.indexOf(this.tracker, 0, this.columnIndex);
              if (gapStartIndex == -1) {
                this._nextRow();
                continue;
              }
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              this.columnIndex = gapStartIndex + 1;
            } while (gapEndIndex - gapStartIndex < tile.colspan);
            this._markTilePosition(gapStartIndex, tile);
            this.columnIndex = gapStartIndex + tile.colspan;
            return new Position(this.rowIndex, gapStartIndex);
          },
          _nextRow: function() {
            this.columnIndex = 0;
            this.rowIndex++;
            for (var i = 0; i < this.tracker.length; i++) {
              this.tracker[i] = Math.max(0, this.tracker[i] - 1);
            }
          },
          _findGapEndIndex: function(gapStartIndex) {
            for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
              if (this.tracker[i] != 0) {
                return i;
              }
            }
            return this.tracker.length;
          },
          _markTilePosition: function(start, tile) {
            for (var i = 0; i < tile.colspan; i++) {
              this.tracker[start + i] = tile.rowspan;
            }
          }
        }, {});
      }());
      Position = (function() {
        var Position = function Position(row, col) {
          this.row = row;
          this.col = col;
        };
        return ($traceurRuntime.createClass)(Position, {}, {});
      }());
      TileStyle = (function() {
        var TileStyle = function TileStyle() {
          ;
        };
        return ($traceurRuntime.createClass)(TileStyle, {}, {});
      }());
    }
  };
});
//# sourceMappingURL=grid_list.js.map

//# sourceMappingURL=./grid_list.js.map