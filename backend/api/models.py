from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, AbstractUser
import uuid

class UserManager(BaseUserManager):
    def create_userRegister(self, username, name, email, cellphone, address, password):
        if email is None:
            raise ValueError('email requerido!')
        
        user = self.model(
            username = username,
            email = self.normalize_email(email),
            first_name = name,
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


class Usuario(AbstractBaseUser):
    # Campos adicionales
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    username = models.CharField(max_length=150,unique=True)
    email = models.EmailField(blank=False, null=False, unique=True)
    first_name = models.CharField(max_length=150, blank=True)
    cellphone = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    objects = UserManager()
    last_login = models.DateField(blank=True, null=True)

    token = models.TextField(null=True)
    refrest = models.TextField(null=True)

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]

    def has_perm(self, perm, obj = None):
        return True
    
    def has_module_perms(self, app_label):
        return True

    def __str__(self) -> str:
        return f"{self.username} - {self.first_name}"
    
    @property
    def is_staff(self):
        return True
    
    class Meta:
        ordering = ['username']
        db_table = 'usuario'