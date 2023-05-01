from django.shortcuts import render

# Create your views here.
# from django.http import HttpResponse
# from PIL import Image

# def convert_image(request):
#     # Get the PNG file from the request
#     png_file = request.FILES.get('png_file')

#     # Open the PNG file using PIL
#     img = Image.open(png_file)

#     # Convert the image to JPEG and save it
#     jpeg_file = io.BytesIO()
#     img.save(jpeg_file, 'jpeg')

#     # Return the JPEG file as an HTTP response
#     response = HttpResponse(jpeg_file.getvalue(), content_type='image/jpeg')
#     response['Content-Disposition'] = 'attachment; filename="converted.jpg"'
#     return response
# from django.shortcuts import render
# from PIL import Image
# import io

# def png_to_jpg(request):
#     image_data = None
#     if request.method == 'POST':
#         # Get the uploaded PNG file from the request
#         png_file = request.FILES.get('png_file', None)
#         if png_file is not None:
#             # Open the PNG file using PIL
#             img = Image.open(png_file)

#             # Convert the image to JPEG
#             jpeg_file = io.BytesIO()
#             img.save(jpeg_file, 'jpeg')

#             # Set the image_data variable to the converted JPEG image
#             image_data = jpeg_file.getvalue()

#     # Render the HTML page with the uploaded PNG file and/or converted JPEG image
#     context = {'image_data': image_data}
#     return render(request, 'upload.html', context)
# from django.shortcuts import render
# from PIL import Image
# import io

# def png_to_jpg(request):
#     image_data = None
#     if request.method == 'POST':
#         # Get the uploaded PNG file from the request
#         try:
#             png_file = request.FILES['png_file']
#         except MultiValueDictKeyError:
#             return render(request, 'upload_image.html', {'error_message': 'Please upload a PNG file'})

#         # Open the PNG file using PIL
#         img = Image.open(png_file)

#         if img.mode == 'RGBA':
#             img = img.convert('RGB')

#         # Convert the image to JPEG
#         jpeg_file = io.BytesIO()
#         img.save(jpeg_file, 'jpeg')

#         # Set the image_data variable to the converted JPEG image
#         image_data = jpeg_file.getvalue()

#     # Render the HTML page with the uploaded PNG file and/or converted JPEG image
#     context = {'image_data': image_data}
#     return render(request, 'upload.html', context)

import io
from django.http import HttpResponse
from PIL import Image

def png_to_jpg(request):
    if request.method == 'POST':
        # Get the uploaded PNG file from the request
        png_file = request.FILES.get('png_file')

        # Convert the PNG file to a JPEG file
        image = Image.open(png_file)
        if image.mode == 'RGBA':
            image = image.convert('RGB')
        buffer = io.BytesIO()
        image.save(buffer, format='JPEG')
        jpeg_data = buffer.getvalue()

        # Create a HTTP response with the JPEG data
        response = HttpResponse(content=jpeg_data, content_type='image/jpeg')
        response['Content-Disposition'] = 'attachment; filename="converted_image.jpg"'
        return response

    return render(request, 'upload.html')
