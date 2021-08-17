from django.urls import path, include
from account.api.views import UserCreateViewSet

urlpatterns = [
    path('join/', UserCreateViewSet.as_view()),
    # path('login/', include('rest_framework.urls')),
]
