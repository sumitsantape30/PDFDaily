# views.py
from django.http import HttpResponseBadRequest, FileResponse
from docx2pdf import convert
import tempfile

def convert_word_to_pdf(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        if not file:
            return HttpResponseBadRequest('File not found')
        
        if not file.name.endswith('.docx'):
            return HttpResponseBadRequest('Invalid file type')
        
        with tempfile.NamedTemporaryFile(delete=False) as temp:
            temp.write(file.read())
            temp.flush()
            pdf_path = temp.name.replace('.docx', '.pdf')
            convert(temp.name, pdf_path)
        
        with open(pdf_path, 'rb') as pdf_file:
            response = FileResponse(pdf_file, content_type='application/pdf')
            response['Content-Disposition'] = f'attachment; filename={file.name.replace(".docx", ".pdf")}'
            return response

    return HttpResponseBadRequest('Invalid request')



