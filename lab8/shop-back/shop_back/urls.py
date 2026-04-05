from django.http import HttpResponse
from django.contrib import admin
from django.urls import include, path

def home(request):
    return HttpResponse("Welcome to the Online Store!")
    

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
