 $( function () {
 
 
 
				$('#info_bulle_1').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Curseur permettant de modifier le taux d Enr d un pays</span>',
                placement: 'bottom',
                html: true
				});

				$('#info_bulle_2').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Evalue la courbe de prix des pays concernés</span>',
                placement: 'right',
                html: true
				});

				$('#info_bulle_3').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Affiche la part d import/export comparé à la production totale des différents pays</span>',
                placement: 'right',
                html: true
				});

				$('#info_bulle_4').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Curseur permettant de modifier les capacités d interconnexion des pays</span>',
                placement: 'bottom',
                html: true
				});

				$('#info_bulle_5').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Affiche les capacités d Enr de la zone</span>',
                placement: 'right',
                html: true
				});

				$('#info_bulle_6').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Affiche les taux d echange entre les pays</span>',
                placement: 'right',
                html: true
				});
				
				
				$("#advance_slide").slider({
					range:true,
					min: new Date("January 1, 2015 01:00:00").getTime() / 1000,
					max: new Date("January 9, 2015 00:00:00").getTime() / 1000,
					values:[new Date("January 1, 2015 00:00:00").getTime() / 1000, new Date("January 8, 2015 23:30:00").getTime() / 1000],
					step:1800,
					change:function(event, ui){
					  $( "#state" ).html( (new Date(ui.values[ 0 ]*1000).toUTCString() ) + " - " + (new Date(ui.values[ 1 ] *1000)).toUTCString() );
					  $("#date_debut").val(new Date(ui.values[ 0 ] *1000).toUTCString());
					  $("#date_debut").html(new Date(ui.values[ 0 ] *1000).toUTCString());
					  $("#date_fin").val(new Date(ui.values[ 1 ] * 1000).toUTCString());
					  $("#date_fin").html(new Date(ui.values[ 1 ] * 1000).toUTCString());
					var date_debut = $("#date_debut").val();
					console.log(date_debut);
					}
					
				  });
				 $( "#state").html( "Thu, 01 Jan 2015 00:00:00 GMT - Thu, 08 Jan 2015 23:30:00 GMT");
				 
				 $("#date_debut").val("Thu, 01 Jan 2015 00:00:00 GMT");
				 $("#date_fin").val("Thu, 08 Jan 2015 23:30:00 GMT");
				  
				 $("#date_debut").html("Thu, 01 Jan 2015 00:00:00 GMT");
				 $("#date_fin").html("Thu, 08 Jan 2015 23:30:00 GMT");
				
				
				
                $("#mytaux1").slider({
				    id: "slider_taux1",
                    min:0,
                    max: 100,
                    value:0,
                    step:10,
					change:function(event, ui){
						ajax(ui.value);
					},
					
					slide:function(event, ui){
					$("#valeur_mytaux1").html(ui.value)

					
					}
					
				
     
                });
                $("#valeur_mytaux1").html(0)	;
				
				
                $("#mytaux2").slider({
					id: "slider_taux2",
                    min:0,
                    max: 100,
                    value:0,
                    step:10
                });
				
                 $("#mytaux3").slider({
					id: "slider_taux3",
                    min:0,
                    max: 100,
                    value:0,
                    step:10
                });
            

                $("#myNTC1").slider({
					id: "slider_NTC1",
                    min:0,
                    max: 200,
                    value:0,
                    step:5
                });
            
                $("#myNTC2").slider({
					id: "slider_NTC2",
                    min:0,
                    max: 200,
                    value:0,
                    step:5
                });
				
                 $("#myNTC3").slider({
					id: "slider_NTC3",
                    min:0,
                    max: 200,
                    value:0,
                    step:5
                });

				$("#Select_pays").change(function(e){
				$("#choix_pays").val($(e.target).val());
				$("#choix_pays").html($(e.target).val());
				ajax2($("#choix_pays").val(),$("#date_debut").val(),$("#date_fin").val())
				});
				
});
