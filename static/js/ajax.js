function ajax(mytaux1) {
      var text_mytaux1 = mytaux1.toString(); 
	var file_exchange = "{{ MEDIA_URL }}/data/countries_" + text_mytaux1 + ".csv"
	$.ajax({
		url: "/plot2/",
		method: "POST",
		data: {
			mytaux1: mytaux1,
			mytaux2: $('#mytaux2').val(),
			mytaux3: $('#mytaux3').val(),
			myNTC1: $('#myNTC1').val(),
			myNTC2: $('#myNTC2').val(),
			myNTC3: $('#myNTC3').val(),
			'csrfmiddlewaretoken': "{{ csrf_token }}"
		},
		dataType: "json",
		success: function(data_optim) { 
		       alert(mytaux1)
			//  alert(file_exchange)
			makeplot_countries(file_exchange);
		}
	});
};