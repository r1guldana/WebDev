from django.http import HttpResponse
from django.contrib import admin
from django.urls import include, path
from api.views import *
def home(request):
    return HttpResponse("Welcome to the Online Store!")
    

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    #path('products/', ProductListAPIView.as_view()),
    #path('products/<int:product_id>/', ProductDetailAPIView.as_view()),

    ##path('categories/', CategoryListAPIView.as_view()),
    #path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    #path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]
