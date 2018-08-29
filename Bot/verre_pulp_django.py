# -*- coding: utf-8 -*-
"""
Created on Tue Aug 21 10:27:54 2018

@author: MC437D8N
"""
import pandas as pd
import numpy as np
from pulp import *
from mypulp import *


def OPTIM(porte1):
    # 1. Declaration des donnees
    data = {
        'poste1': [ {'porte': porte1, 'fenetre': 0}, 4 ],
        'poste2': [ {'porte': 0, 'fenetre': 2}, 12 ],
        'poste3': [ {'porte': 3, 'fenetre': 2}, 18 ],
    }
    POSTES, hserie, hdispos = multidict(data)
    
    profits = {
        'porte': 3000,
        'fenetre': 1000,
    }
    PRODUITS = profits.keys()
    
    # Verification des dictionnaires et des cles
    # print(POSTES)
    # print(hserie)
    # print(hdispos)
    # print(profits)
    # print(PRODUITS)
    
    # 2. Creation du modele
    monmodele = pulp.LpProblem("My LP Problem", pulp.LpMaximize)
    
    # 3. Declaration du dictionnaire des variables du modele: combien de pieces de chaque type
    Production = {}
    for produit  in  PRODUITS:
        Production[produit] =  pulp.LpVariable('nb_'+ str(produit) , lowBound=0, cat='Integer' )
    
    #4. Objective function
    monmodele += pulp.lpSum(Production['porte']*profits['porte']+Production['fenetre']*profits['fenetre'])
    
    # 5. Declaration des contraintes temps d'occupation des POSTES a ne pas depasser
    occupation = {}
    for poste in POSTES:
        occupation[poste] = sum(hserie[poste][produit] * Production[produit] for produit in PRODUITS )
        monmodele += occupation[poste] <= hdispos[poste]
    
    # 6. Optimisation du modele
    monmodele.solve()
    
    # 7. Affichage des resultats et sauvegarde des csv
    df = pd.DataFrame.from_dict(profits, orient="index")
    path=r'C:\Users\mc437d8n\Documents\Gratuiciels\WINPYTHON.3355\python-3.3.5\Scripts\BotInterco\mysite\Bot\media\data\test2.csv'
    df.to_csv(path)
    
    
    return pulp.value(monmodele.objective)
