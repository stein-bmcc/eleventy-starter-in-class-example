---
title: Gallery
layout: base
eleventyNavigation:
    key: gallery
---

# {{title}}

<div class="gallery">
{% for image in images %}
<div class="card">
  <a href="/gallery/{{image.title | slug }}/"><img src="{{image.src}}" alt="{{image.title}}"></a>
  <div class="container">
    <h3><a href="/gallery/{{image.title | slug }}/">{{image.title}}</a></h3>
    <p>{{image.credit | safe}}</p>
    <p>{{image.description}}
    </p>
  </div>
</div>
{% endfor %}
</div>