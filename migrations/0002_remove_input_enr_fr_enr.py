# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bot', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='input_enr',
            name='FR_Enr',
        ),
    ]
