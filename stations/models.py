from django.db import models

# Create your models here.

class Station(models.Model):
    name = models.CharField(max_length=100)
    station_id = models.CharField(max_length=16)
    lat = models.FloatField()
    lon = models.FloatField()

    def __str__(self):
        return self.name