from django.urls import path
from . import views

urlpatterns = [
    path('convert-excel-to-pdf', views.convert_excel_to_pdf, name='convert_excel_to_pdf'),
]
