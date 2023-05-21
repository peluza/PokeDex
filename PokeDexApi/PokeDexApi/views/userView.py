from django.contrib.auth.models import User
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from ..models.serializers import UsuarioSerializer
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


@csrf_exempt
@api_view(['POST'])
def create_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if username and password and email:
        User.objects.create_user(username=username, password=password, email=email)
        return Response({'mensaje': 'Usuario creado exitosamente.'})
    else:
        return Response({'mensaje': 'Error al crear el usuario.'}, status=400)

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_all_user(request):
    usuarios = User.objects.all()
    serializer = UsuarioSerializer(usuarios, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_user(request, id):
    try:
        usuario = User.objects.get(id=id)
        serializer = UsuarioSerializer(usuario)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({'mensaje': 'Usuario no encontrado'}, status=404)

@csrf_exempt
@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)
    if user is not None:
        serializer = UsuarioSerializer(user) 
        # csrf_token = get_token(request)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'mensaje': 'Inicio de sesión exitoso', "user" : serializer.data,'token': token.key })
    else:
        return Response({'mensaje': 'Credenciales inválidas'}, status=401)
