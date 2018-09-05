 $( function () {
 
 
 
				$('#info_bulle_1').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Curseur permettant de modifier le taux d Enr d un pays</span>',
                placement: 'right',
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
				template:'<div class="tooltip" role="tooltip" style="width:300px"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
					
                html: true
				});

				$('#info_bulle_4').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Curseur permettant de modifier les capacités d interconnexion des pays</span>',
                placement: 'right',
                html: true
				});

				$('#info_bulle_5').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Affiche les capacités d Enr de la zone</span>',
                placement: 'right',
                html: true,
				
				});

				$('#info_bulle_6').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Affiche les taux d echange entre les pays</span>',
                placement: 'right',
				template:'<div class="tooltip" role="tooltip" style="width:300px"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                html: true,

				 
				});
				
				
				$("#advance_slide").slider({

					range:true,
					min: new Date("January 1, 2015 01:00:00").getTime() ,
					max: new Date("January 9, 2015 00:30:00").getTime(),
					values:[new Date("January 1, 2015 00:00:00").getTime() , new Date("January 8, 2015 23:30:00").getTime() ],
					step:1800000,
					change:function(event, ui){
					  $( "#state" ).html( (new Date(ui.values[ 0 ]).toUTCString() ) + " - " + (new Date(ui.values[ 1 ] )).toUTCString() );
					  $("#date_debut").val(new Date(ui.values[ 0 ] ));
					  $("#date_debut").html(new Date(ui.values[ 0 ]).toUTCString());
					  $("#date_fin").val(new Date(ui.values[ 1 ]));
					  $("#date_fin").html(new Date(ui.values[ 1 ]).toUTCString());
					var date_debut = $("#date_debut").val();
					ajax2($("#choix_pays").val(),$("#date_debut").val(),$("#date_fin").val())
					console.log(date_debut);
					}
					
				  });
				 $( "#state").html( "Thu, 01 Jan 2015 00:00:00 GMT - Thu, 08 Jan 2015 23:30:00 GMT");
				 
				 $("#date_debut").val(new Date("January 1, 2015 01:00:00"));
				 
				 $("#date_fin").val(new Date("January 8, 2015 23:30:00"));
				  
				 $("#date_debut").html("Thu, 01 Jan 2015 00:00:00 GMT");
				 $("#date_fin").html("Thu, 08 Jan 2015 23:30:00 GMT");
				
				
				
                $("#mytaux1").slider({
				    id: "slider_taux1",
                    min:0,
                    max: 100,
                    value:0,
                    step:10,
					
					create: function() {
					$( "#custom-handle_taux1" ).text( $( this ).slider( "value" ) );
					},
					change:function(event, ui){
						ajax(ui.value,$("#valeur_myNTC1").val());
					},
					
					slide:function(event, ui){
					$( "#custom-handle_taux1" ).text( ui.value )
					}
					
				
     
                });
                $("#valeur_mytaux1").html(0)	;
				$("#valeur_mytaux1").val(0)
				
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
                    step:5,
					
					create: function() {
					$( "#custom-handle_NTC1" ).text( $( this ).slider( "value" ) );
					},
					
						change:function(event, ui){
						ajax($("#valeur_mytaux1").val(),ui.value);
					},
					
					slide:function(event, ui){
					$( "#custom-handle_NTC1" ).text( ui.value )
					}
                });
                $("#valeur_myNTC1").val(0)
				$("#valeur_myNTC1").html(0)

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
//plusieurs pays
			//	$("#Select_pays").change(function(e){
			//	$("#choix_pays").val($(e.target).val());
			//	$("#choix_pays").html($(e.target).val());
			//	ajax2($("#choix_pays").val(),$("#date_debut").val(),$("#date_fin").val())
			//	});
			
				$("#Select_pays").change(function(){
				$("#choix_pays").val($("#Select_pays").val());
				
				ajax2($("#choix_pays").val(),$("#date_debut").val(),$("#date_fin").val())
				});
				$("#choix_pays").val("France");
});
