"""real_estate URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from app.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', DeposerAnnonceView.as_view(), name='deposer_annonce'),
    path('rechercher/',RechercherAnnonceView.as_view(), name='rechercher_annonce'),
    path('afficher_recentes/',AfficherPlusRecenteView.as_view(), name='afficher_recentes'),
    path('accounts/', include('allauth.urls')),
]
