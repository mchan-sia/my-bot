# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0005_auto_20180809_1218'),
    ]

    operations = [
        migrations.CreateModel(
            name='TAUX',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('taux', models.IntegerField(default=0, verbose_name='taux')),
            ],
        ),
        migrations.DeleteModel(
            name='TAUX_ENR',
        ),
    ]
