d3.select('h1').style('color', 'blue')
  .text('Hello world');

// add a dataset
const dataset = ['Banana', 'Apple', 'Orange'];
// select container
d3.select('body')
  // select item 
  .selectAll('p')
  // choose dataset
  .data(dataset)
  .enter()
  // append data to the item
  .append('p')
  // method
  .text(function(item) { return item; });

// add a simple bar chat
// add a dummy dataset
const charDataset = ['10', '20', '30'];

const svgWidth = 500, svgHeight = 100, barPadding = 5;
const barWidth = (svgWidth / 7);

// select svg container and define width & height
const svg = d3.select('svg')
              .attr('height', svgHeight)
              .attr('width', svgWidth);

// create bar chart
const barChart = svg.selectAll('rect')
    .data(charDataset)
    .enter()
    .append('rect')
    // apply methods to each of the rect
    .attr('y', function(d) {
      return svgHeight - d;
    })
    .attr('height', function(d) {
      return d;
    })
    .attr('width', barWidth - barPadding)
    // 
    .attr('transform', function(d, i) {
      const translate = [barWidth * i , 0];
      return "translate(" + translate + ")"
    })

// apply background color for chart
d3.selectAll('rect').style('background', 'green');