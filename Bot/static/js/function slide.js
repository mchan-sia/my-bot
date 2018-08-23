function(){
  $("#slider").slider({
      value:100,
      min:100,
      max:500,
      step:10,
      slide:function(event, ui){
        $("#amount").val("Tk. "+ui.value)
      }
  });
  $("#amount").val("Tk."+$("#slider").slider("value"));
}