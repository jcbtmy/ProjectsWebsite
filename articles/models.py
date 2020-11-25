from django.db import models


# Create your models here.


class Article(models.Model):

    url = models.URLField()
    category = models.CharField(max_length=8)
    site = models.CharField(max_length=100)
    created = models.DateField(auto_now_add=True)
    title = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.name