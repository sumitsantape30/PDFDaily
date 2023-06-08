import io
import os

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from PyPDF2 import PdfReader
import docx


@api_view(['POST'])
def pdf_to_word(request):
    # Get the uploaded file from the request
    pdf_file = request.FILES.get('file')

    # Check that the uploaded file is a PDF
    if not pdf_file.name.endswith('.pdf'):
        return Response({'error': 'Invalid file type'})

    # Create a PyPDF2 PdfReader object to read the PDF
    pdf_reader = PdfReader(pdf_file)

    # Create a python-docx Document object to hold the Word document
    word_doc = docx.Document()

    # Loop through each page in the PDF and add its contents to the Word document
    for page_num in range(len(pdf_reader.pages)):
        pdf_page = pdf_reader.pages[page_num]  
        text = pdf_page.extract_text()
        word_doc.add_paragraph(text)

    # Save the Word document to a BytesIO buffer
    output_buffer = io.BytesIO()
    word_doc.save(output_buffer)

    # Set the response content type and headers
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    response['Content-Disposition'] = f'attachment; filename={os.path.splitext(pdf_file.name)[0]}.docx'

    # Write the Word document from the buffer to the response
    response.write(output_buffer.getvalue())

    return response
