function makeplot(new_taux) {
 var trace3 = {
  x: [1, 2, 3, 4],
  y: [0, 9, new_taux, 30],
  mode: 'lines+markers',
  type: 'scatter'
};

var data = [trace3];

var layout = {
  xaxis: {

	autorange: true,
    tick0: 0,
    dtick: 1



  },
  yaxis: {

	autorange: true,
    tick0: 0,
    dtick: 5



  }
};
Plotly.newPlot('myDiv', data, layout);
}