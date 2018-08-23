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
                title: '<span class="info_text" style="font-size:13px;">Affiche les taux de saturation des différents pays</span>',
                placement: 'right',
                html: true
				});

				$('#info_bulle_4').tooltip({
                title: '<span class="info_text" style="font-size:13px;">Curseur permettant de modifier les capacités d interconnexion des pays</span>',
                placement: 'bottom',
                html: true
				});

				
				
                $("#mytaux1").slider({
				    id: "slider_taux1",
                    min:0,
                    max: 100,
                    value:5,
                    step:5
                });
            
                $("#mytaux2").slider({
					id: "slider_taux2",
                    min:0,
                    max: 100,
                    value:5,
                    step:5
                });
				
                 $("#mytaux3").slider({
					id: "slider_taux3",
                    min:0,
                    max: 100,
                    value:5,
                    step:5
                });
            

                $("#myNTC1").slider({
					id: "slider_NTC1",
                    min:0,
                    max: 200,
                    value:10,
                    step:5
                });
            
                $("#myNTC2").slider({
					id: "slider_NTC2",
                    min:0,
                    max: 200,
                    value:10,
                    step:5
                });
				
                 $("#myNTC3").slider({
					id: "slider_NTC3",
                    min:0,
                    max: 200,
                    value:10,
                    step:5
                });			
			});
