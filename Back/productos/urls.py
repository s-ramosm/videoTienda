from django.urls import path,include

from rest_framework.routers import DefaultRouter

from .views import productoView,imagenProductoView,get_img


router = DefaultRouter()
router.register(r'productos', productoView,basename="productos")

urlpatterns = [
    path('', include(router.urls)),
    path('imagen/', imagenProductoView.as_view()),
    path('imagenes/<str:producto>/', imagenProductoView.as_view()),
    path('imagen/<int:id>/',get_img)
]