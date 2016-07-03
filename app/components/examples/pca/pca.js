/* eslint import/no-extraneous-dependencies: 0 */

import d3 from 'd3';
import PCA from 'ml-pca';
import Matrix from 'ml-matrix';

import PCAChart from './pca-chart';
import pcaHTML from './pca.html!text';

function controller () {
  const $ctrl = this;

  let metaData = [];
  let pcaOutput = [];
  let theVariance = [];
  const color = d3.scale.category20();

  return Object.assign($ctrl, {
    keys: [],
    meta: 'Treatment',
    dims: 3,
    editorOptions: {
      data: $ctrl.dataPackage,
      onChange: update
    },
    draw,
    $onInit: update
  });

  function update () {
    $ctrl.keys = Object.keys($ctrl.dataPackage.resources[1].data[0]);
    $ctrl.meta = $ctrl.keys[1];

    let pcaInput = $ctrl.dataPackage.resources[0].data.table.map(r => r.map(Number));

    pcaInput = new Matrix(pcaInput).transpose();

    const pca = new PCA(pcaInput, {scale: false, center: true});
    pcaOutput = pca.predict(pcaInput);
    theVariance = pca.getExplainedVariance();
    draw();
  }

  function draw () {
    metaData = $ctrl.dataPackage.resources[1].data;
    // $ctrl.meta
    // $ctrl.dims
    const num = $ctrl.dims;
    const chart = new PCAChart()
      .width((1100 / num) - 50)
      .height((550 / num) - 25 - (50 / num))
      .variance(theVariance)
      .color(d => color(d[$ctrl.meta])); // (of 1) width:800, height:400

    const x = [];
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        const data = [i, j];
        data.pcaData = pcaOutput;
        data.metaData = metaData;
        x.push(data);
      }
    }

    const chart$ = d3.select('#_examples_pca__chart');

    chart$.selectAll('svg').remove();

    const svg = d3.select('#_examples_pca__chart')
      .append('svg')
      .attr('width', 1200)
      .attr('height', 600);

    svg.selectAll('g')
      .data(x)
      .enter()
      .append('g')
      .call(chart);
  }
}

export default {
  controller,
  template: pcaHTML,
  bindings: {
    dataPackage: '<package'
  }
};
