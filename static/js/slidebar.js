$(document.on('submit',#new_Enr_form),function(e){
		e.preventDefault();
	
        $.ajax({
             url: '/plot2/',
             type: 'POST',
			 data: {
				mypays:$('#mypays').val(),
				mytaux:$('#mytaux').val()
				csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
			 }
             success: function(){}
				alert("Create new User")
         });
     });
});