from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Annonce, Message

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

router = routers.DefaultRouter()
router.register(r'messages', MessageViewSet, base_name='message')


