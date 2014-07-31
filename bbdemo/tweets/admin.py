from django.contrib import admin
from tweets.models import Tweet


class TweetAdmin(admin.ModelAdmin):
    list_display = ('text', 'timestamp')

admin.site.register(Tweet, TweetAdmin)