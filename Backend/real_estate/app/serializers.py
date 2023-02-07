# serializers.py
from rest_framework import serializers
from .models import Annonce, Localisation, Photos



class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = '_all_'


class LocalisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Localisation
        fields = '__all__'
        geo_field = 'point'

class PhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = '__all__'




