from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/register/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('todos.api.urls'))
]
