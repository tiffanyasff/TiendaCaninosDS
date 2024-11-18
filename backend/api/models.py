from django.db import models
from django.contrib.auth.models import AbstractUser

# class Usuario(models.Model):
#     nombre = models.CharField(max_length=100)
#     correo = models.EmailField(unique=True)
#     password = models.CharField(max_length=100)
#     telefono = models.CharField(max_length=15, blank=True, null=True)
#     direccion = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.nombre
    

class Usuario(AbstractUser):
    # Campos adicionales

    nombre = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15, blank=True, null=True)
    direccion = models.TextField(blank=True, null=True)
    

    # Campos para autenticación
    REQUIRED_FIELDS = ['nombre']  # Campos adicionales requeridos para el superusuario
    USERNAME_FIELD = 'username'  # El campo utilizado para la autenticación

    def __str__(self) -> str:
        return f"{self.username} - {self.nombre}"
    
    def getNombreCompleto(self):
        return f"{self.nombre} {self.apellido}"
