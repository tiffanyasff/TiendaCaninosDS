from api.viewsset.globalImport import status, Response

from django.utils import timezone
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from django.contrib.auth import authenticate

from api.models import Usuario
from api.serializers.userserializers import UsuarioSerializer
from rest_framework_simplejwt.tokens import RefreshToken

import binascii
import os


class Login(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        username = request.data.get('username', '')
        password = request.data.get('password', '')

        if username and password:
            user = authenticate(
                username=username,
                password=password
            )
            if user:
                if user.is_active:
                    if user.token is None:
                        #refresh = RefreshToken.for_user(user)
                        user.token = self.generate_token()
                        #user.refresh = str(refresh)
                        user.token_created = timezone.now()
                        user.save()
                    response = UsuarioSerializer(user, many=False)
                    return Response({
                        'access': str(user.token),  # Token de acceso
                        #'refresh': str(user.refresh),  # Token de refresco
                        'user': response.data,
                    }, status = status.HTTP_200_OK)
                return Response({'message':'Usuario se encuentra activado'}, status= status.HTTP_401_UNAUTHORIZED)
            return Response({'detail':'Credenciales incorrectas'}, status= status.HTTP_401_UNAUTHORIZED)
        return Response({'message':'Usuario o Contraseña incorrectos'}, status= status.HTTP_401_UNAUTHORIZED)
    
    def generate_token(self):
        return binascii.hexlify(os.urandom(20)).decode()


class Logout(APIView):

    def post(self, request, *args, **kwargs):
        body = request.data
        if body is not None and 'guidbackend' in body:
            guidFilter = body['guidbackend']
            user = Usuario.objects.filter(guidbackend=guidFilter).first()
            if user is not None:
                user.token = None
                user.refresh = None
                user.token_created = None
                user.save()
                return Response({'message':'Sesión finalizada'}, status= status.HTTP_200_OK)
            return Response({'message':'Usuario no encontrado'}, status= status.HTTP_400_BAD_REQUEST)
        return Response({'message':'GuidBackend usuario es requerido'}, status= status.HTTP_400_BAD_REQUEST)