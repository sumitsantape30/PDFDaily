from django.urls import path
from .import views

urlpatterns=[
    path('jpg-to-pdf/', views.jpg_to_pdf, name='jpg-to-pdf'),

]