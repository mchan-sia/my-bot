
from .models import TAUX_ENR, OPTIM_ENR,NTC_ENR

from django.shortcuts import render
from .form import EnrForm
from django.http import HttpResponse,JsonResponse 



from . import verre_pulp_django



# Page principale

def Enr_list(request):

       donnees_taux=TAUX_ENR.objects.get(pays='France')
       taux= donnees_taux.taux

       val_optim=verre_pulp_django.OPTIM(taux)
       context={}  
       
       context['OPTIM'] = val_optim
       return render(request, 'plot.html',context)    




# Test pour formulaire

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
        
# Changement des taux d'ENR
        
        mypays1 = 'France'
        mytaux1 = request.POST['mytaux1']
        TAUX_ENR.objects.filter(pays=mypays1).update(
        taux = int(mytaux1))     

            
    #     mypays2 = 'Allemagne'
    #     mytaux2 = request.POST['mytaux2']
    #    TAUX_ENR.objects.filter(pays=mypays2).update(
    #             taux = int(mytaux2))     


   #     mypays3 = 'Belgique'
   #      mytaux3 = request.POST['mytaux3']
   #     TAUX_ENR.objects.filter(pays=mypays3).update(
   #     taux = int(mytaux3))     


# Changement des NTC

    #    Import_Export1 = 'FR<>BEL'
    #    myNTC1 = request.POST['myNTC1']
     #   NTC_ENR.objects.filter(Import_Export=Import_Export1).update(
    #    NTC = int(myNTC1))     

            
    #    Import_Export2 = 'FR<>ALL'
    #    myNTC2 = request.POST['myNTC2']
    #    NTC_ENR.objects.filter(Import_Export=Import_Export2).update(
     #            NTC = int(myNTC2))     


    #    Import_Export3 = 'ALL<>BEL' 
    #    myNTC3 = request.POST['myNTC3']
    #    NTC_ENR.objects.filter(Import_Export=Import_Export3).update(
     #       NTC = int(myNTC3))     
            
# Changement des fichiers d'optimisation    
        OPTIM_ENR.objects.filter(pays=mypays1).update(
            optim = verre_pulp_django.OPTIM(int(mytaux1))
            )  
            
            
        object_optim=OPTIM_ENR.objects.get(pays=mypays1)
               
        data_optim = {
            'optimum': object_optim.optim
            }       
           
    return JsonResponse(data_optim)

def change_pays(request):
    if request.method == "POST":

        choix_pays_0 = request.POST['choix_pays_0']

        data_optim2 = {
            'optimum2': choix_pays_0
            }       
           
    return JsonResponse(data_optim2)
# Test template

def base(request):
    template="base.html"
    return render(request,template)

def plot_Prix(request):
    template="plot_Prix.html"
    return render(request,template)