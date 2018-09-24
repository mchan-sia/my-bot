function makeplot_installed_capa(a) {
  Plotly.d3.csv(a, function(data){ processData_installed_capa(data) } );

};

function processData_installed_capa(allRows) {

  var x = [], y = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['source']);
    y.push( row['capacity']*1);
  }
  makePlotly_installed_capa(x, y);
};

function makePlotly_installed_capa(x, y){
  var colors = ['rgb(0,0,0)', 'rgb(137,131,122)','rgb(102,0,51)','rgb(48,245,15)','rgb(243,243,17)','rgb(43,29,231)','rgb(24,196,236)','rgb(255,153,0)']
  var traces = [{
	type: 'bar',
    x: x,
    y: y,
	orientation: 'v',
	marker: {
		color: colors,
		width: 0
		}
  }];
  
 var layout = {
  title: '',
  annotations: [],
			height: 180,
			  margin: {
			l: 20,
			r: 10,
			b: 80,
			t: 10,
			pad: 4
			}
};

for ( var i = 0 ; i < x.length ; i++ ) {	
  var result = {
    xref: 'x1',
    yref: 'y1',
    x: x[i],
    y: y[i] + 1000,
    text: y[i] + ' MW',
    font: {
      family: 'Arial',
      size: 10,
      color: 'rgb(102, 0, 51)'
    },

     showarrow: false,
  }
  layout.annotations.push(result);
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
  Plotly.newPlot('installed_capa', traces,
    layout,config);
};
