from django.db import models
from distutils.command.upload import upload

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=1000)
    url = models.CharField(max_length=255)
    url_id = models.CharField(max_length=100)
    img = models.ImageField(upload_to='product')

    def __str__(self):
        return self.name

class DotProduct(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=1000)
    url = models.CharField(max_length=255)
    url_id = models.CharField(max_length=100)
    img = models.ImageField(upload_to='dot_product')

    def __str__(self):
        return self.name

class ToolProduct(models.Model):
    name = models.CharField(max_length=50)
    desc = models.CharField(max_length=1000)
    url = models.CharField(max_length=255)
    url_id = models.CharField(max_length=100)
    img = models.ImageField(upload_to='tool_product')

    def __str__(self):
        return self.name