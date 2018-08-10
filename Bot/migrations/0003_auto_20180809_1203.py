# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0002_remove_input_enr_fr_enr'),
    ]

    operations = [
        migrations.CreateModel(
            name='TAUX',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Input_Enr',
        ),
    ]
