from django.db import models
import uuid

class Canine(models.Model):
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    inventoryguidbackend = models.CharField(max_length=36)
    race = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    size = models.FloatField(null=True)
    age = models.IntegerField(null=True)
    price = models.FloatField(default=0)
    urlimage = models.TextField(null=True, blank=True)
    observation = models.CharField(null=True, blank=True)
    datebirth = models.DateTimeField(auto_now_add=True)
    datecreated = models.DateTimeField(auto_now_add=True)
    lastmodified = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['price','datebirth']
        db_table = 'canine'