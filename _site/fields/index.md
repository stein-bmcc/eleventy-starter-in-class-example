---
title: NYC Soccer Fields
layout: base
hasmap: true
fieldmap: true
eleventyNavigation:
    key: fields
    parent: main

---

# {{title}}

{% if facilities %}
<!-- fields -->
{% else %}
    <!-- no fields -->
{% endif %}

<div class="fields">
{% for field in facilities.info.data %}
{% if field[41]=="SCR" %}
<div class="field">
name: {{field[38]}} <br>
borough: {{ field[16] }} <br>
zip: {{ field[15] }}<br>
Primary Sport: {{ field[41]}}<br>
Non Regulated Soccer: {{ field[40]}}<br>
Regulated Soccer: {{ field[42]}} <br>
Surface type: {{field[44]}} <br>
</div>
{% endif %}
{% endfor %}
</div>

## Map

<div id="mapid"></div>









