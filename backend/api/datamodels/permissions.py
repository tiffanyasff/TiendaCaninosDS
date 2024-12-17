from django.db import models
import uuid

class PermissionManager(models.Manager):
    def create_permission(self, rolname, modules):
        permission = self.model(
            rolname = rolname,
            modules = modules
        )
        permission.save()
        return permission

class PermissionModel(models.Model):
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    rolname = models.CharField(max_length=100, unique=True)
    modules = models.TextField()
    objects = PermissionManager()

    class Meta:
        ordering = ['rolname']
        db_table = 'permissions'