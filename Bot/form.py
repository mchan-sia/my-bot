from django import forms

from .models import TAUX_ENR

class EnrForm(forms.ModelForm):

    class Meta:
        model = TAUX_ENR
        fields = ['pays','taux',]
