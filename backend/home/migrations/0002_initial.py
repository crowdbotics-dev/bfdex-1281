# Generated by Django 4.2.16 on 2024-11-26 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("home", "0001_load_initial_data"),
    ]

    operations = [
        migrations.CreateModel(
            name="Yhbchd",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("yejcx", models.BigIntegerField()),
                ("bcndjd", models.BigIntegerField()),
            ],
        ),
    ]