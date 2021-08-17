from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# Create your models here.


class UserManager(BaseUserManager):
    # 일반 user 생성
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('must have user email')
        if not username:
            raise ValueError('must have user username')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    # 관리자 user 생성
    def create_superuser(self, email, username, password=None):
        user = self.create_user(
            email,
            password=password,
            username=username,

        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        default='', max_length=100, null=False, blank=False, unique=True)
    username = models.CharField(
        default='', max_length=100, null=False, blank=False, unique=True)

    # User 모델의 필수 field
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    # 헬퍼 클래스 사용
    objects = UserManager()

    USERNAME_FIELD = 'username'
    # 필수로 작성해야하는 field
    # REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return True
    # True를 반환하여 권한이 있음을 알립니다.

    def has_module_perms(self, app_label):
        return True
    # True를 반환하여 주어진 앱(App)의 모델(Model)에 접근 가능하도록 합니다.

    @property
    def is_staff(self):
        return self.is_admin
    # True가 반환되면 장고(django)의 관리자 화면에 로그인 할 수 있습니다.
    # 참고 :https://dev-yakuza.posstree.com/ko/django/custom-user-model/
