from api.viewsset.globalImport import viewsets, status, action, Response
from api.models import Usuario
from api.serializers.userserializers import UsuarioSerializer 
from api.authentication.getuserbytoken import Authentication

class UserViewSet(viewsets.GenericViewSet):
    model = Usuario
    serializer_class = UsuarioSerializer
    lookup_field = 'guid'

    # Crear Usuarios
    @action(methods=['post'], detail=False, url_path='create')
    def PostCreateUser(self, request):
        user = UsuarioSerializer(data=request.data)
        if user.is_valid():
            if not self.model.objects.filter(email=request.data['email']).exists():
                user.save()
                return Response({'message':'Usuario creado exitosamente'}, status=status.HTTP_200_OK)
            return Response({'message':'El usuario ya se encuentra creado.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message':user.errors}, status=status.HTTP_400_BAD_REQUEST)
    
    # Listar usuarios y uno en especifico por token
    @action(methods=['post','get'], detail=False, url_path='list')
    def GetAllUsersOrOne(self, request):
        if(request.method == 'GET'):
            token = request.headers["Authorization"]
            token = token.replace("Bearer ", "")
            user = Authentication.getUser(token)
            if user is not None:
                response = self.serializer_class(user, many=False)
                return Response(response.data, status=status.HTTP_200_OK)
            return Response({'message':'No se encontro el usuario'}, status=status.HTTP_204_NO_CONTENT)
        users = self.model.objects.all()
        response = self.serializer_class(users, many=True)
        return Response(response.data, status=status.HTTP_200_OK)
    
    @action(methods=['get'], detail=True, url_path='get')
    def GetOneUser(self, request, guid = None):
        user = self.model.objects.filter(guidbackend=guid).first()
        if user is not None:
            response = self.serializer_class(user, many=False)
            return Response(response.data, status=status.HTTP_200_OK)
        return Response({'message':'usuario no encontrado'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Actualizar Usuario
    @action(methods=['put'], detail=True, url_path='update')
    def UpdateUser(self, request, guid = None):
        user = self.model.objects.filter(guidbackend=guid).first()
        if user is not None:
            userUpdate = UsuarioSerializer(user, data=request.data)
            if userUpdate.is_valid():
                userUpdate.save()
                return Response({'message': 'Usuario actualizado exitosamente'}, status=status.HTTP_200_OK)
            return Response({'message':userUpdate.errors}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message':'usuario no encontrado'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Eliminar Usuario
    @action(methods=['delete'], detail=True, url_path='delete')
    def DeleteUser(self, request, guid = None):
        user = self.model.objects.filter(guidbackend=guid).first()
        if user is not None:
            user.delete()
            return Response({'message': 'Usuario borrado exitosamente'}, status=status.HTTP_204_NO_CONTENT)
        return Response({'message':'usuario no encontrado'}, status=status.HTTP_400_BAD_REQUEST)
    
    