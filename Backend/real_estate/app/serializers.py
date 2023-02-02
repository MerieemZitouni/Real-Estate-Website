# serializers.py
from rest_framework import serializers
from .models import Annonce, Localisation, Photos, Messages



class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = '_all_'


class LocalisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Localisation
        fields = '__all__'

class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = '__all__'


class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'



