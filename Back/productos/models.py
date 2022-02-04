from distutils.command.upload import upload
from django.db import models


# Create your models here.

class producto(models.Model):

    codigo = models.CharField(unique=True,primary_key=True, max_length = 255)
    nombre = models.CharField(max_length = 255)
    descripcion = models.CharField(max_length = 255)

class imagenProductos(models.Model):

    imagen = models.ImageField(upload_to="images")
    producto = models.ForeignKey(producto, on_delete=models.CASCADE)