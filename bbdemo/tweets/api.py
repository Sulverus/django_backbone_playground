from rest_framework import viewsets, serializers
from tweets.models import Tweet
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ('password', )


class UserViewSet(viewsets.ModelViewSet):
    model = User
    serializer_class = UserSerializer


class TweetSerializer(serializers.ModelSerializer):
    username = serializers.RelatedField(source='user')

    class Meta:
        model = Tweet
        fields = ('id', 'text', 'username', 'timestamp')
        exclude = ('user',)


class TweetViewSet(viewsets.ModelViewSet):
    model = Tweet
    ordering = ('timestamp',)
    serializer_class = TweetSerializer

    def pre_save(self, obj):
        obj.user = self.request.user
