from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
import uuid

class UserManager(BaseUserManager):
    def create_userRegister(self, username, name, email, cellphone, address, password):
        if email is None:
            raise ValueError('email requerido!')
        
        user = self.model(
            username = username,
            email = self.normalize_email(email),
            last_name = name,
            cellphone = cellphone,
            address = address
        )
        if password is not None: user.set_password(password)
        user.save()
        return user

    def create_user(self, email, password = None):
        if email is None:
            raise ValueError('email requerido!')
        
        user = self.model(
            email = self.normalize_email(email),
        )
        if password is not None: user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, password):
        user = self.create_user(
            username = email,
            password=password
        )
        user.is_staff = True
        user.save()
        return user


class Usuario(AbstractUser):
    # Campos adicionales
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    cellphone = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    objects = UserManager()

    # Campo modificado, debe ser requerido y no puede ser null o vacio
    email = models.EmailField(blank=False, null=False, unique=True)
    
    # Campos para autenticación
    REQUIRED_FIELDS = ["email"]
    USERNAME_FIELD = 'username'  # El campo utilizado para la autenticación

    def __str__(self) -> str:
        return f"{self.username} - {self.first_name}"
    
    def getNombreCompleto(self):
        return f"{self.first_name} {self.last_name}"
    
    class Meta:
        ordering = ['username','is_active']
        db_table = 'users'