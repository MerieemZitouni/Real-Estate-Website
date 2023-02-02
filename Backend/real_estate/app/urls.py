from django.urls import path
from django.conf.urls import include
from .views import AnnonceCreateView,AnnonceDeleteView,SearchAiView


urlpatterns = [

    path('supprimer-annonce/<int:idannonce>/', AnnonceDeleteView.as_view(), name='annonce-delete'),
    path('ajouter-annonce/', AnnonceCreateView.as_view(), name='annonce-create'),
    path('rechercher-annonce/', SearchAiView.as_view(), name='search-ads'),

    ]