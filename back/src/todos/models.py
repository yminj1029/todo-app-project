from django.db import models
from django.utils import timezone
# Create your models here.
# 테이블을 정의하는 파일, 데이터 베이스 처리를 ORM기법을 사용한다.


class Todo(models.Model):
    content = models.CharField(max_length=200)
    username = models.CharField(max_length=120, blank=False)
    # json serialized text version of your list
    check = models.BooleanField(default=False)
    # auto를 사용하고 싶다면 null=True가 필요
    date = models.DateField(default=timezone.now)
    # todo에서 삭제했다면 False, 아니라면 True : 삭제해도 기록 남아있게 함.

    def __str__(self):
        return self.content
