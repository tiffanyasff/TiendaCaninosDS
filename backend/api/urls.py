from django.urls import path
from .views import *
from . import views

urlpatterns = [
   path('', menu),
   path('api/obtener_usuarios/', views.obtener_usuarios, name='obtener_usuarios'),
   path('api/editar-usuario/<int:id>/', views.actualizar_usuario, name='editar-usuario'),
   path('api/borrar-usuario/<int:id>/', views.borrar_usuario, name='borrar_usuario'),
   #path('api/login/', views.login, name='login'),
   path('api/obtener_usuario_logueado/', views.obtener_usuario_logueado, name='obtener_usuario_logueado'),
]


