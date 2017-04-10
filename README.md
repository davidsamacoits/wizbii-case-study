Wizbii case study
=================

Objectif
--------
Refaire une petite partie du flux d'actualité de Wizbii en se basant sur l'API publique offerte par Wizbii. Un exemple de ce qui est attendu en terme visuel est disponible à l'adresse https://remialvado.github.io/wizbii-technical-test/index.html
Cette API est sécurisée au moyen du protocole oAuth2.0 et est donc facilement compréhensible par tout Développeur Web.

Fonctionnalités implémentées
----------------------------
* Connexion grâce à l'API et au endpoint /v1/account/validate
* Stockage du token en cookie
* Récupération dynamique du flux d'actualités depuis le endpoint /v2/dashboard/?direction=newest
* Rendu du flux d'actualités (incomplet, mais les éléments crutiaux tels que le contenu ou l'identité de l'auteur sont présents)
* Gestion de la connexion et déconnexion
* Indicateur d'activité lors du chargement du flux d'actualités
* Gestion des erreurs liées à l'accès à l'API (erreur lors de la récupération du token ou du flux d'actualités)

![Wiizbii Case Study screens](http://img15.hostingpics.net/pics/307722wizbiicasestudy.jpg)

*Développements et tests réalisé sur serveur local via WAMP* 


Technologies, langages et frameworks utilisés
----------------------
* HTML
* SCSS (avec Compass)
* Javascript
* jQuery 3.2.1
* Angular 1.6.3
* Animate.css 3.5.2