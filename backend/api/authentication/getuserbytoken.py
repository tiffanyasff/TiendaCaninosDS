from api.models import Usuario
from api.serializers.userserializers import UsuarioSerializer 

class Authentication():

    def getUser(token):
        if token is not None:
            user = Usuario.objects.filter(token=token).first()
            if user is not None:
                response = UsuarioSerializer(user, many=False)
                return response.data
            return None
        return None