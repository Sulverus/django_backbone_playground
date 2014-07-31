from django.db import models
from django.contrib.auth.models import User


class Tweet(models.Model):
    text = models.CharField(u'Tweet text', max_length=120, blank=False)
    timestamp = models.DateTimeField(u'Time stamp', auto_now=True)
    user = models.ForeignKey(
        User, blank=False,
        verbose_name=u'User', related_name='tweets'
    )

    def __unicode__(self):
        return self.text

    class Meta:
        verbose_name = u'Tweet'
        verbose_name_plural = u'Tweets'
