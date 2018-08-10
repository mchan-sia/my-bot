from django.db import models


class TAUX_ENR(models.Model):
    pays = models.CharField(max_length=200,verbose_name ='pays',default='',primary_key=True)
    taux = models.IntegerField (verbose_name ='taux', default=0)
    
    
    def __str__(self):
        return self.pays
