from django.urls import path
from . import views
urlpatterns = [

   path('api/crear-usuario/', views.crear_usuario, name='crear_usuario'),
]