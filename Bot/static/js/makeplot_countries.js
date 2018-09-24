function makeplot_countries(a) {
  Plotly.d3.csv(a, function(data){ processData_countries(data) } );

};

function processData_countries(allRows) {

  var x = [], y = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['rate'] );
    y.push( row['country'] + '   ' );
  }
  x = x.reverse();
  y = y.reverse();
  makePlotly_countries(x, y);
};

function makePlotly_countries(x, y){
  var colors = ['rgb(240,221,225)', 'rgb(194,148,167)', 'rgb(181,87,109)', 'rgb(102,0,51)'];
  var plotDiv = document.getElementById("plot");
  var traces = [{
	type: 'bar',
    x: x,
    y: y,
	orientation: 'h',
	marker: {
		color: colors,
		width: 0
		},
			width: [0.2, 0.2, 0.2, 0.2]
  }];
  
 var layout = {
  title: '',
  xaxis1: {
	tickformat: ',.0%',

  },
  annotations: [],
			height: 250,
			  margin: {
			l: 50,
			r: 30,
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
    x: x[i]*1 + 0.02,
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

  Plotly.newPlot('Countries', traces,
    layout,config);
};
