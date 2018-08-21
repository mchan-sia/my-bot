
from .models import TAUX_ENR, OPTIM_ENR

from django.shortcuts import render
from .form import EnrForm
from django.http import HttpResponse,JsonResponse 

from . import verre_pulp_django

def Enr_list(request):

       donnees_taux=TAUX_ENR.objects.get(pays='France')
       taux= donnees_taux.taux

       val_optim=verre_pulp_django.OPTIM(int(taux))
       context={}  
       
       context['OPTIM'] = val_optim
       return render(request, 'plot.html',context)    


def Enr_new(request):

    if request.method == "POST":
       form = EnrForm(request.POST)
       TAUX_ENR.objects.filter(pays='France').delete()     
       
       if form.is_valid():
          form.save()

          return render(request, 'plot.html', {'form': form})

    else:
        form = EnrForm()    
    return render(request, 'Enr.html', {'form': form})


def change_taux(request):
    if request.method == "POST":
        mypays = 'France'
        mytaux = request.POST['mytaux']
        
        OPTIM_ENR.objects.filter(pays=mypays).delete()     
        object_optim=OPTIM_ENR.objects.create(
            pays = mypays,
            optim = verre_pulp_django.OPTIM(int(mytaux))
            )        
        
        
        TAUX_ENR.objects.filter(pays=mypays).delete()     
        TAUX_ENR.objects.create(
            pays = mypays,
            taux = int(mytaux)
            )
            
        data = {
            'optim': object_optim.optim
            }       
            
    return JsonResponse(data)

def base(request):
    template="base.html"
    return render(request,template)
