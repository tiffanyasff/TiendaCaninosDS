from django.urls import path
from .views import *
from . import views




urlpatterns = [
   path('', menu),
   path('api/crear-usuario/', crear_usuario, name='crear_usuario'),
   #path('api/obtener-usuario/', obtener_usuarios, name='obtener_usuarios'),
    path('api/obtener_usuarios/', views.obtener_usuarios, name='obtener_usuarios'),

]


