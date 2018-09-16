d3.select('h1').style('color', 'blue')
  .text('Super simple bar chart');


// add a simple bar chat
// add a dummy dataset
const charDataset = [1,2,11,4,8,6];

const svgWidth = 500, svgHeight = 200, barPadding = 5;
const barWidth = (svgWidth / 7);

// select svg container and define width & height
const svg = d3.select('svg')
              .attr('height', svgHeight)
              .attr('width', svgWidth);

// create chart scale
const yScale = d3.scaleLinear()
    .domain([0, d3.max(charDataset)])
    .range([0, svgHeight - 20]);

// create bar chart
const barChart = svg.selectAll('rect')
    .data(charDataset)
    .enter()
    .append('rect')
    // config y location of each rect
    .attr('y', function(d) {
      return svgHeight - yScale(d);
    })
    // config x location of each rect
    .attr('x', function(d, i) {
      return barWidth * i;
    })
    .attr('height', function(d) {
      return yScale(d);
    })
    .attr('width', barWidth - barPadding)
    // 
    
// apply background color for chart
d3.selectAll('rect').attr('fill', '#76e078');

// appending text to chart
const text  = svg.selectAll('text')
    .data(charDataset)
    .enter()
    .append('text')
    .text(function(d) { return d; })
    .attr('y', function(d) {
      return svgHeight- yScale(d) - 5;
    })
    .attr('x', function(d, i) {
      return barWidth * i;
    })

    


