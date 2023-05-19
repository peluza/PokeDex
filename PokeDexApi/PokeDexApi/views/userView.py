from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from ..models.serializers import UsuarioSerializer

@csrf_exempt
@api_view(['POST'])
def create_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if username and password and email:
        user = User.objects.create_user(username=username, password=password, email=email)
        return Response({'mensaje': 'Usuario creado exitosamente.'})
    else:
        return Response({'mensaje': 'Error al crear el usuario.'}, status=400)

@api_view(['GET'])
def get_all_user(request):
    usuarios = User.objects.all()
    serializer = UsuarioSerializer(usuarios, many=True)
    return Response(serializer.data)