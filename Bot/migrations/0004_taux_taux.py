# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0003_auto_20180809_1203'),
    ]

    operations = [
        migrations.AddField(
            model_name='taux',
            name='taux',
            field=models.IntegerField(default=0, verbose_name='taux'),
        ),
    ]
