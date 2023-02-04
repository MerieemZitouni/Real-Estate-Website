from rest_framework import generics,viewsets
from .models import Annonce
from .serializers import AnnonceSerializer
from functools import reduce
import operator
from django.db.models import Q

def find_word_in_text(text, word):
    text = text.translate(str.maketrans("", "", string.punctuation)).lower()
    word = word.translate(str.maketrans("", "", string.punctuation)).lower()
    return word in text

class DeposerAnnonceView(generics.ListCreateAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    def create_annonce(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class RechercherAnnonceView(generics.ListAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer

    def get_queryset(self):
        queryset = Annonce.objects.all()
        keywords = self.request.query_params.get('keywords', None)
        if keywords:
            keywords = keywords.split()
            queryset = queryset.filter(
                reduce(operator.or_, (Q(titre__icontains=word) | Q(description__icontains=word) for word in keywords))
            )
        return queryset
    
class AfficherPlusRecenteView(generics.ListAPIView):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    def get_queryset(self):
        queryset = Annonce.objects.all()
        return queryset.order_by('-date_depot')
    
