function makeplot_map(a) {
Plotly.d3.csv(a, function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
  console.log(unpack(rows, 'postal'));
 var data = [{
              type: 'choropleth',
              locationmode: 'country names',
              locations: ["Belgium","France","Germany","Italy","Portugal","Luxembourg","Netherlands",
			  "Spain","United Kingdom"],
              z: unpack(rows, 'alcohol'),

              colorscale: [
                [0,'rgb(226, 189, 199)'],[0.35,'rgb(207, 145, 161)'],
                [0.5,'rgb(188, 104, 126)'], [0.6,'rgb(146, 64, 85)'],
                [0.7,'rgb(101, 45, 60)'],[1,'rgb(40, 18, 24)']],
			  showscale :false	  

		   
		  
		  
          }];

  var layout = {
          geo: {
			scope: 'europe',
            projection: {
              type: 'mollweide',
			  scale : 2
            },
          
			center : {
				lon  :10,
				lat  :48
				},
			
			
			
			},
			width: 330,
			height: 250,
			  margin: {
			l: 10,
			r: 0,
			b: 0,
			t: 0,
			pad: 4
			},
	
  
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
      Plotly.plot(myDiv_map, data, layout,config);
  });

};