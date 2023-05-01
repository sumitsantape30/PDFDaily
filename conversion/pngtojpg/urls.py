from django.urls import path
from . import views

urlpatterns = [
    path('png_to_jpg/', views.png_to_jpg, name='png_to_jpg'),
]
