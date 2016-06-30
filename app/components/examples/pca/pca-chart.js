/* eslint import/no-extraneous-dependencies: 0 */

import d3 from 'd3';

import './pca.css!';

/* const testDataset = [
       [3.38156266663556, 3.38911268489207, 3, 3],
       [4.52787538040321, 5.85417810116941, 4, 4],
       [2.65568186873946, 4.41199471748479, 4, 5],
       [2.76523467422508, 3.71541364974329, 3, 4],
       [2.84656010622109, 4.17550644951439, 5, 3],
       [3.89067195630921, 6.48838087188621, 5, 5],
       [3.47580524144079, 3.63284876204706, 3, 4],
       [5.91129844549583, 6.68076852676779, 4, 3],
       [3.92889396796927, 5.09844660814783, 5, 4],
       [4.56183536608942, 5.62329929038287, 3, 5],
       [4.57407170552516, 5.39765068914995, 4, 3],
       [4.37173355733069, 5.46116548918004, 5, 4],
       [4.19169387625100, 4.95469359045186, 2, 5],
       [5.24408517686664, 4.66148766849075, 3, 6],
       [2.83584020280787, 3.76801716326883, 4, 2],
       [5.63526969258877, 6.31211438310560, 5, 3],
       [4.68632967964966, 5.66524110304899, 3, 5],
       [2.85051337486241, 4.62645627270763, 4, 4],
       [5.11015730037567, 7.36319662353662, 5, 3],
       [5.18256376844695, 4.64650908778182, 6, 5],
       [5.70732809135459, 6.68103994977504, 3, 5],
       [3.57968458251575, 4.80278073546266, 6, 3],
       [5.63937773123337, 6.12043594486419, 2, 5],
       [4.26346851160160, 4.68942896498378, 3, 4],
       [2.53651693125750, 3.88449077575653, 5, 3],
       [3.22382901750257, 4.94255585367287, 5, 5],
       [4.92948801055806, 5.95501971122402, 4, 4],
       [5.79295773976472, 5.10839305453511, 2, 4],
       [2.81684823843681, 4.81895768959782, 3, 4],
       [3.88882413905485, 5.10036563684974, 4, 5],
       [3.34323419214569, 5.89301345482551, 6, 3],
       [5.87973413931621, 5.52141663871971, 3, 5],
       [3.10391912309722, 3.85710242154672, 5, 4],
       [5.33150572016357, 4.68074234658945, 4, 3],
       [3.37542686902548, 4.56537851617577, 3, 5],
       [4.77667888193414, 6.25435038973932, 4, 3],
       [2.67574630193237, 3.73096987540176, 3, 5],
       [5.50027665196111, 5.67948113445839, 5, 3],
       [1.79709714108619, 3.24753885348582, 3, 3],
       [4.32251470267314, 5.11110472186451, 6, 3],
       [4.42100444798251, 6.02563977712186, 3, 3],
       [3.17929886266190, 4.43686031619158, 4, 3],
       [3.03354124664264, 3.97879278223097, 2, 4],
       [4.60934820070329, 5.87979200261535, 4, 4],
       [2.96378859260761, 3.30024834860712, 3, 5],
       [3.97176248181608, 5.40773735417849, 5, 3],
       [1.18023320575165, 2.87869409391385, 3, 5],
       [1.91895045046187, 5.07107847507096, 3, 3],
       [3.95524687147485, 4.50532709674253, 4, 4],
       [5.11795499426461, 6.08507386392396, 3, 5]
		];*/

export default function Chart () {
  let width = 900;
  let height = 450;
  const xPadding = 60;
  const yPadding = 40;

  function my (selection) {
    selection.each(function (data) {
      console.log('data', data);
      const firstCol = data[0];
      const secondCol = data[1];
      const metaData = data.metaData;
      const pcaData = data.pcaData;
      const xScale = d3.scale.linear().domain(d3.extent(pcaData, d => d[firstCol])).range([0, width]);
      const yScale = d3.scale.linear().domain(d3.extent(pcaData, d => d[secondCol])).range([height, 0]);
      const xAxis = d3.svg.axis().scale(xScale).orient('bottom').ticks(10);
      const yAxis = d3.svg.axis().scale(yScale).orient('left').ticks(10);
      const color = d3.scale.category10();
      const locX = ((xPadding * (secondCol + 1)) + (secondCol * width));
      const locY = ((yPadding * (firstCol + 1)) + (firstCol * height));

      console.log(locX, locY);

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
           .attr('y', locY - 10)
           .style('fill', 'green')
           .style('font-size', 8)
           .style('font-family', 'Comic Sans MS')
           .style('font-weight', 'bold')
           .style('text-decoration', 'underline')
           .text(`PCA ${secondCol + 1}`);
      }

      if (secondCol === 0) {
        svg.append('text')
          .attr('x', locX - (xPadding))
           .attr('y', locY + ((height / 2) + 10))
           .style('fill', 'green')
            .style('font-size', 8)
           .style('font-family', 'Comic Sans MS')
           .style('font-weight', 'bold')
           .text(`PCA ${firstCol + 1}`);
      }

      const domain1 = (d3.max(pcaData, d => d[firstCol])) - (d3.min(pcaData, d => d[firstCol]));
      const domain2 = (d3.max(pcaData, d => d[secondCol])) - (d3.min(pcaData, d => d[secondCol]));
      const min1 = d3.min(pcaData, d => d[firstCol]);
      const min2 = d3.min(pcaData, d => d[secondCol]);

      svg.selectAll('circle')
         .data(pcaData)
         .enter()
         .append('circle')
         .attr('cx', d => (((d[firstCol] - min1) / domain1) * width) + locX)
         .attr('cy', d => (locY) - (((d[secondCol] - min2) / domain2) * height) + height)
         .attr('r', 3)
         .style('fill', (d, i) => color(metaData[i]));
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

  return my;
}
