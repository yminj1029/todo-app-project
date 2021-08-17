from django.contrib import admin
from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('rest-auth/', include('account.api.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('todos.api.urls'))
]
