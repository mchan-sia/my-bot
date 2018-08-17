function ajax(event){
        var new_taux=$('#mytaux').val()
	  event.preventDefault();
        $.ajax({
             url: "/plot2/",
             method: "POST",
			 data: {
				mypays:$('#mypays').val(),
				mytaux:$('#mytaux').val(),

                       'csrfmiddlewaretoken':"{{ csrf_token }}"
				
			 },
             success : function(data)
    {   alert("Create new User 1")
        makeplot();
       
        }
		 
     });

function makeplot() {
 var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, new_taux, 12],
  mode: 'lines+markers',
  type: 'scatter'
};

var data = [trace3];

Plotly.newPlot('myDiv', data);
};
};