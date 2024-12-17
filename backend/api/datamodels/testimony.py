from django.db import models
import uuid

class Testimony(models.Model):
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    observation = models.CharField(null=False, blank=False)
    salesguidbackend = models.CharField(max_length=36)
    userguidbackend = models.CharField(max_length=36)
    canineguidbackend = models.CharField(max_length=36)
    datecreated = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['datecreated']
        db_table = 'testimony'