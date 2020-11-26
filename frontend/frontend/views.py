from django.shortcuts import render

# Create your views here.


def index(request, path=''):
    
    apps = [
        {
         'name': 'SurfApp',
        },
        {
          'name': ''
        },
        {
            'name':'RecipeApp',
        },
        {
            'name': 'TicTacToe'
        },
        {
            'name':'ArticlesApp'
        }
    ]
    for app in apps:
        if path == app['name']:
            return render(request, 'frontend/index.html')

    return render(request, 'frontend/404.html')