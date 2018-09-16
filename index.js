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
