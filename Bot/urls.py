# howdy/urls.py
# from django.conf.urls import url
#from Bot import views
# urlpatterns = [
#    url(r'^$', views.HomePageView.as_view()),
# ]


from django.conf.urls import url

from Bot import views


urlpatterns = [
    url(r'^$', views.Enr_list),

]