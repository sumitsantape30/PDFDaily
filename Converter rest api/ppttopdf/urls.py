from django.urls import path
from . import views

urlpatterns = [
    path('ppt-to-pdf/', views.ppt_to_pdf, name='ppt-to-pdf'),
]