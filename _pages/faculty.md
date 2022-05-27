---
layout: defaults/page
permalink: /faculty
narrow: false
header0: MASTER
header1: TEAM
header2:
header3: Faculty
show_sidebar: false
---
<div class="container faculty-section mt-5">
  <div class="row">
    {% for person in site.data.people %}
      <div class="col-sm-4">
        {% include components/person-card.html 
          name= person.Name
          image= person.Image
          title= person.Title1
          description= person.Title2
          website= person.Website
          phone= person.Phone
          email= person.Email
          cv= person.Bio
          modalId= person.modalId
        %}
      </div>
    {% endfor %}
  </div>
</div>
