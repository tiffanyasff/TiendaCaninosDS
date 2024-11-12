from django.urls import path
from .views import *
from . import views

urlpatterns = [
   path('', menu),
   path('api/crear-usuario/', crear_usuario, name='crear_usuario'),
   path('api/obtener_usuarios/', views.obtener_usuarios, name='obtener_usuarios'),
   path('api/editar-usuario/<int:id>/', views.actualizar_usuario, name='editar-usuario'),
   path('api/borrar-usuario/<int:id>/', views.borrar_usuario, name='borrar_usuario'),

]


