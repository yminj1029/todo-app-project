from django.urls import path, include
# from account.api.views import join
from . import views
urlpatterns = [
    path('join/', views.join),
    # path('login/', include('rest_framework.urls')),
]
# https://velog.io/@ayoung0073/DRF-signup-login-jwt
