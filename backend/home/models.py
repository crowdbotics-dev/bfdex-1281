from django.conf import settings
from django.db import models


class Yhbchd(models.Model):
    "Generated Model"
    yejcx23 = models.BigIntegerField(
        null=True,
        blank=True,
    )
    bcndjd = models.BigIntegerField(
        blank=True,
    )

    def test_method(self):
        import requests

        response = requests.get("https://hello.com")
        data = response.json()
        print(data)
        return data


class Abc(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )
