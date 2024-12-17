from django.db import models
import uuid

class Inventory(models.Model):
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    userguidbackend = models.CharField(max_length=36)
    name = models.TextField()
    datecreated = models.DateTimeField(auto_now_add=True)
    lastmodified = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']
        db_table = 'inventory'