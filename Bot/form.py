from django import forms

class EnrForm(forms.Form):
    taux_form = forms.IntegerField(label='taux_form')