from django.db import models

class Contacto(models.Model):
    # Campos del modelo
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    mensaje = models.TextField()
    # Otros campos que necesites

    def __str__(self):
        return self.nombre
