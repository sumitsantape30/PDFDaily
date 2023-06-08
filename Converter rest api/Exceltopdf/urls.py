from django.urls import path
from .import views

urlpatterns = [
    path('Excel-to-pdf/', views.excel_to_pdf, name='Excel-to-pdf'),
]