import angular from 'angular';

// examples
import examplesComponent from 'components/examples/index';
import pcaComponent from 'components/examples/pca/pca';
import treeMapComponent from 'components/examples/treemap/treemap';

export default angular
  .module('examples', ['projectX.dataService'])
  .component('pca', pcaComponent)
  .component('examples', examplesComponent)
  .component('treemap', treeMapComponent)
  .config(['$routeProvider', $routeProvider => {
    $routeProvider
      .when('/examples', {
        template: '<examples data-package="$resolve.dataPackage"></examples>',
        datapackageUrl: 'components/examples/datapackage.json'
      })
      .when('/examples/pca', {
        template: '<pca data-package="$resolve.dataPackage"></pca>',
        datapackageUrl: 'data/datapackage.json'
      });
  }]);
