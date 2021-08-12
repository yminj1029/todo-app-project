from django.db import models
from rest_framework import serializers
from todos.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:  # 메타는 클래스를 만드는 클래스다
        model = Todo
        fields = ('id', 'content', 'username', 'check', 'date')
