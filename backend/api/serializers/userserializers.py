from rest_framework import serializers
from api.models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    
    first_name = serializers.CharField(source='nombre')
    last_name = serializers.Email(source='correo')

    class Meta:
        model = Usuario
        fields = '__all__'
    
    def create(self, validated_data):
        user = Usuario(**validated_data)
        user.set_password(validated_data['password'])
        return user
    
    def update(self, instance, validated_data):
        user = super().update(instance, validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class UserTokenResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('guidbackend', 'username')

class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='nombre')
    last_name = serializers.CharField(source='apellido')

    class Meta:
        model = Usuario
        fields = ('first_name', 'last_name')