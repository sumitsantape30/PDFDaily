#ppttopdf/urls.py
'''
import os
import tempfile
import win32com.client
from django.http import HttpResponse, HttpResponseBadRequest

def convert_ppt_to_pdf(request):
    if request.method == 'POST':
        if 'file' not in request.FILES:
            return HttpResponseBadRequest('No file was uploaded')

        ppt_file = request.FILES['file']
        with tempfile.NamedTemporaryFile(delete=False) as temp_ppt_file:
            for chunk in ppt_file.chunks():
                temp_ppt_file.write(chunk)
            temp_ppt_file.flush()

            powerpoint = win32com.client.Dispatch("Powerpoint.Application")
            powerpoint.Visible = 1
            deck = powerpoint.Presentations.Open(temp_ppt_file.name)
            with tempfile.NamedTemporaryFile(delete=False) as temp_pdf_file:
                temp_pdf_file_path = temp_pdf_file.name
                deck.SaveAs(temp_pdf_file_path, 32) # 32 stands for pdf format
                deck.Close()
                powerpoint.Quit()

                with open(temp_pdf_file_path, 'rb') as f:
                    response = HttpResponse(f, content_type='application/pdf')
                    response['Content-Disposition'] = 'attachment; filename="converted.pdf"'
                    return response

                os.remove(temp_pdf_file_path)

        os.remove(temp_ppt_file.name)

    return HttpResponseBadRequest('Invalid request method')
  
# Create your views here.

# Create your views here.
import os
import io
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import win32com.client as win32
import pythoncom


@api_view(['POST'])
def ppt_to_pdf(request):
    # Get the uploaded file from the request
    ppt_file = request.FILES.get('file')

    # Check that the uploaded file is a PPT or PPTX
    allowed_extensions = ['.ppt', '.pptx']
    if not any(ppt_file.name.lower().endswith(ext) for ext in allowed_extensions):
        return Response({'error': 'Invalid file type'})

    # Convert PPT to PDF
    pythoncom.CoInitialize()

    powerpoint = win32.gencache.EnsureDispatch("Powerpoint.Application")
    presentation = powerpoint.Presentations.Open(ppt_file.temporary_file_path())
    pdf_path = os.path.splitext(ppt_file.name)[0] + '.pdf'
    presentation.SaveAs(pdf_path, 32)  # 32 stands for PDF format
    presentation.Close()
    powerpoint.Quit()

    # Read the PDF file
    with open(pdf_path, 'rb') as file:
        pdf_data = file.read()

    # Delete the temporary PDF file
    os.remove(pdf_path)

    # Set the response content type and headers
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename={os.path.splitext(ppt_file.name)[0]}.pdf'

    # Write the PDF data to the response
    response.write(pdf_data)

    pythoncom.CoUninitialize()


    return response

import io
import os

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
import ppt2pdf


@api_view(['POST'])
def ppt_to_pdf(request):
    # Get the uploaded file from the request
    ppt_file = request.FILES.get('file')

    # Check that the uploaded file is a PPT or PPTX
    if not ppt_file.name.endswith(('.ppt', '.pptx')):
        return Response({'error': 'Invalid file type'})

    # Convert PPT to PDF using ppt2pdf module
    pdf_file = ppt2pdf.convert_ppt_to_pdf(ppt_file)

    # Set the response content type and headers
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename={os.path.splitext(ppt_file.name)[0]}.pdf'

    # Write the PDF file to the response
    response.write(pdf_file)

    return response

import io
import os

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from pptx import Presentation

@api_view(['POST'])
def ppt_to_pdf(request):
    # Get the uploaded file from the request
    ppt_file = request.FILES.get('file')

    # Check that the uploaded file is a PPT or PPTX
    if not ppt_file.name.endswith(('.ppt', '.pptx')):
        return Response({'error': 'Invalid file type'})

    # Load the PPT file using python-pptx
    presentation = Presentation(ppt_file)

    # Create a BytesIO buffer to save the PDF
    pdf_buffer = io.BytesIO()

    # Save the presentation as PDF to the buffer
    presentation.save(pdf_buffer)

    # Set the buffer position to the beginning
    pdf_buffer.seek(0)

    # Set the response content type and headers
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename={os.path.splitext(ppt_file.name)[0]}.pdf'

    # Write the PDF file to the response
    response.write(pdf_buffer.getvalue())

    return response

import io
import os
from platform import python_compiler
import tempfile
import comtypes.client

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def ppt_to_pdf(request):
    # Get the uploaded file from the request
    python_compiler.CoInitialize()
    ppt_file = request.FILES.get('file')

    # Check that the uploaded file is a PPT or PPTX
    if not ppt_file.name.endswith(('.ppt', '.pptx')):
        return Response({'error': 'Invalid file type'})

    # Save the uploaded file to a temporary file on disk
    with tempfile.NamedTemporaryFile(delete=False) as tmp_file:
        tmp_filepath = tmp_file.name
        ppt_file_content = ppt_file.read()
        tmp_file.write(ppt_file_content)
    
    # Convert the PPT file to PDF using PowerPoint automation
    powerpoint = comtypes.client.CreateObject("Powerpoint.Application")
    presentation = powerpoint.Presentations.Open(tmp_filepath)
    pdf_filepath = os.path.splitext(tmp_filepath)[0] + '.pdf'
    presentation.ExportAsFixedFormat(pdf_filepath, 2)  # Format 2 represents PDF format
    presentation.Close()
    powerpoint.Quit()

    # Read the PDF file from disk
    with open(pdf_filepath, 'rb') as pdf_file:
        pdf_content = pdf_file.read()

    # Set the response content type and headers
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename={os.path.splitext(ppt_file.name)[0]}.pdf'

    # Write the PDF content to the response
    response.write(pdf_content)

    # Delete the temporary files
    os.remove(tmp_filepath)
    os.remove(pdf_filepath)

    return response
'''
import io
import os
import tempfile
import comtypes.client
import pythoncom

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def ppt_to_pdf(request):
    # Initialize the COM library
    pythoncom.CoInitialize()

    # Get the uploaded file from the request
    ppt_file = request.FILES.get('file')

    # Check that the uploaded file is a PPT or PPTX
    if not ppt_file.name.endswith(('.ppt', '.pptx')):
        return Response({'error': 'Invalid file type'})

    # Save the uploaded file to a temporary file on disk
    with tempfile.NamedTemporaryFile(delete=False) as tmp_file:
        tmp_filepath = tmp_file.name
        ppt_file_content = ppt_file.read()
        tmp_file.write(ppt_file_content)

    try:
        # Convert the PPT file to PDF using PowerPoint automation
        powerpoint = comtypes.client.CreateObject("Powerpoint.Application")
        presentation = powerpoint.Presentations.Open(tmp_filepath)
        pdf_filepath = os.path.splitext(tmp_filepath)[0] + '.pdf'
        presentation.ExportAsFixedFormat(pdf_filepath, 2)  # Format 2 represents PDF format
        presentation.Close()
        powerpoint.Quit()

        # Read the PDF file from disk
        with open(pdf_filepath, 'rb') as pdf_file:
            pdf_content = pdf_file.read()

        # Set the response content type and headers
        response = HttpResponse(content_type='application/pdf')
        # response['Content-Disposition'] = f'attachment; filename={os.path.splitext(ppt_file.name)[0]}.pdf'
        response['Content-Disposition'] = 'attachment; filename="converted_image.pdf"'

        # Write the PDF content to the response
        response.write(pdf_content)

        # Delete the temporary files
        os.remove(tmp_filepath)
        os.remove(pdf_filepath)

        return response
    finally:
        # Uninitialize the COM library
        pythoncom.CoUninitialize()
