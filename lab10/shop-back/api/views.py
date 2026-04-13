from urllib import request

from django.shortcuts import get_object_or_404
from django.http import JsonResponse

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name' ]
    ordering_fields = [ 'name', 'price']  

    def get_queryset(self):
        queryset = Product.objects.all()
        category_id = self.request.query_params.get('category')
        if category_id:
            queryset = queryset.filter(category_id=category_id)


        active = self.request.query_params.get('is_active')
        if active is not None:
            if active.lower() == 'true':
                queryset = queryset.filter(is_active=True)
            elif active.lower() == 'false':
                queryset = queryset.filter(is_active=False) 
        return queryset
    
    @action(detail=False, methods=['get'])
    def active(self, request):
        queryset = self.get_queryset().filter(is_active = True)
        queryset = self.filter_queryset(queryset)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name']
    def get_queryset(self):
        queryset = super().get_queryset()
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(name__icontains=search)
        return queryset
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = category.products.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)



# def product_list(request):
#     products = Product.objects.all()
#     category_id = request.GET.get("category")
#     if category_id: 
#         products = products.filter(category_id=category_id)

#     active = request.GET.get("active")
#     if active is not None:
#         products = products.filter(is_active=active)
#     search = request.GET.get("search")
#     if search:
#         products = products.filter(name__icontains=search)
#     data = []
#     for product in products:
#         data.append({
#             'id': product.id,
#             'name': product.name,
#             'price': product.price,
#             'description': product.description,
#             'count': product.count,
#             'is_active': product.is_active,
#             'category': product.category.name
#         })

#     return JsonResponse(data, safe=False)

# def product_detail(request, id):
#     product = get_object_or_404(Product, id=id)
#     data = {
#         'id': product.id,
#         'name': product.name,
#         'price': product.price,
#         'description': product.description,
#         'count': product.count,
#         'is_active': product.is_active,
#         'category': product.category.name
#     }
#     return JsonResponse(data)

# def category_list(request):
#     categories = Category.objects.all()
#     data = []
#     for category in categories:
#         data.append({
#             'id': category.id,
#             'name': category.name
#         })
#     return JsonResponse(data, safe=False)

# def category_detail(request, id):
#     category = get_object_or_404(Category, id=id)
#     data = {
#         'id': category.id,
#         'name': category.name
#     }
#     return JsonResponse(data)

# def category_products(request, id):
#     category = get_object_or_404(Category, id=id)
#     products = category.products.all()
#     data = []
#     for product in products:
#         data.append({
#             'id': product.id,
#             'name': product.name,
#             'price': product.price,
#             'description': product.description,
#             'count': product.count,
#             'is_active': product.is_active,
#             'category': product.category.name
#         })
#     return JsonResponse(data, safe=False)



    