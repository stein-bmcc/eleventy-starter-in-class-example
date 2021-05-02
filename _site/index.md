---
title: Homepage
date: Created
layout: base
tags:
  - home
  - welcome
  - info
---


<main>
  <section class="philosophy">
    <div class="sectionImage">
      <img src="https://via.placeholder.com/300" alt="">
    </div>
    <div class="sectionInfo">
      <h2>Philosophy</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas aut incidunt soluta facere eius quis minima cumque exercitationem quaerat id quo sequi, beatae cupiditate ducimus doloremque, culpa laborum corporis.</p>
      <button>Learn More</button>
    </div>
  </section>
    
  <section class="mission">
      <h2>Mission Statement</h2>
      <p class="missionDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti nesciunt beatae, iusto perferendis, 
      </p>
      <div class="feature">
        feature 1
      </div>
      <div class="feature">
        feature 2
      </div>
      <div class="feature">
        feature 3
      </div>
  </section>
    
  <section class="featuredEvent">
    
  </section>
  
  <section class="blog">
    <h2>Blog</h2>
    <ul>
    {%- for post in collections.post -%}
      <li><a href="{{ post.url }}">{{ post.data.title }}</a>
        <p>{{ post.data.summary}}</p>
      </li>
    {%- endfor -%}
    </ul>


  <h2>Blog Again</h2>
   <ul>
    {%- for post in collections.articles -%}
      <li><a href="{{ post.url }}">{{ post.data.title }}</a>
        <p>{{ post.data.summary}}</p>
      </li>
    {%- endfor -%}
    </ul>
  </section>
  
  <section class="join">
    <h2>People</h2>
    <ul>
    {%- for person in collections.person -%}
      <li><a href="{{ person.url }}">{{ person.data.fullname }}</a>
        <p>Age: {{ person.data.age}}
        <br>
        Location: {{person.data.location}}</p>
      </li>
    {%- endfor -%}
    </ul>
  </section>
</main>

<footer>
  
</footer>