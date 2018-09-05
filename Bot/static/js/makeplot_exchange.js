function makeplot_exchange(a) {
  Plotly.d3.csv(a, function(data){ processData_exchange(data) } );

};

function processData_exchange(allRows) {

  var x = [], y = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['rate'] );
    y.push( row['exchanges'] + '   ' );
  }
  x = x.reverse();
  y = y.reverse();
  makePlotly_exchange(x, y);
};

function makePlotly_exchange(x, y){
  var plotDiv = document.getElementById("plot");
  var traces = [{
	type: 'bar',
    x: x,
    y: y,
	orientation: 'h',
	marker: {
		color: 'rgb(102,0,51)',
		width: 0
		},
	width: [0.4, 0.4, 0.4, 0.4, 0.4,0.4,0.4]
  }];
  
 var layout = {
  title: '',
  xaxis1: {
	tickformat: ',.0%',
    range: [0, 1],
  },
  annotations: [],

			height: 200,
			  margin: {
			l: 80,
			r: 50,
			b: 30,
			t: 0,
			pad: 4
			}
};

var config = {
   modeBarButtonsToRemove: [
	  "zoom2d", "pan2d", "select2d", "lasso2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d",
	  "hoverClosestCartesian", "hoverCompareCartesian",
	  "zoom3d", "pan3d", "resetCameraDefault3d", "resetCameraLastSave3d", "hoverClosest3d",
	  "orbitRotation", "tableRotation",
	  "zoomInGeo", "zoomOutGeo", "resetGeo", "hoverClosestGeo",
	  "toImage",
	  "sendDataToCloud",
	  "hoverClosestGl2d",
	  "hoverClosestPie",
	  "toggleHover",
	  "resetViews",
	  "toggleSpikelines",
	  "resetViewMapbox"
	],
  displaylogo: false
	};
  
for ( var i = 0 ; i < x.length ; i++ ) {
  var result = {
    xref: 'x1',
    yref: 'y1',
    x: x[i]*1 + 0.05,
    y: y[i],
    text: x[i]*100 + '%',
    font: {
      family: 'Arial',
      size: 12,
      color: 'rgb(102, 0, 51)'
    },
     showarrow: false,
  }
  layout.annotations.push(result);
  }; 

  Plotly.newPlot('Exchange', traces,
    layout,config);
};