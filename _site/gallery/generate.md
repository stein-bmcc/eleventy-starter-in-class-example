---
pagination:
    data: images
    size: 1
    alias: image
permalink: 'gallery/{{image.title | slug }}/'
eleventyNavigation:
    key: {{image.title | slug }}
    parent: gallery
layout: base
---
{% set crumbs = collections.all | eleventyNavigationBreadcrumb(eleventyNavigation.key) %}
{% for crumb in crumbs %}
  <a class="crumb" href="{{ crumb.url | url }}">{{ crumb.title }}</a>
  ...
{% endfor %}

<h1 class="image-title">{{image.title }}</h1>

<div class="image">
    <img src="{{image.src}}" alt="{{image.title}}">
</div>

<div class="prev-next">
{% if pagination.href.previous %}
<a href="{{ pagination.href.previous }}">Previous Image</a>
{% else %}
<a href="{{ pagination.href.last }}">Loop to Last Image</a>
{% endif %}

{% if pagination.href.next %}
<a href="{{ pagination.href.next }}">Next Image</a>
{% else %}
<a href="{{ pagination.href.first }}">Loop to First Image</a>
{% endif %}
</div>

<div class="image-info">
    <p class="location">Location: {{image.location}}</p>
    <p class="date">Date: {{image.date}}</p>
    <p class="credit">Photo by: {{image.credit | safe}}</p>
    <p class="description">{{image.description}}</p>
</div>


<nav aria-labelledby="gallery-images" class="gallery-list">
  <h3 id="gallery-images">Gallery Images</h3>
  <ul>
   <li>{% if page.url != pagination.href.first %}<a href="{{ pagination.href.first }}">First</a>{% else %}First{% endif %}</li>
{%- for pageEntry in pagination.pages %}
    <li><a href="{{ pagination.hrefs[ loop.index0 ] }}"{% if page.url == pagination.hrefs[ loop.index0 ] %} aria-current="page"{% endif %}>
    <!-- Page {{ loop.index }}--> <!--shows Page 1, Page 2 etc -->
    {{pageEntry.title}}
    </a></li>
{%- endfor %}
    <li>{% if page.url != pagination.href.last %}<a href="{{ pagination.href.last }}">Last</a>{% else %}Last{% endif %}</li>
  </ul>
</nav>