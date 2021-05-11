---
title: Gallery
layout: base

---

# {{title}}

<div class="gallery">
{% for image in images %}
<div class="card">
  <a href="/gallery/{{image.title | slug }}/"><img src="{{image.src}}" alt="{{image.title}}"></a>
  <div class="container">
    <h3>{{image.title}}</h3>
    <p>{{image.description}}
    </p>
  </div>
</div>
{% endfor %}
</div>