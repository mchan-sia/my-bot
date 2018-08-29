# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0008_auto_20180809_1417'),
    ]

    operations = [
        migrations.CreateModel(
            name='OPTIM_ENR',
            fields=[
                ('pays', models.CharField(serialize=False, primary_key=True, verbose_name='pays', max_length=200, default='')),
                ('optim', models.DecimalField(decimal_places=5, max_digits=10, verbose_name='optim', default=0)),
            ],
        ),
        migrations.RemoveField(
            model_name='taux_enr',
            name='id',
        ),
        migrations.AlterField(
            model_name='taux_enr',
            name='pays',
            field=models.CharField(serialize=False, primary_key=True, verbose_name='pays', max_length=200, default=''),
        ),
    ]
