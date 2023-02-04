from django.urls import path
from django.conf.urls import include
from .views import MessageViewSet


urlpatterns = [
    path('api/', include(router.urls)),
]