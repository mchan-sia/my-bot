# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0007_taux_pays'),
    ]

    operations = [
        migrations.CreateModel(
            name='TAUX_ENR',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True, serialize=False)),
                ('pays', models.CharField(verbose_name='pays', default='', max_length=200)),
                ('taux', models.IntegerField(verbose_name='taux', default=0)),
            ],
        ),
        migrations.DeleteModel(
            name='TAUX',
        ),
    ]
