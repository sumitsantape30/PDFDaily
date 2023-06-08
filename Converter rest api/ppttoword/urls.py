from django.urls import path
from .import views

urlpatterns = [
    path('ppt-to-word/', views.ppt_to_word, name='ppt-to-word'),
]