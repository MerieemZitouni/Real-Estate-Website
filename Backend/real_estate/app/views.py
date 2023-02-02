from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Annonce, Messages
from .serializers import AnnonceSerializer, MessagesSerializer

class AnnonceViewSet(viewsets.ModelViewSet):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer


class AnnonceCreateView(generics.CreateAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer


class AnnonceDeleteView(generics.DestroyAPIView):
    queryset = Annonce.objects.all()
    lookup_field = 'idannonce'

class SearchAiView(generics.ListAPIView):
    serializer_class = AnnonceSerializer

    def get_queryset(self):
        wilaya = self.request.query_params.get('wilaya', None)
        commune = self.request.query_params.get('commune', None)
        categorie = self.request.query_params.get('categorie', None)
        type_bien = self.request.query_params.get('type_bien', None)
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)

        queryset = Annonce.objects.all()

        if wilaya is not None:
            queryset = queryset.filter(idlocalisation__wilaya=wilaya)
        if commune is not None:
            queryset = queryset.filter(idlocalisation__commune=commune)
        if categorie is not None:
            queryset = queryset.filter(categorie=categorie)
        if type_bien is not None:
            queryset = queryset.filter(type_bien=type_bien)
        if start_date is not None and end_date is not None:
            queryset = queryset.filter(date_depot__range=(start_date, end_date))

        return queryset


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessagesSerializer
    queryset = Messages.objects.all()