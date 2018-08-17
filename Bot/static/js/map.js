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
          }];

  var layout = {
          title: 'Exemple carte europe',
          geo: {
			scope: 'europe',
            projection: {
              type: 'robinson'
            }
          }
      };
      Plotly.plot(myDiv_map, data, layout, {showLink: false});
  });
