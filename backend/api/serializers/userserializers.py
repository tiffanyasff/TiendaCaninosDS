from rest_framework import serializers
from api.models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
    
    def create(self, validated_data):
        user = Usuario(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
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