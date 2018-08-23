Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2010_alcohol_consumption_by_country.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }
  console.log(unpack(rows, 'postal'));
 var data = [{
              type: 'choropleth',
              locationmode: 'country names',
              locations: unpack(rows, 'location'),
              z: unpack(rows, 'alcohol'),
              text: unpack(rows, 'location'),
              colorscale: 'Blues',
			  		  
			    colorbar: {
              title: 'Prix €/MWh',
              thickness: 5,
			  ticklen : 2,
			  len : 0.6

          },
		  
          }];

  var layout = {
          geo: {
			scope: 'europe',
            projection: {
              type: 'robinson'
            }
          },
			width: 450,
			height: 250,
			  margin: {
			l: 0,
			r: 50,
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

