from django.db import models
import uuid

class Sales(models.Model):
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    code = models.CharField(unique=True, max_length=5)
    userguidbackend = models.CharField(max_length=36)
    canineguidbackend = models.CharField(max_length=36)
    inventoryguidbackend = models.CharField(max_length=36)
    price = models.FloatField(default=0)
    status = models.BooleanField(null=False, default=False)
    observation = models.CharField(null=True, blank=True)
    datesale = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['code']
        db_table = 'sales'