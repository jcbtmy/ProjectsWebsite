from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, status
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.response import Response


import os
import pickle
import sklearn
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse


# Create your views here.

class ArticleViewSet(viewsets.ViewSet):

    queryset = Article.objects.all()
    http_method_names = ['get','head', 'post', 'delete']


    def list(self, request):
        qs = Article.objects.all()
        serializer = ArticleSerializer(qs, many=True)
        return Response(serializer.data)

    def create(self, request):

        data = request.data
        check_exists = Article.objects.filter(url=data['url'])
        site = urlparse(data['url'])

        if not bool(site.scheme):
            return Response(status=400)

        if len(check_exists):
            serialized = ArticleSerializer(check_exists.first(), many=False)
            return Response(serialized.data, status=201)

        try:
            resp = requests.get(data['url'])
            resp.raise_for_status()
        except requests.exceptions.HTTPError as e:
            return Response(status=404)

        soup = BeautifulSoup(resp.content, 'html.parser')
        news_title = soup.find('title').get_text()
        paragraphs = soup.find_all("p")
        description = news_title
        for paragraph in paragraphs:
            description += " " + paragraph.get_text()

        module_dir = os.path.dirname(__file__)  # get current directory
        file_path = os.path.join(module_dir, 'models/model.p')
        
        nlp_model = pickle.load(open(file_path, "rb"))
        
        result = nlp_model.predict(description.split(" "))
        targets = { 1: 'World', 2:'Sports', 3:'Business', 4:'Sci/Tech'}
        counts = { 'World' : 0 , 'Sports' : 0 , 'Business':0, 'Sci/Tech':0}

        for label in result:
            counts[targets[label]] += 1

        best_match = max(counts, key=counts.get)
        
        data['category'] = best_match
        data['site'] = site.netloc
        data['title'] = news_title
       
        serializer = ArticleSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, pk=None):
        article = get_object_or_404(Article, pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)