function makeplot(new_taux) {
 var trace3 = {
  x: [1, 2, 3, 4],
  y: [0, 25, new_taux, 100],
  mode: 'lines+markers',
  type: 'scatter'
};

var data = [trace3];

var layout = {
  autosize: false,
  width: 450,
  height: 350,
  xaxis: {

	autorange: true,
    tick0: 0,
    dtick: 1



  },
  yaxis: {

	autorange: true,
    tick0: 0,
    dtick: 20



  },
margin: {
    l: 50,
    r: 50,
    b: 50,
    t: 20,
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

Plotly.newPlot('CDC', data, layout,config,{showLink: false});
}