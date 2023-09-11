---
layout: defaults/textpage
permalink: /thesis
narrow: false
header0: MASTER
header1: TEAM
header2:
header3: Thesis
show_sidebar: false
---
<div class="container mt-5">
 <h3 class="mt-5 mb-3 colored-main">
    Secretariat of the Master Program
  </h3>
  {% assign persons = site.data.people | where: "showOnlyInAdministration", True | sort: "Name" %}
  {% for person in persons%}
    <p>
      <a href="" data-toggle="modal" data-target="{{person.modalId}}">{{person.Name}}</a>, Administrative Staff, School of Electrical and
      Computer Engineering, NTUA
    </p>
  {% endfor %}

  <!-- Modals -->
  {% for person in site.data.people %}
    {% include components/person-modal.html
      name = person.Name
      image = person.Image
      title = person.Title1
      description = person.Title2
      website = person.Website
      phone = person.Phone
      email = person.Email
      office = person.Office
      cv = person.Bio
      modalId = person.modalId
    %}
  {% endfor %}
</div>
