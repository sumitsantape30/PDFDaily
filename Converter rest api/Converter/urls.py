from django.contrib import admin
from django.urls import include, path
from rest_framework import routers 

router = routers.DefaultRouter()                   

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('pdf_converter.urls')),
    path('ppt2pdf/', include('ppttopdf.urls')),
    path('word2pdf/', include('word2pdf.urls')),
    path('png2jpg/',include('pngtojpg.urls')),
    path('jpg2pdf/',include('jpgtopdf.urls')),
    path('ppt2word/',include('ppttoword.urls')),
    path('excel2pdf/',include('Exceltopdf.urls')),

]
