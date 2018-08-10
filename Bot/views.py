#from django.shortcuts import render
#from django.views.generic import TemplateView

# Create your views here.
#class HomePageView(TemplateView):
#    def get(self, request, **kwargs):
#        return render(request, 'index2.html', context=None)


#from django.views.generic import TemplateView
#from . import plots


#class Plot1DView(TemplateView):
 #   template_name = "plot.html"
#
 #   def get_context_data(self, **kwargs):
       # Call the base implementation first to get a context
#        context = super(Plot1DView, self).get_context_data(**kwargs)
 #   
 #       plot_div = plots.plot1d()
 #       
 #       context['plot'] =plot_div
 #             
 #       return context



from . import plots
from .models import TAUX_ENR

from django.shortcuts import render
from .form import EnrForm
  
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


def MyAjaxView(request):
    if request.is_ajax():
         if request.method == 'GET':
             # If it was a GET
             print (request.GET)
         elif request.method == 'POST':
             # Here we can access the POST data
             print (request.POST)
    else:
         doSomeOtherStuff()
    return render_to_response('mytemplate.html', some_context_maybe, context_instance=RequestContext(request))