from django.urls import path
from django.conf.urls import include
from .views import AnnonceCreateView,AnnonceDeleteView,SearchAiView,AnnonceViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'annonces', AnnonceViewSet)


urlpatterns = [

    path('supprimer-annonce/<int:idannonce>/', AnnonceDeleteView.as_view(), name='annonce-delete'),
    path('ajouter-annonce/', AnnonceCreateView.as_view(), name='annonce-create'),
    path('rechercher-annonce/', SearchAiView.as_view(), name='search-ads'),
    path('api/', include(router.urls)),
    path('localisations/', LocalisationList.as_view(), name='localisation-list'),
    path('localisations/<int:pk>/', LocalisationDetail.as_view(), name='localisation-detail'),

    ]