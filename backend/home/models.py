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
