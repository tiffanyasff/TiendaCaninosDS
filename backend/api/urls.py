from django.urls import path
from .views import *
urlpatterns = [
   path('', menu),
   path('api/crear-usuario/', crear_usuario, name='crear_usuario'),
]