from django.db import models
import uuid

class Buy(models.Model):
    guidbackend = models.CharField(primary_key=True, unique=True, default=uuid.uuid4, max_length=36)
    userguidbackend = models.CharField(max_length=36)
    canineguidbackend = models.CharField(max_length=36)
    price = models.FloatField(default=0)
    paymenttype = models.IntegerField(default=1)
    datebuy = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['datebuy']
        db_table = 'buy'