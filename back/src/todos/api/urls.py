
from todos.api.views import TodoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TodoViewSet, basename='todos')
urlpatterns = router.urls
