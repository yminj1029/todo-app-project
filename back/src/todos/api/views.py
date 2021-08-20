from todos.models import Todo
from .serializers import TodoSerializer
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend


class TodoViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    # """
    # authentication_classes = [BasicAuthentication, SessionAuthentication]
    # # permission 추가
    # permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['date', 'username']  # 나중에 username 추가
