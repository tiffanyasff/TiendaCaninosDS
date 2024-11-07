from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Usuario
# Create your views here.

def menu(request):
    return HttpResponse("este es el menu")

@api_view(['POST'])
def crear_usuario(request):
    data = request.data
    usuario = Usuario.objects.create(
        nombre=data['nombre'],
        correo=data['correo'],
        password=data['password'],
        telefono=data.get('telefono', ''),
        direccion=data.get('direccion', ''),
    )
    return JsonResponse({'message': 'Usuario creado exitosamente'})