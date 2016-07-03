/* eslint import/no-extraneous-dependencies: 0 */

import d3 from 'd3';
import d3Tip from 'd3-tip';

import './pca.css!';

function metaList (metadata) {
  return Object.keys(metadata).map(k => `${k}: ${metadata[k]}`).join('<br />');
}

export default function Chart () {
  let width = 900;
  let height = 450;
  let variance = [];
  const xPadding = 50;
  const yPadding = 25;
  let color = d3.scale.category20();

  function my (selection) {
    selection.each(function (data) {
      const firstCol = data[0];
      const secondCol = data[1];
      const metaData = data.metaData;
      const pcaData = data.pcaData;
      const tip = d3Tip().attr('class', 'd3-tip')
        .offset([-10, 0])
        .html((d, i) => `
        <strong>Coordinates:</strong>
        <span style="color:${color(metaData[i])}">(${[d[firstCol], d[secondCol]]})</span>
        <p />
        ${metaList(metaData[i])}
      `);
      const xScale = d3.scale.linear().domain(d3.extent(pcaData, d => d[firstCol])).range([0, width]);
      const yScale = d3.scale.linear().domain(d3.extent(pcaData, d => d[secondCol])).range([height, 0]);
      const xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(5);
      const yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(5);
      const locX = ((xPadding * (secondCol + 1)) + (secondCol * width));
      const locY = ((yPadding * (firstCol + 1)) + (firstCol * height)) + 50;
      const svg = d3.select(this);

      svg.append('g')
               .attr('class', 'axis')
               .attr('transform', `translate(${locX}, ${locY + height})`)
               .call(xAxis);

      svg.append('g')
               .attr('class', 'axis')
               .attr('transform', `translate(${locX}, ${locY})`)
               .call(yAxis);

      if (firstCol === 0) {
        svg.append('text')
           .attr('x', locX + ((width / 2) - 10))
           .attr('y', locY - 25)
           .style('fill', 'gray')
           .style('font-size', 11)
           .style('font-family', 'Times New Roman')
           .style('font-weight', 'bold')
           .style('text-decoration', 'underline')
           .text(`PCA ${secondCol + 1}`);

        svg.append('text')
           .attr('x', locX + ((width / 2) - 70))
           .attr('y', locY - 10)
           .style('fill', 'gray')
           .style('font-size', '11')
           .style('font-family', 'Times New Roman')
           .style('font-weight', 'bold')
           .text(`Variance: ${variance[secondCol]}`);
      }
      if (secondCol === 0) {
        svg.append('text')
           .attr('x', locX - xPadding)
           .attr('y', locY + ((height / 2) + 10))
           .style('fill', 'gray')
           .style('font-size', 9)
           .style('font-family', 'Times New Roman')
           .style('font-weight', 'bold')
           .text(`PCA ${firstCol + 1}`);
      }

      const domain1 = (d3.max(pcaData, d => d[firstCol])) - (d3.min(pcaData, d => d[firstCol]));
      const domain2 = (d3.max(pcaData, d => d[secondCol])) - (d3.min(pcaData, d => d[secondCol]));
      const min1 = d3.min(pcaData, d => d[firstCol]);
      const min2 = d3.min(pcaData, d => d[secondCol]);
      svg.call(tip);
      svg.selectAll('circle')
         .data(pcaData)
         .enter()
         .append('circle')
         .attr('cx', d => (((d[firstCol] - min1) / domain1) * width) + locX)
         .attr('cy', d => (locY) - (((d[secondCol] - min2) / domain2) * height) + height)
         .attr('r', 3)
         .style('fill', (d, i) => color(metaData[i]))
         .on('mouseover', tip.show)
         .on('mouseout', tip.hide);
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
