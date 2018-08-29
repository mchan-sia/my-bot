# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0006_auto_20180809_1221'),
    ]

    operations = [
        migrations.AddField(
            model_name='taux',
            name='pays',
            field=models.CharField(verbose_name='pays', default='', max_length=200),
        ),
    ]
