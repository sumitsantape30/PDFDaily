from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import tempfile
import os
from pyexcelerate import Workbook
from weasyprint import HTML


@csrf_exempt
def convert_excel_to_pdf(request):
    if request.method == 'POST':
        # Get the uploaded Excel file
        excel_file = request.FILES['excel_file']
        
        # Create a temporary file to save the Excel data
        with tempfile.NamedTemporaryFile(suffix='.xlsx', delete=False) as f:
            f.write(excel_file.read())
            file_path = f.name
        
        # Read the Excel data and create a Workbook object
        workbook = Workbook(file_path)
        
        # Create a temporary file to save the PDF data
        with tempfile.NamedTemporaryFile(suffix='.pdf', delete=False) as f:
            pdf_file_path = f.name
        
        # Convert the Excel data to HTML
        html = workbook.to_html()
        
        # Create a PDF from the HTML using WeasyPrint
        HTML(string=html).write_pdf(pdf_file_path)
        
        # Read the PDF file and delete the temporary files
        with open(pdf_file_path, 'rb') as f:
            pdf_data = f.read()
        os.remove(file_path)
        os.remove(pdf_file_path)
        
        # Return the PDF data as an HTTP response
        response = HttpResponse(pdf_data, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="converted.pdf"'
        return response
