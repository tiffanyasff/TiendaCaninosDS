from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
from .models import Usuario
from rest_framework.response import Response
from rest_framework import status
from .serializers import UsuarioSerializer 
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



@api_view(['GET'])
def obtener_usuarios(request):
    usuarios = Usuario.objects.all()
    serializer = UsuarioSerializer(usuarios, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT'])
def actualizar_usuario(request, id):
    try:
        usuario = Usuario.objects.get(id=id)
    except Usuario.DoesNotExist:
        return JsonResponse({'message': 'Usuario no encontrado'}, status=404)

    if request.method == 'GET':
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)

    elif request.method == 'PUT':
        data = request.data
        usuario.nombre = data.get('nombre', usuario.nombre)
        usuario.correo = data.get('correo', usuario.correo)
        usuario.password = data.get('password', usuario.password)
        usuario.telefono = data.get('telefono', usuario.telefono)
        usuario.direccion = data.get('direccion', usuario.direccion)
        usuario.save()

        return JsonResponse({'message': 'Usuario actualizado exitosamente'})
    

@api_view(['GET', 'DELETE'])
def borrar_usuario(request, id):
    try:
        usuario = Usuario.objects.get(id=id)

        if request.method == 'GET':
            serializer = UsuarioSerializer(usuario)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'DELETE':
            usuario.delete()
            return Response({'message': 'Usuario borrado exitosamente'}, status=status.HTTP_204_NO_CONTENT)

    except Usuario.DoesNotExist:
        return Response({'error': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)