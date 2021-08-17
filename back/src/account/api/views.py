from account.models import User
from .serializers import UserSerializer
from rest_framework import generics

# 회원가입


class UserCreateViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
