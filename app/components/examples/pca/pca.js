/* eslint import/no-extraneous-dependencies: 0 */

import d3 from 'd3';
import PCA from 'ml-pca';

import PCAChart from './pca-chart';
import pcaHTML from './pca.html!text';

function controller () {
  const $ctrl = this;

  const num = 4;

  const chart = new PCAChart().width(800 / 3).height(400 / 3); // (of 1) width:800, height:400

  return Object.assign($ctrl, {
    editorOptions: {
      data: $ctrl.dataPackage,
      onChange: draw
    },
    draw,
    $onInit: draw
  });

  function draw () {
    const pcaInput = $ctrl.dataPackage.resources[0].data = d3.csv.parseRows($ctrl.dataPackage.resources[0].content);
    $ctrl.dataPackage.resources[1].data = d3.csv.parseRows($ctrl.dataPackage.resources[1].content);

    pcaInput.forEach(d => {
      d[0] = Number(d[0]);
      d[1] = Number(d[1]);
      d[2] = Number(d[2]);
    });
    console.log(pcaInput);
    console.log($ctrl.dataPackage.resources);

    const pca = new PCA($ctrl.dataPackage.resources[0].data, {scale: true});
    const model = JSON.stringify(pca.toJSON());
    const newpca = PCA.load(JSON.parse(model));
    const out = newpca.predict($ctrl.dataPackage.resources[0].data);

    console.log(out);

    const x = [];
    for (let i = 0; i < num - 1; i++) {
      for (let j = 0; j < num - 1; j++) {
        const data = [i, j];
        data.pcaData = out;
        data.metaData = $ctrl.dataPackage.resources[1].data;
        x.push(data);
      }
    }

    const chart$ = d3.select('#_examples_pca__chart');

    chart$.selectAll('svg').remove();

    const svg = d3.select('#_examples_pca__chart')
      .append('svg')
      .attr('width', 900)
      .attr('height', 500);

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
