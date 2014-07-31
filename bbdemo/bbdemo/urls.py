from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from rest_framework import routers
from tweets.api import TweetViewSet, UserViewSet
from tweets.views import MainPage

admin.autodiscover()
router = routers.DefaultRouter()
router.register(r'tweets', TweetViewSet)
router.register(r'users', UserViewSet)

urlpatterns = patterns(
    '',
    url(r'^$', MainPage.as_view(), name='main_page'),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += staticfiles_urlpatterns()