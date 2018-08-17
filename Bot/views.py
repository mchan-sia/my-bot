from . import plots
from .models import TAUX_ENR

from django.shortcuts import render
from .form import EnrForm
from django.http import HttpResponse 



def Enr_list(request):
       
       map_div = plots.plotmap()
       Enr = TAUX_ENR.objects.filter(pays='France')
       donnees_taux=TAUX_ENR.objects.get(pays='France')
       taux= donnees_taux.taux
       plot_div = plots.plot1d(taux)
       context={}  
       
       context['CDC'] = plot_div
       context['MAP'] = map_div
       context['ENR'] = Enr
       context['TAUX']= taux
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
        
        
        TAUX_ENR.objects.filter(pays=mypays).delete()     
        TAUX_ENR.objects.create(
            pays = mypays,
            taux = int(mytaux)
            )        
    return HttpResponse('')

def base(request):
    template="base.html"
    return render(request,template)
