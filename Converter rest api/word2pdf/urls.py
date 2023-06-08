from django.urls import path
from .views import WordToPdfAPIView

urlpatterns = [
    
    path('convert/', WordToPdfAPIView.as_view(), name='word_to_pdf'),
]
