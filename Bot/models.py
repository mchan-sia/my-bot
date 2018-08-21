from django.db import models


class TAUX_ENR(models.Model):
    pays = models.CharField(max_length=200,verbose_name ='pays',default='',primary_key=True)
    taux = models.IntegerField (verbose_name ='taux', default=0)
    
    
    def __str__(self):
        return self.pays


class OPTIM_ENR(models.Model):
    pays = models.CharField(max_length=200,verbose_name ='pays',default='',primary_key=True)
    optim = models.DecimalField (verbose_name ='optim', default=0,max_digits=10,decimal_places=5)
      
      
    def __str__(self):
        return self.pays

