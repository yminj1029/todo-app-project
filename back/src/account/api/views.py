from .serializers import CreateUserSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(['POST'])
@permission_classes([AllowAny])  # 인증 필요없다
def join(request):
    # password
    if(len(request.data['password']) < 8):
        data = {
            'message': 'password는 8글자 이상'
        }
        return Response(data, status=403)
    serializer = CreateUserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()  # DB 저장
        content = {
            'message': '회원가입 성공'
        }
        return Response(content, status=201)
