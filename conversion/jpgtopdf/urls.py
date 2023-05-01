from django.urls import path
from . import views

urlpatterns = [
    path('jpg_to_pdf/', views.jpg_to_pdf,name='jpg_to_pdf'),
]

