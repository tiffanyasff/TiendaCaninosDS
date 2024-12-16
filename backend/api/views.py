from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from .models import Usuario
from rest_framework.response import Response
from rest_framework import status
from .serializers import UsuarioSerializer 
from django.contrib.auth import authenticate
# Create your views here.
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import ValidationError




def menu(request):
    return HttpResponse("este es el menu")

@api_view(['POST'])
def crear_usuario(request):
    data = request.data
    usuario = Usuario.objects.create(
        nombre=data['nombre'],
        correo=data['correo'],
        username = data['username'],
        # password=data['password'],
        telefono=data.get('telefono', ''),
        direccion=data.get('direccion', ''),
        is_active = True
    )
    usuario.set_password(data['password'])
    usuario.save()
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
        print('usuario no encontrado')
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
        usuario.username = data.get('username', usuario.username)
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
    

# Endpoint para el login
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)
    
    if user:
        # Si el usuario existe y las credenciales son correctas, generamos el token
        
        refresh = RefreshToken.for_user(user)
        return Response({
            'access': str(refresh.access_token),  # Token de acceso
            'refresh': str(refresh),  # Token de refresco
        }, status=status.HTTP_200_OK)
    else:
        return Response({'detail': 'Credenciales incorrectas'}, status=status.HTTP_401_UNAUTHORIZED)
    

@api_view(['GET'])
@permission_classes([AllowAny])
def obtener_usuario_logueado(request):
    user = request.user  # Usuario autenticado
    return Response({
        "id": request.user.id,
        'username': user.username,
        'nombre': user.nombre,
        'correo': user.correo,
        'telefono': user.telefono,
        'direccion': user.direccion,
    })