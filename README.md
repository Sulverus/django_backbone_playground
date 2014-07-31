Django backbone playground
==========================
"The problem is standard JavaScript libraries are great at what they do -
and without realizing it you can build an entire application without any
formal structure. You will with ease turn your application into a nested pile
of jQuery callbacks, all tied to concrete DOM elements."

This is a small example, showing how can communicate django and backbone.js using the REST API

Stack
-----
Server:
 * Django 1.6.5
 * Django Rest Framework
Client:
 * Backbone.js - awesome frontend library =)
 * icanhaz.js - nice js rendering library

Install and run
---------------
$pip install -r requirements.txt
$python manage.py syncdb
$python manage.py runserver 0.0.0.0:8000

enjoy