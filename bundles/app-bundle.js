System.register("components/app.css!github:systemjs/plugin-css@0.1.23/css.js", [], function() { return { setters: [], execute: function() {} } });

System.registerDynamic("components/about/about.md!github:Hypercubed/system-md-marked@1.0.1/md.js", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = "<h1 id=\"about-project-\">About Project χ</h1>\n<p>This website was built using the Project χ platform. Project χ (pronounced project kai or /<abbr title=\"/ˈ/ primary stress follows\">ˈ</abbr><abbr title=\"'k' in 'kind'\">k</abbr><abbr title=\"/iː/ long 'e' in 'bead'\">iː</abbr>/) is an modular open source visualization gallery framework built by Jayson Harshbarger at the <a href=\"http://www.yokohama.riken.jp/english/\">RIKEN Institute in Yokohama Japan</a>.  It offers a framework and toolset for building self-hosted data-centric visualization websites. Geared towards sharing of supplemental materials associated with scientific publications; Project χ allows visitors to interact with visualizations, download associated data and images, and even try the visualization with their own uploaded or publicly available datasets.  For developers the framework comes packaged with tools necessary for quickly integrating interactive visualizations using <a href=\"http://d3js.org/\">d3.js</a>, <a href=\"https://angularjs.org/\">AngularJS</a>, and <a href=\"http://biojs.io/\">BioJS</a>. Features of the framework include:</p>\n<ul>\n<li>Simple,  modular, and customizable design using <a href=\"https://angularjs.org/\">AngularJS</a> templates and <a href=\"http://getbootstrap.com/\">bootstrap</a> CSS framework.</li>\n<li>Supports CommonJS, AMD, and ES6 modules using the <a href=\"https://github.com/systemjs/systemjs\">SystemJS</a> Universal dynamic module loader.</li>\n<li>Integrate additional visualizations, including <a href=\"http://biojs.io/\">BioJS</a> and <a href=\"https://github.com/curran/chiasm\">Chiasm</a> modules, directly from any registry such as <a href=\"https://www.npmjs.com\">NPM</a> or <a href=\"https://github.com/\">GitHub</a> using <a href=\"http://jspm.io/\">JSPM</a>.</li>\n<li>Self-hosted fully client-side application doesn&#39;t require a server; easily hosted on <a href=\"https://en.wikipedia.org/wiki/WebDAV\">WebDAV</a> or <a href=\"https://pages.github.com/\">GitHub Pages</a>.</li>\n<li>Contains AngularJS services and directives for loading, parsing, and downloading data and as well as downloading generated publication quality SVG images.</li>\n</ul>\n";
  return module.exports;
});

System.register("components/error/error.html!github:systemjs/plugin-text@0.0.8/text.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<div class=\"jumbotron ng-scope\">\n  {{error || 'Unknown Error'}}\n</div>\n");
    }
  };
});
System.register('components/examples/index.js', ['common/styles/index.css!'], function (_export, _context) {
  "use strict";

  function controller(dataService) {
    this.dataPackage.resources.forEach(function (resource) {
      dataService.normalizePackage(resource.url, resource.data);
    });
  }

  return {
    setters: [function (_commonStylesIndexCss) {}],
    execute: function () {

      controller.$inject = ['dataService'];
      _export('default', {
        controller: controller,
        templateUrl: 'components/examples/index.html',
        bindings: {
          dataPackage: '<package'
        }
      });
    }
  };
});
System.register("components/examples/pca/pca.css!github:systemjs/plugin-css@0.1.23/css.js", [], function() { return { setters: [], execute: function() {} } });

System.register('components/examples/pca/pca-chart.js', ['d3', 'd3-tip', './pca.css!'], function (_export, _context) {
  "use strict";

  var d3, d3Tip;


  function metaList(metadata) {
    return Object.keys(metadata).map(function (k) {
      return k + ': ' + metadata[k];
    }).join('<br />');
  } /* eslint import/no-extraneous-dependencies: 0 */

  function Chart() {
    var width = 900;
    var height = 450;
    var variance = [];
    var xPadding = 50;
    var yPadding = 25;
    var color = d3.scale.category20();

    function my(selection) {
      selection.each(function (data) {
        var firstCol = data[0];
        var secondCol = data[1];
        var metaData = data.metaData;
        var pcaData = data.pcaData;
        var tip = d3Tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d, i) {
          return '\n        <strong>Coordinates:</strong>\n        <span style="color:' + color(metaData[i]) + '">(' + [d[firstCol], d[secondCol]] + ')</span>\n        <p />\n        ' + metaList(metaData[i]) + '\n      ';
        });
        var xScale = d3.scale.linear().domain(d3.extent(pcaData, function (d) {
          return d[firstCol];
        })).range([0, width]);
        var yScale = d3.scale.linear().domain(d3.extent(pcaData, function (d) {
          return d[secondCol];
        })).range([height, 0]);
        var xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(5);
        var yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(5);
        var locX = xPadding * (secondCol + 1) + secondCol * width;
        var locY = yPadding * (firstCol + 1) + firstCol * height + 50;
        var svg = d3.select(this);

        svg.append('g').attr('class', 'axis').attr('transform', 'translate(' + locX + ', ' + (locY + height) + ')').call(xAxis);

        svg.append('g').attr('class', 'axis').attr('transform', 'translate(' + locX + ', ' + locY + ')').call(yAxis);

        if (firstCol === 0) {
          svg.append('text').attr('x', locX + (width / 2 - 10)).attr('y', locY - 25).style('fill', 'gray').style('font-size', 11).style('font-family', 'Times New Roman').style('font-weight', 'bold').style('text-decoration', 'underline').text('PCA ' + (secondCol + 1));

          svg.append('text').attr('x', locX + (width / 2 - 70)).attr('y', locY - 10).style('fill', 'gray').style('font-size', '11').style('font-family', 'Times New Roman').style('font-weight', 'bold').text('Variance: ' + variance[secondCol]);
        }
        if (secondCol === 0) {
          svg.append('text').attr('x', locX - xPadding).attr('y', locY + (height / 2 + 10)).style('fill', 'gray').style('font-size', 9).style('font-family', 'Times New Roman').style('font-weight', 'bold').text('PCA ' + (firstCol + 1));
        }

        var domain1 = d3.max(pcaData, function (d) {
          return d[firstCol];
        }) - d3.min(pcaData, function (d) {
          return d[firstCol];
        });
        var domain2 = d3.max(pcaData, function (d) {
          return d[secondCol];
        }) - d3.min(pcaData, function (d) {
          return d[secondCol];
        });
        var min1 = d3.min(pcaData, function (d) {
          return d[firstCol];
        });
        var min2 = d3.min(pcaData, function (d) {
          return d[secondCol];
        });
        svg.call(tip);
        svg.selectAll('circle').data(pcaData).enter().append('circle').attr('cx', function (d) {
          return (d[firstCol] - min1) / domain1 * width + locX;
        }).attr('cy', function (d) {
          return locY - (d[secondCol] - min2) / domain2 * height + height;
        }).attr('r', 3).style('fill', function (d, i) {
          return color(metaData[i]);
        }).on('mouseover', tip.show).on('mouseout', tip.hide);
      });
    }

    my.width = function (value) {
      if (!arguments.length) {
        return width;
      }
      width = value;
      return my;
    };

    my.height = function (value) {
      if (!arguments.length) {
        return height;
      }
      height = value;
      return my;
    };
    my.variance = function (value) {
      if (!arguments.length) {
        return variance;
      }
      variance = value;
      return my;
    };
    my.color = function (value) {
      if (!arguments.length) {
        return color;
      }
      color = value;
      return my;
    };

    return my;
  }

  _export('default', Chart);

  return {
    setters: [function (_d) {
      d3 = _d.default;
    }, function (_d3Tip) {
      d3Tip = _d3Tip.default;
    }, function (_pcaCss) {}],
    execute: function () {}
  };
});
System.register("components/examples/pca/pca.html!github:systemjs/plugin-text@0.0.8/text.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<package-editor options=\"$ctrl.editorOptions\"></package-editor>\n\n<div id=\"charts\" class=\"container\">\n  <h2>{{$ctrl.dataPackage.title}}</h2>\n  <div marked=\"$ctrl.dataPackage.description\"></div>\n\n  <label># dims: </label>\n  <input type=\"number\" class=\"form-control\" min=\"1\" max=\"7\" ng-model=\"$ctrl.dims\" ng-change=\"$ctrl.draw()\"></input>\n  <label>color by: </label>\n  <select class=\"form-control\" ng-model=\"$ctrl.meta\" required=\"true\" ng-options=\"key for key in $ctrl.keys\" ng-change=\"$ctrl.draw()\"></select>\n\n  <div id=\"_examples_pca__chart\" class=\"_examples_pca__pca\"></div>\n\n  <marked src=\"$ctrl.dataPackage.readme\"></marked>\n</div>\n");
    }
  };
});
System.register('components/examples/pca/pca.js', ['d3', 'ml-pca', 'ml-matrix', './pca-chart', './pca.html!text'], function (_export, _context) {
  "use strict";

  var d3, PCA, Matrix, PCAChart, pcaHTML;


  function controller() {
    var $ctrl = this;

    var metaData = [];
    var pcaOutput = [];
    var theVariance = [];
    var color = d3.scale.category20();

    return Object.assign($ctrl, {
      keys: [],
      meta: 'Treatment',
      dims: 3,
      editorOptions: {
        data: $ctrl.dataPackage,
        onChange: update
      },
      draw: draw,
      $onInit: update
    });

    function update() {
      $ctrl.keys = Object.keys($ctrl.dataPackage.resources[1].data[0]);
      $ctrl.meta = $ctrl.keys[1];

      var pcaInput = $ctrl.dataPackage.resources[0].data.table.map(function (r) {
        return r.map(Number);
      });

      pcaInput = new Matrix(pcaInput).transpose();

      var pca = new PCA(pcaInput, { scale: false, center: true });
      pcaOutput = pca.predict(pcaInput);
      theVariance = pca.getExplainedVariance();
      draw();
    }

    function draw() {
      metaData = $ctrl.dataPackage.resources[1].data;
      // $ctrl.meta
      // $ctrl.dims
      var num = $ctrl.dims;
      var chart = new PCAChart().width(1100 / num - 50).height(550 / num - 25 - 50 / num).variance(theVariance).color(function (d) {
        return color(d[$ctrl.meta]);
      }); // (of 1) width:800, height:400

      var x = [];
      for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
          var data = [i, j];
          data.pcaData = pcaOutput;
          data.metaData = metaData;
          x.push(data);
        }
      }

      var chart$ = d3.select('#_examples_pca__chart');

      chart$.selectAll('svg').remove();

      var svg = d3.select('#_examples_pca__chart').append('svg').attr('width', 1200).attr('height', 600);

      svg.selectAll('g').data(x).enter().append('g').call(chart);
    }
  } /* eslint import/no-extraneous-dependencies: 0 */

  return {
    setters: [function (_d) {
      d3 = _d.default;
    }, function (_mlPca) {
      PCA = _mlPca.default;
    }, function (_mlMatrix) {
      Matrix = _mlMatrix.default;
    }, function (_pcaChart) {
      PCAChart = _pcaChart.default;
    }, function (_pcaHtmlText) {
      pcaHTML = _pcaHtmlText.default;
    }],
    execute: function () {
      _export('default', {
        controller: controller,
        template: pcaHTML,
        bindings: {
          dataPackage: '<package'
        }
      });
    }
  };
});
System.register("components/examples/treemap/treemap.css!github:systemjs/plugin-css@0.1.23/css.js", [], function() { return { setters: [], execute: function() {} } });

System.register('components/examples/treemap/treemap.js', ['angular', 'lodash', 'screenfull', 'webtreemap', 'webtreemap/webtreemap.css!', './treemap.css!'], function (_export, _context) {
  "use strict";

  var angular, _, screenfull, webtreemap;

  function controller() {
    var $ctrl = this;

    var $map = document.getElementById('_examples_treemap__chart');

    $ctrl.$onInit = change;
    $ctrl.editorOptions = {
      data: $ctrl.dataPackage,
      enableSvgDownload: false,
      enablePngDownload: false,
      onChange: change
    };

    if (screenfull.enabled) {
      $ctrl.fullscreen = function () {
        screenfull.request($map);
      };

      document.addEventListener(screenfull.raw.fullscreenchange, function () {
        console.log('screenfull.raw.fullscreenerror');
        angular.element($map)[screenfull.isFullscreen ? 'addClass' : 'removeClass']('fullscreen');
        change();
      });
    }

    function change() {
      var map = $map;
      while ($map.firstChild) {
        map.removeChild(map.firstChild);
      }

      var tree = $ctrl.dataPackage.resources[0].data;
      var treeData = newNode('/');

      if ($ctrl.dataPackage.resources[0].table) {
        tree.forEach(function (d) {
          addNode(d.Source, Number(d.Size), d.Tag);
        });
      } else {
        for (var source in tree) {
          if (Object.hasOwnProperty.call(tree, source)) {
            addNode(source, tree[source]);
          }
        }
      }

      addSizeToTitle(treeData, treeData.data.$area);

      function addNode(path, size, tag) {
        var parts = path.split('/');
        var node = treeData;
        node.data.$area += size;

        parts.forEach(function (part) {
          var child = _.find(node.children, function (child) {
            return child.name === part;
          });
          if (!child) {
            child = newNode(part, tag);
            node.children.push(child);
          }

          node = child;
          node.data.$area += size;
        });
      }

      webtreemap(map, treeData);
    }

    function newNode(name, tag) {
      // var $symbol = (name.slice(-1) === '*') ? 'tag' : '';
      return {
        name: name,
        data: {
          $area: 0,
          symbol: tag
        },
        children: []
      };
    }

    function addSizeToTitle(node, total) {
      var size = node.data.$area;
      var pct = 100.0 * size / total;

      node.name += ' • ' + size.toLocaleString() + ' • ' + pct.toFixed(2) + '%';
      node.children.forEach(function (x) {
        addSizeToTitle(x, total);
      });
    }
  }

  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_screenfull) {
      screenfull = _screenfull.default;
    }, function (_webtreemap) {
      webtreemap = _webtreemap.default;
    }, function (_webtreemapWebtreemapCss) {}, function (_treemapCss) {}],
    execute: function () {
      _export('default', {
        controller: controller,
        templateUrl: 'components/examples/treemap/treemap.html',
        bindings: {
          dataPackage: '<package'
        }
      });
    }
  };
});
System.register('components/examples/routes.js', ['angular', 'components/examples/index', 'components/examples/pca/pca', 'components/examples/treemap/treemap'], function (_export, _context) {
  "use strict";

  var angular, examplesComponent, pcaComponent, treeMapComponent;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_componentsExamplesIndex) {
      examplesComponent = _componentsExamplesIndex.default;
    }, function (_componentsExamplesPcaPca) {
      pcaComponent = _componentsExamplesPcaPca.default;
    }, function (_componentsExamplesTreemapTreemap) {
      treeMapComponent = _componentsExamplesTreemapTreemap.default;
    }],
    execute: function () {
      _export('default', angular.module('examples', ['projectX.dataService']).component('pca', pcaComponent).component('examples', examplesComponent).component('treemap', treeMapComponent).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/examples', {
          template: '<examples data-package="$resolve.dataPackage"></examples>',
          datapackageUrl: 'components/examples/datapackage.json'
        }).when('/examples/pca', {
          template: '<pca data-package="$resolve.dataPackage"></pca>',
          datapackageUrl: 'data/datapackage.json'
        });
      }]));
    }
  };
});
System.register("components/index/index.html!github:systemjs/plugin-text@0.0.8/text.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<div ng-include=\"'common/partials/intro.html'\"></div>\n\n<div class=\"row _common_styles_index__index\">\n\n  <div class=\"row\" ng-repeat=\"(filename,file) in $ctrl.dataPackage.resources\">\n    <h2 class=\"title\">{{file.data.title}}</h2>\n    <p class=\"lead\">{{file.data.description}}</p>\n\n    <div class=\"col-md-4\" ng-repeat=\"(filename,file) in file.data.resources\">\n\n      <a ng-href=\"{{file.link}}\">\n        <div class=\"card\" style=\"background-image: url({{file.data.image}});\">\n          <div>\n            <h3>{{file.data.title}}</h3>\n            <p marked=\"file.data.description\"></p>\n          </div>\n        </div>\n      </a>\n\n    </div>\n  </div>\n\n</div>\n");
    }
  };
});
System.register("common/styles/index.css!github:systemjs/plugin-css@0.1.23/css.js", [], function() { return { setters: [], execute: function() {} } });

System.register('components/index/index.js', ['./index.html!text', 'common/styles/index.css!'], function (_export, _context) {
  "use strict";

  var template;

  function controller(dataService) {
    this.dataPackage.resources.forEach(function (resource) {
      dataService.normalizePackage(resource.url, resource.data);
      return dataService.loadPackage(resource.url).then(function (dataPackage) {
        dataPackage.resources.forEach(function (resource) {
          dataService.normalizePackage(resource.url, resource.data);
        });
        resource.data = dataPackage;
      });
    });
  }

  return {
    setters: [function (_indexHtmlText) {
      template = _indexHtmlText.default;
    }, function (_commonStylesIndexCss) {}],
    execute: function () {

      controller.$inject = ['dataService'];
      _export('default', {
        controller: controller,
        template: template,
        bindings: {
          dataPackage: '<package'
        }
      });
    }
  };
});
System.register('components/routes.js', ['angular', 'components/about/about.md!md', 'components/error/error.html!text', './examples/routes', './index/index'], function (_export, _context) {
  "use strict";

  var angular, aboutHTML, errorHTML, examples, indexComponent, routes;

  function configRoutes($routeProvider) {
    $routeProvider.when('/about', {
      template: aboutHTML
    }).when('/error', {
      template: errorHTML
    }).when('/404', {
      template: errorHTML
    }).when('/', {
      template: '<index data-package="$resolve.dataPackage"></index>',
      datapackageUrl: 'components/index/datapackage.json'
    }).otherwise({
      redirectTo: '/'
    });
  }

  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_componentsAboutAboutMdMd) {
      aboutHTML = _componentsAboutAboutMdMd.default;
    }, function (_componentsErrorErrorHtmlText) {
      errorHTML = _componentsErrorErrorHtmlText.default;
    }, function (_examplesRoutes) {
      examples = _examplesRoutes.default;
    }, function (_indexIndex) {
      indexComponent = _indexIndex.default;
    }],
    execute: function () {

      configRoutes.$inject = ['$routeProvider'];routes = angular.module('routes', [examples.name]).component('index', indexComponent).config(configRoutes).name;

      _export('default', routes);
    }
  };
});
System.register("common/components/editor/editor.css!github:systemjs/plugin-css@0.1.23/css.js", [], function() { return { setters: [], execute: function() {} } });

System.register('common/directives/svg-download-dropdown.js', ['angular-downloadsvg-directive'], function (_export, _context) {
  "use strict";

  var module;


  function link(scope, element, attr) {
    var sAttr = attr.svgDownloadDropdown.split(/\sin\s/);

    // var key = !attr.svgDownloadDropdown
    //  ? 'svgList'
    //  : sAttr[0];

    getSVGs();

    element.on('click', function () {
      scope.$apply(function () {
        getSVGs();
      });
    });

    function getSVGs() {
      var el = attr.svgDownloadDropdown ? angular.element(document.querySelector(sAttr[1])) : element.parent;

      var svgs = el.find('svg');
      var ids = [];

      angular.forEach(svgs, function (svg, d) {
        var elm = angular.element(svg);
        var id = elm.attr('id') || 'svg-' + d;
        var title = elm.attr('title') || id;

        var o = { id: id, title: title };
        elm.attr(o);
        ids.push(o);
      });
      scope[sAttr[0]] = ids;
    }
  }

  return {
    setters: [function (_angularDownloadsvgDirective) {}],
    execute: function () {
      module = angular.module('svgDownloadDropdown', ['hc.downloader']).directive('svgDownloadDropdown', function () {
        return { link: link };
      });

      _export('default', module.name);
    }
  };
});
System.register('common/directives/file-drop.js', ['angular', 'common/services/datapackage/datapackage'], function (_export, _context) {
  "use strict";

  var angular, dp, module;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_commonServicesDatapackageDatapackage) {
      dp = _commonServicesDatapackageDatapackage.default;
    }],
    execute: function () {
      module = angular.module('projectX.fileDrop', []).directive('fileDropzone', ['$window', function ($window) {
        return {
          restrict: 'A',
          scope: {
            file: '=',
            fileName: '=',
            dropped: '&'
          },
          link: function link(scope, element, attrs) {
            var validMimeTypes = attrs.fileDropzone;

            function processDragOverOrEnter(event) {
              // console.log('processDragOverOrEnter');
              if (event !== null) {
                event.preventDefault();
              }
              element.addClass('hover');
              (event.dataTransfer || event.originalEvent.dataTransfer).effectAllowed = 'copy';
              return false;
            }

            function processDragLeave(event) {
              // console.log('processDragExit');
              if (event !== null) {
                event.preventDefault();
              }
              element.removeClass('hover');
              return false;
            }

            function checkSize(size) {
              var _ref = attrs.maxFileSize;
              if (_ref === undefined || _ref === '' || size / 1024 / 1024 < attrs.maxFileSize) {
                return true;
              }
              $window.alert('File must be smaller than ' + attrs.maxFileSize + ' MB');
              return false;
            }

            function isTypeValid(type) {
              if (validMimeTypes === undefined || validMimeTypes === '' || validMimeTypes.indexOf(type) > -1) {
                return true;
              }
              $window.alert('Invalid file type ' + type + '.  File must be one of following types ' + validMimeTypes);
              return false;
            }

            element.bind('dragover', processDragOverOrEnter);
            element.bind('dragenter', processDragOverOrEnter);
            element.bind('dragleave', processDragLeave);

            function processDropFile(file) {
              var reader = new FileReader();
              reader.onload = function (evt) {
                file.content = evt.target.result;
                var type = dp.processor.mime.lookup(file.name);
                if (checkSize(file.size) && isTypeValid(type)) {
                  return scope.$apply(function () {
                    scope.dropped({ file: file });
                  });
                }
              };
              reader.readAsText(file);
            }

            return element.bind('drop', function (event) {
              if (event !== null) {
                event.preventDefault();
              }

              element.removeClass('hover');

              var files = (event.dataTransfer || event.originalEvent.dataTransfer).files;

              for (var i = 0; i < files.length; i++) {
                var file = files[i];
                processDropFile(file);
              }

              return false;
            });
          }
        };
      }]);

      _export('default', module.name);
    }
  };
});
System.register('common/directives/file-download.js', ['angular', 'FileSaver/FileSaver.js', 'blobjs/Blob.js'], function (_export, _context) {
  "use strict";

  var angular, saveAs, module;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_FileSaverFileSaverJs) {
      saveAs = _FileSaverFileSaverJs.default;
    }, function (_blobjsBlobJs) {}],
    execute: function () {
      module = angular.module('projectX.fileDownload', []).directive('fileDownload', function () {
        return {
          scope: {
            file: '=fileDownload'
          },
          link: function link(scope, element /* , attrs */) {
            function download(file) {
              var mime = file.type || 'text/plain';
              var type = mime + ';charset=utf-8';
              var filename = file.name || 'download.txt';

              var blob = new Blob([file.content], { type: type });
              saveAs(blob, filename); // shim this
            }

            element.bind('click', function () {
              download(scope.file);
            });
          }
        };
      });

      _export('default', module.name);
    }
  };
});
System.register('common/services/datapackage/resolver.js', ['angular'], function (_export, _context) {
  "use strict";

  var angular;

  _export('default', function (route) {
    var hasDatapackageResolve = angular.isDefined(route.resolve) && angular.isDefined(route.resolve.dataPackage);
    if (!hasDatapackageResolve) {
      if (angular.isDefined(route.datapackage)) {
        route.resolve = route.resolve || {};
        angular.extend(route.resolve, {
          dataPackage: ['$route', 'dataService', function ($route, dataService) {
            var datapackage = typeof route.datapackage === 'function' ? route.datapackage($route.current.params) : route.datapackage;
            var base = datapackage.base || route.datapackageUrl;
            return dataService.processPackage(base, datapackage);
          }]
        });
      } else if (angular.isDefined(route.datapackageUrl)) {
        route.resolve = route.resolve || {};
        angular.extend(route.resolve, {
          dataPackage: ['$route', 'dataService', function ($route, dataService) {
            var datapackageUrl = typeof route.datapackageUrl === 'function' ? route.datapackageUrl($route.current.params) : route.datapackageUrl;
            return dataService.loadPackage(datapackageUrl);
          }]
        });
      }
    }
    return route;
  });

  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {}
  };
});
System.register('common/services/datapackage/dataservice.js', ['npm:systemjs-plugin-babel@0.0.12/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.12/babel-helpers/asyncToGenerator.js', './datapackage'], function (_export, _context4) {
  "use strict";

  var _regeneratorRuntime, _asyncToGenerator, dp;

  function run($http) {
    dp.loader.fetch = function (url) {
      return $http({
        url: url,
        method: 'GET',
        transformResponse: function transformResponse(data) {
          return data;
        }
      }).then(function (res) {
        return res.data;
      });
    };
  }

  _export('run', run);

  function dataservice() {
    var _this = this;

    // for v1.0.0-rc3 compatability
    return {
      loadPackage: function () {
        var ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(url) {
          var datapackage;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return dp.load(url);

                case 2:
                  datapackage = _context.sent;

                  datapackage.resourcesByName = datapackage.$resourcesByName;
                  return _context.abrupt('return', datapackage);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function loadPackage(_x) {
          return ref.apply(this, arguments);
        };
      }(),
      normalizePackage: function normalizePackage(url, datapackage) {
        Object.assign(datapackage, { url: url });
        dp.normalizePackage(datapackage);
      },
      reloadResource: function () {
        var ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(resource) {
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return dp.loader.resource(resource);

                case 2:
                  resource = _context2.sent;
                  _context2.next = 5;
                  return dp.processor.resource(resource);

                case 5:
                  return _context2.abrupt('return', _context2.sent);

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this);
        }));

        return function reloadResource(_x2) {
          return ref.apply(this, arguments);
        };
      }(),
      processPackage: function () {
        var ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee3(url, datapackage) {
          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  Object.assign(datapackage, { url: url });
                  _context3.next = 3;
                  return dp.normalizePackage(datapackage);

                case 3:
                  _context3.next = 5;
                  return dp.normalizeResources(datapackage);

                case 5:
                  _context3.next = 7;
                  return dp.loadResources(datapackage);

                case 7:
                  _context3.next = 9;
                  return dp.processPackage(datapackage);

                case 9:
                  datapackage.resourcesByName = datapackage.$resourcesByName;
                  return _context3.abrupt('return', datapackage);

                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this);
        }));

        return function processPackage(_x3, _x4) {
          return ref.apply(this, arguments);
        };
      }()

      /* loadResource,
      _loadPackage: processPackage,  // todo: remove
      processPackage,
       normalize: normalizeResource,
      normalizePackage,
      processResource: processByType,
       reindexPackage,
       addResource */
    };

    /* function processPackage (filePath, datapackage) {
      datapackage = normalizePackage(filePath, datapackage);
      const q = datapackage.resources ? datapackage.resources.map(loadResource) : [];
       return $q.all(q)
      .then(() => {
        return reindexPackage(datapackage);
      });
    }
     function reindexPackage (datapackage) {
      datapackage.resourcesByName = {};
      datapackage.resources.forEach(r => {
        if (r.name && !datapackage.resourcesByName[r.name]) {
          datapackage.resourcesByName[r.name] = r;
        }
      });
      return datapackage;
    }
     function reloadResource (resource) {
      return $http(createHttpRequest(resource))
      .catch(err => {
        throw new Error(`error loading ${resource.url}, ${err}`);
      });
    }
     function loadResource (resource) {
      if (resource.url && !(resource.content || resource.data)) {
        return reloadResource(resource);  // todo: check for urls
      }
      return $q(resolve => resolve({data: processByType(resource)}));
    }
     function addResource (datapackage, resource) {
      normalizeResource(datapackage, resource);
       datapackage.resources.push(resource);
      datapackage.resourcesByName[resource.name] = resource;
       processByType(resource);
    } */
  }

  /* function createHttpRequest (resource) {
    return {
      method: 'GET',
      url: resource.url,
      cache: true,
      transformResponse: (data, headers, status) => {
        if (status === 404) {
          return resource;
        }
  
        const contentType = headers('Content-Type');
  
        if (contentType) {
          resource.mediatype = resource.mediatype || contentType.split(';')[0];
        }
  
        resource.content = data;
        return processByType(resource);
      }
    };
  } */

  _export('dataservice', dataservice);

  return {
    setters: [function (_npmSystemjsPluginBabel0012RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0012RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0012BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0012BabelHelpersAsyncToGeneratorJs.default;
    }, function (_datapackage) {
      dp = _datapackage.default;
    }],
    execute: function () {

      // import {processByType} from './processors';
      // import {normalizePackage, normalizeResource} from './datapackage';

      // window.process = process;  // annoying
      run.$inject = ['$http'];
      // import process from 'process';
    }
  };
});
System.register('common/services/datapackage/index.js', ['angular', './resolver', './dataservice'], function (_export, _context) {
  "use strict";

  var angular, addDataPackageResolver, run, dataservice, module;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_resolver) {
      addDataPackageResolver = _resolver.default;
    }, function (_dataservice) {
      run = _dataservice.run;
      dataservice = _dataservice.dataservice;
    }],
    execute: function () {
      module = angular.module('projectX.dataService', ['ngRoute']).service('dataService', dataservice).run(run).decorator('$route', ['$delegate', function ($delegate) {
        angular.forEach($delegate.routes, addDataPackageResolver);
        return $delegate;
      }]);

      _export('default', module.name);
    }
  };
});
System.register("common/components/editor/editor.html!github:systemjs/plugin-text@0.0.8/text.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<div ng-if=\"$ctrl.enableProtected && $ctrl.panel.open\">\n  <alert close=\"closeAlert = true\" type=\"warning\" ng-hide=\"closeAlert\">\n    This is your chance to play with the featured visualization.  No changes you make will be saved.\n  </alert>\n</div>\n\n\n<section class=\"datapckage-editor-container hidden-print\" style=\"position: relative\">\n\n  <div class=\"pull-right panel-toggle\">\n    <button type=\"button\" class=\"btn btn-link btn-sm\" tooltip=\"Add new resource\"\n      ng-show=\"$ctrl.enableAdd && $ctrl.panel.open\"\n      ng-click=\"$ctrl.newFile()\"\n      file-dropzone=\"{{$ctrl.types}}\"\n      data-max-file-size=\"30\"\n      dropped=\"$ctrl.dropped(file)\">\n      <i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i>\n    </button>\n\n    <button type=\"button\" class=\"btn btn-primary btn-sm\"\n      ng-click=\"$ctrl.play()\"\n      ng-if=\"$ctrl.enableProtected\">\n      Try your own data\n    </button>\n\n    <button id=\"data-drop\" type=\"button\" class=\"btn btn-primary btn-sm\" tooltip=\"Add new resource\"\n      ng-if=\"$ctrl.enableDrop\"\n      file-dropzone=\"{{$ctrl.types}}\"\n      data-max-file-size=\"30\"\n      dropped=\"$ctrl.droppedOver($ctrl.data.resources.length - 1, file)\">\n      Drop your own data here\n    </button>\n\n    <button type=\"button\" class=\"btn btn-link btn-sm\" tooltip=\"Show/hide resources panel\"\n      ng-show=\"$ctrl.enableOpen\"\n      ng-click=\"$ctrl.tooglePanel()\">\n      <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <form name=\"userForm\" ng-submit=\"$ctrl.submit(userForm)\">\n    <uib-tabset id=\"dataPackageEditor\"\n      active=\"$ctrl.activeTab\"\n      ng-show=\"$ctrl.panel.open\"\n      ng-if=\"$ctrl.enableOpen || $ctrl.enableProtected\">\n      <uib-tab ng-repeat=\"tab in $ctrl.resources track by $index\" select=\"$ctrl.ui.refresh()\">\n        <uib-tab-heading\n          file-dropzone=\"{{$ctrl.types}}\"\n          data-max-file-size=\"30\"\n          dropped=\"$ctrl.droppedOver($index, file)\">\n          {{ $ctrl.data.resources.length < 7 ? tab.name : $index }}\n          <a class=\"close\" ng-click=\"$ctrl.remove($index)\">&nbsp;&times;</a>\n        </uib-tab-heading>\n        <div file-dropzone=\"{{$ctrl.types}}\" data-max-file-size=\"30\" dropped=\"$ctrl.droppedOver($index, file)\">\n\n          <div class=\"col-xs-12 mini-well\">\n            <div class=\"col-md-3\">\n              <label class=\"sr-only\">Filename</label>\n              <input type=\"text\" id=\"label\" class=\"form-control input-sm\"\n                ng-model=\"tab.name\" placeholder=\"filename\"\n                ng-model-options=\"{ updateOn: 'submit' }\"\n                ng-change=\"$ctrl.rename(tab)\">\n            </div>\n            <div class=\"col-md-3\">\n              <label class=\"sr-only\">Media Type</label>\n              <select class=\"form-control input-sm\"\n                ng-options=\"value as value for value in $ctrl.types\"\n                ng-model=\"tab.mediatype\"\n                ng-model-options=\"{ updateOn: 'submit' }\"\n                ng-change=\"$ctrl.change(tab)\"></select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <textarea class=\"editor\"\n                resource=\"tab\"\n                datapackage=\"$ctrl.data\"\n                name=\"input{{$index}}\"\n                ng-model=\"tab.content\"\n                ng-model-options=\"{ updateOn: 'submit', debounce: 200 }\"\n                ng-change=\"$ctrl.change(tab, userForm['input' + $index])\"\n                ui-codemirror\n                ui-codemirror-opts=\"{\n                  lineNumbers: true,\n                  lineWrapping: false,\n                  mode: file.type,\n                  allowDropFileTypes: false,\n                  onLoad: $ctrl.ui.codemirrorLoaded\n                }\"\n                ui-refresh=\"$ctrl.ui.count\"></textarea>\n                <div class=\"col-xs-12 bg-danger\">\n                  <ul class=\"list-unstyled\">\n                    <li ng-repeat=\"error in tab.errors | limitTo:10\">row {{error.row}}: {{error.message}}</li>\n                  </ul>\n                </div>\n            </div>\n          </div>\n        </div>\n      </uib-tab>\n    </uib-tabset>\n\n    <ng-transclude></ng-transclude>\n\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"toolbar\">\n      <div id=\"data-download\" class=\"btn-group\" uib-dropdown>\n        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" uib-dropdown-toggle aria-expanded=\"false\" ng-if=\"$ctrl.enableFileDownload\">\n          <div class=\"pull-right\">\n            <i class=\"fa fa-arrow-circle-o-down\" aria-hidden=\"true\"></i>\n            Download Data <span class=\"caret\"></span>\n          </div>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li class=\"dropdown-header\">Data Resources</li>\n          <li ng-repeat=\"file in $ctrl.data.resources\">\n            <a class=\"btn btn-link\" file-download=\"file\">{{file.name}}</a>\n          </li>\n        </ul>\n      </div>\n\n      <div id=\"svg-download\" class=\"btn-group hidden-print\"\n        uib-dropdown svg-download-dropdown=\"svgList in #charts\"\n        ng-if=\"$ctrl.enableSvgDownload || $ctrl.enablePngDownload\">\n        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\"\n          uib-dropdown-toggle aria-expanded=\"false\">\n          <div class=\"pull-right\">\n            <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n            Download SVG <span class=\"caret\"></span>\n          </div>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li ng-repeat-start=\"svg in svgList\" ng-show=\"$ctrl.enableSvgDownload\">\n            <a href svg-download=\"#{{svg.id}}\" title=\"{{svg.title}}\">{{svg.title}} as SVG</a>\n          </li>\n          <li ng-repeat-end ng-show=\"$ctrl.canDownloadPng\">\n            <a href svg-download=\"#{{svg.id}}\" title=\"{{svg.title}}\" type=\"png\">{{svg.title}} as PNG</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"pull-right btn-toolbar\" ng-show=\"$ctrl.panel.open\">\n        <button type=\"submit\" class=\"btn btn-primary btn-sm\">Apply changes</button>\n        <button class=\"btn btn-danger btn-sm\"\n          ng-click=\"$ctrl.cancel(userForm)\">Cancel</button>\n      </div>\n    </div>\n  </form>\n</section>\n");
    }
  };
});
System.registerDynamic("common/services/datapackage/datapackage.js", ["chi-datapackage/dist/service", "chi-datapackage/dist/normalizer"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  const DataPackageService = $__require('chi-datapackage/dist/service');
  const Normalizer = $__require('chi-datapackage/dist/normalizer');
  const dataPackageService = new DataPackageService();
  dataPackageService.Normalizer = Normalizer;
  module.exports = dataPackageService;
  return module.exports;
});

System.register('common/components/editor/editor-controller.js', ['angular', 'common/services/datapackage/datapackage'], function (_export, _context) {
  "use strict";

  var angular, dp;
  function controller($scope, $cookies, $timeout, $log, growl) {
    var $ctrl = this;
    var hasOptions = Boolean($ctrl.options);
    var hasPackage = hasOptions && Boolean($ctrl.options.data);

    var isSafari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);
    var isIE = typeof window.navigator.msSaveBlob !== 'undefined';

    var enableFileDownload = hasPackage && $ctrl.options.data.resources.length > 0;

    return Object.assign($ctrl, {
      // "internal"
      activeTab: 0,
      resources: hasPackage ? angular.copy($ctrl.options.data.resources) : [], // changes are made here first
      panel: {
        open: false
      },
      change: updateResource,
      remove: removeResourceByIndex,
      rename: resourceRenamed,
      newFile: addResource,
      dropped: fileDropped,
      droppedOver: fileDroppedOver,
      submit: submit, // push changes to data package
      cancel: cancel, // cancel changes, refresh from data package
      tooglePanel: tooglePanel,
      play: play,
      ui: {
        refresh: function refresh() {
          $ctrl.ui.count++;
        },
        count: 0,
        codemirrorLoaded: function codemirrorLoaded(cm) {
          $timeout(function () {
            cm.refresh();
            $ctrl.ui.refresh();
          }, 100);
        }
      },

      // user config event
      onChange: function onChange() {}, // ccalled when datapackage updates

      // user config defaults
      enableOpen: hasPackage,
      enableFileDownload: enableFileDownload,
      enableSvgDownload: true,
      enablePngDownload: !isSafari && !isIE,
      enableAdd: true,
      enableDrop: false,
      enableProtected: false,
      types: Object.keys(dp.processor.translators),
      defaultFormat: hasPackage ? $ctrl.options.data.resources[0].format : 'txt',
      defaultSchema: hasPackage ? $ctrl.options.data.resources[0].schema : undefined

      // svgsFrom: '#chart' // TODO
    }, this.options);

    function cancel(form) {
      $log.debug('cancel');
      form.$rollbackViewValue();
      $ctrl.resources = hasPackage ? angular.copy($ctrl.options.data.resources) : [];
      form.$setPristine();
    }

    function submit(form) {
      if (form.$valid) {
        $log.debug('submit');
        if (hasPackage) {
          $ctrl.options.data.resources = $ctrl.resources;
          $ctrl.options.data.$resourcesByName = dp.Normalizer.index($ctrl.options.data);
        }
        $timeout(function () {
          $ctrl.onChange();
        });
      }
    }

    function createNewResource(name) {
      var content = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      name = name || 'new.' + $ctrl.defaultFormat;
      return {
        path: name,
        name: name,
        mediatype: dp.normalize.mime.lookup(name),
        content: content,
        schema: $ctrl.defaultSchema
      };
    }

    function fileDroppedOver($index, file) {
      $log.debug('fileDroppedOver', $index, file);
      var resource = createNewResource(file.name, file.content);
      $ctrl.activeTab = $index;
      $ctrl.resources.splice($index, 1, resource);
      updateResource(resource);
      $ctrl.ui.refresh();
    }

    function fileDropped(file) {
      $log.debug('fileDropped', file);
      addResource(file.name, file.content);
    }

    function addResource(name) {
      var content = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      $log.debug('addResource', name, content);
      var resource = createNewResource(name, content);
      $ctrl.resources.push(resource);
      updateResource(resource);
      $timeout(function () {
        $ctrl.ui.refresh();
        $ctrl.activeTab = $ctrl.resources.length - 1;
      });
      return false;
    }

    function play() {
      if ($ctrl.data && $ctrl.data.readme) {
        $ctrl.data.readme = null;
      }
      tooglePanel();
    }

    function updateResource(resource, form) {
      $log.debug('updateResource', $scope);

      dp.normalizeResource($ctrl.data, resource);
      dp.processResource(resource);

      var error = resource.errors && resource.errors.length > 0;

      if (form) {
        form.$setValidity('processed', !error);
      }
      if (error) {
        return growl.error('failed to process ' + resource.name);
      }
    }

    function removeResourceByIndex(i) {
      if (i > -1) {
        $ctrl.resources.splice(i, 1);
      }
    }

    function resourceRenamed(resource) {
      if (!resource.name) {
        return;
      }
      resource.path = resource.name;
      updateResource(resource);
    }

    function tooglePanel() {
      $ctrl.panel.open = !$ctrl.panel.open;
      $ctrl.ui.refresh();

      $timeout($ctrl.ui.refresh, 100);
    }
  }

  _export('default', controller);

  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_commonServicesDatapackageDatapackage) {
      dp = _commonServicesDatapackageDatapackage.default;
    }],
    execute: function () {
      /* global FileReader, Blob */


      controller.$inject = ['$scope', '$cookies', '$timeout', '$log', 'growl'];
    }
  };
});
System.register('common/components/editor/editor.js', ['angular', 'ui-codemirror', 'codemirror/lib/codemirror', 'codemirror/lib/codemirror.css!', './editor.css!', 'common/directives/svg-download-dropdown', 'common/directives/file-drop', 'common/directives/file-download', 'common/services/datapackage/index', 'common/services/datapackage/datapackage', './editor.html!text', './editor-controller'], function (_export, _context) {
  "use strict";

  var angular, svgDropdownDownload, fileDrop, fileDownload, dataServices, dp, template, controller, editor;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_uiCodemirror) {}, function (_codemirrorLibCodemirror) {}, function (_codemirrorLibCodemirrorCss) {}, function (_editorCss) {}, function (_commonDirectivesSvgDownloadDropdown) {
      svgDropdownDownload = _commonDirectivesSvgDownloadDropdown.default;
    }, function (_commonDirectivesFileDrop) {
      fileDrop = _commonDirectivesFileDrop.default;
    }, function (_commonDirectivesFileDownload) {
      fileDownload = _commonDirectivesFileDownload.default;
    }, function (_commonServicesDatapackageIndex) {
      dataServices = _commonServicesDatapackageIndex.default;
    }, function (_commonServicesDatapackageDatapackage) {
      dp = _commonServicesDatapackageDatapackage.default;
    }, function (_editorHtmlText) {
      template = _editorHtmlText.default;
    }, function (_editorController) {
      controller = _editorController.default;
    }],
    execute: function () {
      editor = angular.module('projectX.dataEditor', ['ui.codemirror', dataServices, svgDropdownDownload, fileDrop, fileDownload]).directive('datapackageEdit', function () {
        return { // old Attribute syntax
          restrict: 'A',
          scope: {},
          bindToController: {
            options: '=datapackageEdit'
          },
          controller: controller,
          controllerAs: '$ctrl',
          transclude: true,
          template: template
        };
      }).component('packageEditor', { // new Element syntax
        template: template,
        controller: controller,
        transclude: true,
        bindings: {
          options: '='
        }
      });

      _export('default', editor.name);
    }
  };
});
System.register("common/services/loading-bar/loading-bar.css!github:systemjs/plugin-css@0.1.23/css.js", [], function() { return { setters: [], execute: function() {} } });

System.register("common/services/loading-bar/loading-bar.html!github:systemjs/plugin-text@0.0.8/text.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<div id=\"loading-bar-spinner\" class=\"text-center\">\n  <div class=\"spinner-box\">\n    <div class=\"spinner-icon\"></div>\n  </div>\n</div>\n");
    }
  };
});
System.register('common/services/loading-bar/loading-bar.js', ['angular', 'angular-loading-bar', 'angular-loading-bar/build/loading-bar.css!', './loading-bar.css!', './loading-bar.html!text'], function (_export, _context) {
  "use strict";

  var angular, spinnerTemplate, mod;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_angularLoadingBar) {}, function (_angularLoadingBarBuildLoadingBarCss) {}, function (_loadingBarCss) {}, function (_loadingBarHtmlText) {
      spinnerTemplate = _loadingBarHtmlText.default;
    }],
    execute: function () {
      mod = angular.module('projectX.loading-bar', ['angular-loading-bar']).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.latencyThreshold = 32;
        cfpLoadingBarProvider.spinnerTemplate = spinnerTemplate;
      }]).run(['$rootScope', 'cfpLoadingBar', function ($rootScope, cfpLoadingBar) {
        $rootScope.$on('$routeChangeStart', function () {
          cfpLoadingBar.start();
        });

        $rootScope.$on('$routeChangeError', function () {
          cfpLoadingBar.complete();
        });

        $rootScope.$on('$routeChangeSuccess', function () {
          cfpLoadingBar.complete();
        });
      }]);

      _export('default', mod.name);
    }
  };
});
System.register('common/services/dynamic-title/dynamic-title.js', ['angular'], function (_export, _context) {
  "use strict";

  var angular, module;

  function setupRouteChange($rootScope, dynamicTitle) {
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      return dynamicTitle.fromState(current);
    });
  }

  function DynamicTitleProvider() {
    var configuration = {
      defaultTitle: document.title || 'Project-χ'
    };

    this.configure = function (value) {
      angular.extend(configuration, value);
    };

    this.$get = DynamicTitle;

    DynamicTitle.$inject = ['$document', '$log'];
    function DynamicTitle($document, $log) {
      return {
        set: set,
        fromState: function fromState($state) {
          var value = null;
          if ($state.$$route && $state.$$route.title) {
            value = typeof $state.$$route.title === 'function' ? $state.$$route.title($state.params) : $state.$$route.title;
          }
          set(value);
        }
      };

      function set(title) {
        title = title || configuration.defaultTitle;
        $log.debug('title set to', title);
        $document[0].title = title;
      }
    }
  }
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {
      module = angular.module(name, []).provider('dynamicTitle', DynamicTitleProvider).run(setupRouteChange);

      _export('default', module.name);

      setupRouteChange.$inject = ['$rootScope', 'dynamicTitle'];DynamicTitleProvider.$inject = [];
    }
  };
});
System.register('common/services/growl/growl.js', ['angular-growl/build/angular-growl.js', 'angular-growl/build/angular-growl.css!', 'angular'], function (_export, _context) {
  "use strict";

  var angular, mod;

  function runGrowl($rootScope, $location, growl) {
    $rootScope.$on('$routeChangeError', function (event, curr, prev, rej) {
      if (typeof rej !== 'string') {
        if (rej.status && rej.statusText) {
          rej = rej.status + ' ' + rej.statusText;
        } else if (rej.message) {
          rej = rej.message;
        } else {
          rej = String(rej);
        }
      }
      return growl.error('failed to change routes; ' + rej);
    });
  }
  return {
    setters: [function (_angularGrowlBuildAngularGrowlJs) {}, function (_angularGrowlBuildAngularGrowlCss) {}, function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {
      mod = angular.module('projectX.growl', ['angular-growl']).run(runGrowl);

      _export('default', mod.name);

      runGrowl.$inject = ['$rootScope', '$location', 'growl'];
    }
  };
});
System.register('common/directives/resize.js', ['angular'], function (_export, _context) {
  "use strict";

  var angular, module;

  function onResize($window, $timeout) {
    return {
      scope: {
        onResize: '&'
      },
      link: function link(scope) {
        var timeout = null;
        function debounceRedraw() {
          if (timeout) {
            $timeout.cancel(timeout);
          }
          timeout = $timeout(function () {
            scope.onResize();
          }, 500);
        }

        function resize() {
          scope.onResize();
        }

        angular.element($window).on('resize', debounceRedraw);
        if ('matchMedia' in window) {
          window.matchMedia('print').addListener(resize);
        }

        scope.$on('$destroy', function () {
          angular.element($window).off('resize', debounceRedraw);
          if ('matchMedia' in window) {
            window.matchMedia('print').removeListener(resize);
          }
        });
      }
    };
  }
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {
      module = angular.module('projectX.onResize', []).directive('onResize', onResize);

      _export('default', module.name);

      onResize.$inject = ['$window', '$timeout'];
    }
  };
});
System.register('common/directives/active-path.js', ['angular'], function (_export, _context) {
  "use strict";

  var angular, activePath;

  function activePathDirective($log, $location) {
    return {
      link: function postLink(scope, element, attrs) {
        var re = new RegExp(attrs.activePath);
        scope.$watch(function () {
          return $location.path();
        }, function (value) {
          if (re.test(value)) {
            element.addClass('active');
          } else {
            element.removeClass('active');
          }
        });
      }
    };
  }
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }],
    execute: function () {
      activePath = angular.module('projectX.activePath', []).directive('activePath', activePathDirective);

      _export('default', activePath.name);

      activePathDirective.$inject = ['$log', '$location'];
    }
  };
});
System.register('common/common.js', ['angular', 'common/services/datapackage/index', 'common/components/editor/editor', 'common/services/loading-bar/loading-bar', 'common/services/dynamic-title/dynamic-title', 'common/services/growl/growl', 'common/directives/resize', 'common/directives/active-path'], function (_export, _context) {
  "use strict";

  var angular, dataServices, dataPackageEditor, loadingBar, dynamicTitle, growl, onResize, activePath, common;
  return {
    setters: [function (_angular) {
      angular = _angular.default;
    }, function (_commonServicesDatapackageIndex) {
      dataServices = _commonServicesDatapackageIndex.default;
    }, function (_commonComponentsEditorEditor) {
      dataPackageEditor = _commonComponentsEditorEditor.default;
    }, function (_commonServicesLoadingBarLoadingBar) {
      loadingBar = _commonServicesLoadingBarLoadingBar.default;
    }, function (_commonServicesDynamicTitleDynamicTitle) {
      dynamicTitle = _commonServicesDynamicTitleDynamicTitle.default;
    }, function (_commonServicesGrowlGrowl) {
      growl = _commonServicesGrowlGrowl.default;
    }, function (_commonDirectivesResize) {
      onResize = _commonDirectivesResize.default;
    }, function (_commonDirectivesActivePath) {
      activePath = _commonDirectivesActivePath.default;
    }],
    execute: function () {
      common = angular.module('projectX.common', [dataServices, dataPackageEditor, onResize, loadingBar, dynamicTitle, growl, activePath]);

      _export('default', common.name);
    }
  };
});
System.register("common/partials/footer.html!github:systemjs/plugin-text@0.0.8/text.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<div class=\"container\">\n\t<p>Website designed and built at RIKEN, Japan.</p>\n\t<p>Project-χ code licensed under MIT</p>\n\t<p>Currently 1.0.0-rc.5\n\t\t// <a href=\"https://github.com/Hypercubed/Project-chi\">GitHub</a>\n\t\t// <a ng-href=\"#/about\">About</a>\n\t\t// <a href=\"https://github.com/Hypercubed/Project-Chi/issues\">Issues</a></p>\n</div>\n");
    }
  };
});
System.register("common/partials/header.html!github:systemjs/plugin-text@0.0.8/text.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<div class=\"header\">\n\t<div class=\"navbar navbar-default\" role=\"navigation\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"navbar-header\">\n\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\">\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\n\t\t\t\t<a class=\"navbar-brand\" href=\"#/\">Project-χ</a>\n\t\t\t</div>\n\n\t\t\t<div class=\"collapse navbar-collapse pull-right\" id=\"js-navbar-collapse\">\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li active-path=\"/about\"><a ng-href=\"#/about\">About</a></li>\n\t\t\t\t\t<li><a href=\"//github.com/Hypercubed/Project-Chi/issues\">Contact</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");
    }
  };
});
System.register('components/app.component.js', ['common/partials/footer.html!text', 'common/partials/header.html!text'], function (_export, _context) {
  "use strict";

  var footerHTML, headerHTML, AppComponent;
  return {
    setters: [function (_commonPartialsFooterHtmlText) {
      footerHTML = _commonPartialsFooterHtmlText.default;
    }, function (_commonPartialsHeaderHtmlText) {
      headerHTML = _commonPartialsHeaderHtmlText.default;
    }],
    execute: function () {
      AppComponent = {
        template: '\n    <div class="header">\n      ' + headerHTML + '\n    </div>\n\n    <div class="container">\n      <div ng-view autoscroll class="ng-fade"></div>\n    </div>\n\n    <div class="footer">\n      ' + footerHTML + '\n    </div>\n\n    <div growl></div>'
      };

      _export('default', AppComponent);
    }
  };
});
System.register('components/app.js', ['./app.css!', 'angular', 'angular-route', 'angular-animate', 'angular-cookies', 'angular-sanitize', 'angular-touch', 'angular-ui-bootstrap', 'angular-marked', 'components/routes', 'common/common', './app.component'], function (_export, _context) {
  "use strict";

  var angular, angularMarked, routes, common, AppComponent;
  return {
    setters: [function (_appCss) {}, function (_angular) {
      angular = _angular.default;
    }, function (_angularRoute) {}, function (_angularAnimate) {}, function (_angularCookies) {}, function (_angularSanitize) {}, function (_angularTouch) {}, function (_angularUiBootstrap) {}, function (_angularMarked) {
      angularMarked = _angularMarked.default;
    }, function (_componentsRoutes) {
      routes = _componentsRoutes.default;
    }, function (_commonCommon) {
      common = _commonCommon.default;
    }, function (_appComponent) {
      AppComponent = _appComponent.default;
    }],
    execute: function () {
      _export('default', angular.module('projectX', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngTouch', 'ui.bootstrap', angularMarked, routes.name || routes, common]).component('app', AppComponent).config(['$logProvider', '$compileProvider', function ($logProvider, $compileProvider) {
        $logProvider.debugEnabled(!System.production);
        $compileProvider.debugInfoEnabled(!System.production);
      }]));
    }
  };
});
System.register('components/boot.js', ['webcomponentsjs/webcomponents-lite.js', 'core-js/shim', 'bootstrap/dist/css/bootstrap.css!', 'font-awesome/css/font-awesome.css!', 'angular', './app'], function (_export, _context) {
  "use strict";

  var angular, app;
  return {
    setters: [function (_webcomponentsjsWebcomponentsLiteJs) {}, function (_coreJsShim) {}, function (_bootstrapDistCssBootstrapCss) {}, function (_fontAwesomeCssFontAwesomeCss) {}, function (_angular) {
      angular = _angular.default;
    }, function (_app) {
      app = _app.default;
    }],
    execute: function () {

      // import 'jquery';
      // import 'bootstrap/js/bootstrap';
      /*
       this is included so that webcomponents-lite is bundled with the application
       if included here it is loaded first in index.html
       it can be safely excluded if html imports via systemjs-plugin-html are not used
       */


      angular.element(document).ready(function () {
        angular.bootstrap(document.body, [app.name], { strictDi: true });
      });

      /* Some older browsers need a shim. needed for Object.values */
    }
  };
});
System.register('components/app.css!github:systemjs/plugin-css@0.1.23/css.js', [], false, function() {});
System.register('components/examples/pca/pca.css!github:systemjs/plugin-css@0.1.23/css.js', [], false, function() {});
System.register('components/examples/treemap/treemap.css!github:systemjs/plugin-css@0.1.23/css.js', [], false, function() {});
System.register('common/styles/index.css!github:systemjs/plugin-css@0.1.23/css.js', [], false, function() {});
System.register('common/components/editor/editor.css!github:systemjs/plugin-css@0.1.23/css.js', [], false, function() {});
System.register('common/services/loading-bar/loading-bar.css!github:systemjs/plugin-css@0.1.23/css.js', [], false, function() {});
//# sourceMappingURL=app-bundle.js.map