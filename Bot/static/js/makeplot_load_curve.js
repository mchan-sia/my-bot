
function makeplot_load_curve(a,date_debut,date_fin) {
console.log("date",date_debut,date_fin)
  Plotly.d3.csv(a, function(data){ processData_load_curve(data, date_debut, date_fin) } );

};

function processData_load_curve(allRows,date_debut,date_fin) {  
var datetime=[], conso = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
	var date = row["date"].split("/");
	var time = row["heure"].split(":");
	var dt = new Date(date[2], parseInt(date[1]) - 1, date[0], time[0], time[1]);
	
	if ((date_debut <= dt) && (dt <= date_fin)) {
		datetime.push(dt);
		conso.push(row["conso"]);
		}
  }
  makePlotly_load_curve(datetime, conso);
};




function makePlotly_load_curve(datetime, conso){

  var traces = [{
	type: 'scatter',
    x: datetime,
    y: conso,
	marker: {
		color: 'rgb(102,0,51)',
		width: 0
		}
  }];
   var layout = {			
			height: 150,
			  margin: {
			l: 50,
			r: 10,
			b: 40,
			t: 10,
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
  Plotly.newPlot('CDC', traces,layout,config);
};
