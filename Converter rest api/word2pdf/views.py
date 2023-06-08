import os
from django.http import FileResponse
from rest_framework import status
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from docx import Document
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import io

from .serializers import FileSerializer

class WordToPdfAPIView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            file_obj = serializer.validated_data['file']
            try:
                doc = Document(file_obj)

                buffer = io.BytesIO()  # Create a buffer to store the PDF content
                pdf = SimpleDocTemplate(buffer, pagesize=letter)

                styles = getSampleStyleSheet()
                elements = []

                for para in doc.paragraphs:
                    text = para.text.replace('\u2014', '--')
                    p = Paragraph(text, styles['Normal'])
                    elements.append(p)

                pdf.build(elements)

                buffer.seek(0)  # Move the buffer's cursor to the beginning

                # Create a FileResponse with the PDF content
                response = FileResponse(buffer, as_attachment=True, filename='converted.pdf')

                return response
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
