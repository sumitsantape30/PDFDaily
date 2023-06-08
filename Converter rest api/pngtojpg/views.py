from django.shortcuts import render

# Create your views here.

import io
from django.http import HttpResponse
from PIL import Image
from rest_framework.decorators import api_view
from rest_framework.response import Response
import os

@api_view(['POST'])
def png_to_jpg(request):
    if request.method == 'POST':
        # Get the uploaded PNG file from the request
        # png_file = request.FILES.get('png_file')
        png_file = request.FILES['png_file']

        # Convert the PNG file to a JPEG file
        #converted the pdf file  to word file
        image = Image.open(png_file)
        if image.mode == 'RGBA':
            image = image.convert('RGB')
        buffer = io.BytesIO()
        image.save(buffer, format='JPEG')
        jpeg_data = buffer.getvalue()

        # Create a HTTP response with the JPEG data
        response = HttpResponse(content=jpeg_data, content_type='image/jpg')
        response['Content-Disposition'] = 'attachment; filename="converted_image.jpg"'
        return response