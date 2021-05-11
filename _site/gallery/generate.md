---
pagination:
    data: images
    size: 1
    alias: image
permalink: 'gallery/{{image.title | slug }}/'
layout: base
---

<h1 class="image-title">{{image.title }}</h1>

<div class="image">
    <img src="{{image.src}}" alt="{{image.title}}">
</div>

<div class="image-info">
    <p class="location">Location: {{image.location}}</p>
    <p class="date">Date: {{image.date}}</p>
    <p class="description">{{image.description}}</p>
</div>