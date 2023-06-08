# from django.shortcuts import render

# # Create your views here.
# from django.http import HttpResponse
# from django.views.decorators.csrf import csrf_exempt
# from reportlab.pdfgen import canvas
# from PIL import Image
# import io

# from rest_framework.decorators import api_view
# from rest_framework.response import Response

# @api_view(['POST'])
# @csrf_exempt
# def jpg_to_pdf(request):
#     if request.method == 'POST':
#         # Get the uploaded JPG file from the request
#         jpg_file = request.FILES.get('jpg_file')

#         # Create a PDF buffer
#         buffer = io.BytesIO()
#         pdf = canvas.Canvas(buffer)

#         # Open and process the JPG image
#         image = Image.open(jpg_file)
#         width, height = image.size
#         pdf.setPageSize((width, height))
#         pdf.drawImage(jpg_file, 0, 0, width, height)

#         # Save the PDF file
#         pdf.showPage()
#         pdf.save()

#         # Retrieve the PDF file from the buffer
#         pdf_data = buffer.getvalue()
#         buffer.close()

#         # Create a HTTP response with the PDF data
#         response = HttpResponse(content_type='application/pdf')
#         response['Content-Disposition'] = 'attachment; filename="converted_image.pdf"'
#         response.write(pdf_data)
#         return response

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from reportlab.pdfgen import canvas
from PIL import Image
import tempfile
import os
import io
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
@csrf_exempt
def jpg_to_pdf(request):
    if request.method == 'POST':
        # Get the uploaded JPG file from the request
        jpg_file = request.FILES.get('jpg_file')

        # Convert the JPG file to a PIL Image object
        image = Image.open(jpg_file)

        # Create a temporary file path to save the image
        temp_dir = tempfile.mkdtemp()  # Create a temporary directory
        temp_file_path = os.path.join(temp_dir, 'converted_image.jpg')

        # Save the image to the temporary file
        image.save(temp_file_path, 'JPEG')

        # Create a PDF buffer
        buffer = io.BytesIO()
        pdf = canvas.Canvas(buffer)

        # Set the page size based on the image dimensions
        width, height = image.size
        pdf.setPageSize((width, height))

        # Draw the image onto the PDF canvas
        pdf.drawImage(temp_file_path, 0, 0, width, height)

        # Save the PDF file
        pdf.showPage()
        pdf.save()

        # Retrieve the PDF file from the buffer
        pdf_data = buffer.getvalue()
        buffer.close()

        # Clean up the temporary file and directory
        os.remove(temp_file_path)
        os.rmdir(temp_dir)

        # Create a HTTP response with the PDF data
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="converted_image.pdf"'
        response.write(pdf_data)
        return response

