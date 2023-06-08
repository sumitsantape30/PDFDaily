from django.urls import path
from .views import pdf_to_word

urlpatterns = [
    path('pdf-to-word/', pdf_to_word, name='pdf-to-word')
]
