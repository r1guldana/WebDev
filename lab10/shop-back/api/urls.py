from django.urls import include, path
from . import views
from rest_framework.routers import DefaultRouter

#router = DefaultRouter()
#router.register(r'categories', views.CategoryViewSet, basename='category')
#router.register(r'products', views.ProductViewSet, basename='product')


urlpatterns = [
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),

    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),   
    #path('', include(router.urls)),
    # path('products/', views.product_list, name='product_list'),
    # path('products/<int:id>/', views.product_detail, name='product_detail'),
    # path('categories/', views.category_list, name='category_list'),
    # path('categories/<int:id>/', views.category_detail, name='category_detail'),
    # path('categories/<int:id>/products/', views.category_products, name='category_products'),
    # path('products/active/', views.ProductViewSet.as_view({'get': 'active'}), name='product_active'),
]
