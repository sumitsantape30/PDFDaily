from django.urls import path
from . import views

urlpatterns = [
    path('png-to-jpg/', views.png_to_jpg, name='png-to-jpg'),
]
