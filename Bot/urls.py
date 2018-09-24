# howdy/urls.py
# from django.conf.urls import url
#from Bot import views
# urlpatterns = [
#    url(r'^$', views.HomePageView.as_view()),
# ]


from django.conf.urls import url

from Bot import views


urlpatterns = [
    url(r'^$', views.Enr_list, name='plot'),
    url(r'^Enr/$', views.Enr_new, name='Enr_new'),
    url(r'^plot2/$', views.change_taux, name='change_taux'),
    url(r'^plot3/$', views.change_pays, name='change_pays'),
    url(r'^base/$', views.base, name='plot'),
    url(r'^plot_Prix/$', views.plot_Prix, name='plot_Prix'),
]