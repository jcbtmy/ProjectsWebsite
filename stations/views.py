from django.shortcuts import render

from rest_framework import viewsets

from .serializers import StationSerializer
from .models import Station

class StationViewSet(viewsets.ModelViewSet):

    
    serializer_class = StationSerializer
    queryset = Station.objects.all().order_by('name')
    http_method_names = ['get','head']

# Create your views here.
