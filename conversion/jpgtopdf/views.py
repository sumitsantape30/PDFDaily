from django.shortcuts import render

# # Create your views here.
import io
from django.http import FileResponse
from rest_framework import status
from rest_framework.decorators import api_view,renderer_classes
from rest_framework.response import Response
from PIL import Image
from reportlab.pdfgen import canvas
from rest_framework.renderers import JSONRenderer


def jpg_to_pdf(request):
    # Get the JPG file from the request
    if request.method == 'POST':
        jpg_file = request.FILES.get('jpg_file')

    # Check that a file was provided
    if not jpg_file:
        return Response({'error': 'No file was provided'}, status=status.HTTP_400_BAD_REQUEST)

    # Open the JPG file with Pillow
    try:
        image = Image.open(jpg_file)
    except IOError:
        return Response({'error': 'Invalid file format'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a PDF file in memory using ReportLab
    pdf_buffer = io.BytesIO()
    pdf = canvas.Canvas(pdf_buffer)
    pdf.setPageSize((image.width, image.height))
    pdf.drawImage(image, 0, 0, image.width, image.height)
    pdf.showPage()
    pdf.save()

    # Rewind the buffer and create a FileResponse containing the PDF file
    pdf_buffer.seek(0)
    response = FileResponse(pdf_buffer, as_attachment=True, filename='jpgpdf.pdf')
    return response


    