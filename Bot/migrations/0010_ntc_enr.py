# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0009_auto_20180821_1404'),
    ]

    operations = [
        migrations.CreateModel(
            name='NTC_ENR',
            fields=[
                ('Import_Export', models.CharField(max_length=200, default='', serialize=False, primary_key=True, verbose_name='Import_Export')),
                ('NTC', models.IntegerField(default=0, verbose_name='NTC')),
            ],
        ),
    ]
