---
layout: defaults/textpage
permalink: /thesis
narrow: false
header0: MASTER
header1: TEAM
header2:
header3: People
show_sidebar: false
---
<div class="container mt-5">
  <div class="row mb-5">
    <div class="col-12">
      <div class="people-selector">
        <ul>
          <li>
            <button type="button" id="staff" class="btn btn-light" onclick="chooseCategory(this, 'Administration')">
              Administration
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div id="spinner-container" class="row justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div id="people-grid" class="row d-none">
        {% assign persons = site.data.people | where: "showOnlyInAdministration", false | sort: "Name" %}
        {% for person in persons %}
          <div class="person {{ person.Category }} col-12 col-sm-6 col-md-6 col-lg-4">
            {% include components/person-card.html
              name = person.Name
              image = person.Image
              title = person.Title1
              description = person.Title2
              website = person.Website
              phone = person.Phone
              email = person.Email
              cv = person.Bio
              modalId = person.modalId
            %}
          </div>
        {% endfor %}
      </div>
      <div id="text-staff" class="d-none">
        <p>
          The M.Sc. in Translational Engineering in Health and Medicine at the National Technical University of Athens (NTUA) is organized by the
          School of Electrical and Computer Engineering (ECE) of NTUA, in collaboration with the School of Mechanical Engineering (ME) of NTUA. The
          administrative support of the program is provided by the School of Electrical and Computer Engineering of NTUA.
        </p>

        <h3 class="mt-5 mb-3 colored-main">
          Director of the Master Program
        </h3>
        <p>
          <a href="" data-toggle="modal" data-target="#nikita-modal">Konstantina Nikita</a>, MEng, MD, PhD, Professor, School of Electrical and Computer
          Engineering, NTUA
        </p>

        <h3 class="mt-5 mb-3 colored-main">
          Secretariat of the Master Program
        </h3>
        <p>
          <a href="" data-toggle="modal" data-target="#kougkoulou-modal">Aimilia Kougkoulou</a>, Administrative Staff, School of Electrical and
          Computer Engineering, NTUA
        </p>


        <h3 class="mt-5 mb-3 colored-main">
          Studies Committee
        </h3>
        <p>
          <a href="" data-toggle="modal" data-target="#alexopoulos-modal">Leonidas Alexopoulos</a>, Associate Professor, School of
          Mechanical Engineering, NTUA
        </p>
        <p>
          <a href="" data-toggle="modal" data-target="#manopoulos-modal">Christos Manopoulos</a>, Assistant Professor, School of Mechanical
          Engineering, NTUA
        </p>
        <p>
          <a href="" data-toggle="modal" data-target="#matsopoulos-modal">George Matsopoulos</a>, Professor, School of Electrical and
          Computer Engineering, NTUA
        </p>
        <p>
          <a href="" data-toggle="modal" data-target="#nikita-modal">Konstantina Nikita</a>, Professor, School of Electrical and Computer
          Engineering, NTUA
        </p>
        <p>
          <a href="" data-toggle="modal" data-target="#stamou-modal">Giorgos Stamou</a>, Professor, School of Electrical and Computer Engineering, NTUA
        </p>



        <h3 class="mt-5 mb-3 colored-main">
          Chair of the Studies Committee
        </h3>
        <p>
          <a href="" data-toggle="modal" data-target="#nikita-modal">Konstantina Nikita</a>, MEng, MD, PhD, Professor, School of Electrical and Computer
          Engineering, NTUA
        </p>


        <h3 class="mt-5 mb-3 colored-main">
          Dean of the School of Electrical and Computer Engineering
        </h3>
        <p>
          <a href="" data-toggle="modal" data-target="#tsanakas-modal">Panayiotis Tsanakas</a>, Professor, School of Electrical and Computer
          Engineering, NTUA
        </p>



        <h3 class="mt-5 mb-3 colored-main">
          Secretariat of the School of Electrical and Computer Engineering
        </h3>
        <p>
          <a href="" data-toggle="modal" data-target="#kanta-modal">Effrosyni Kanta</a>, Administrative Staff, School of Electrical and Computer Engineering, NTUA
        </p>
      </div>
    </div>
  </div>
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

<script>
  window.onload = function() {
    let btn = document.getElementById('all');
    this.chooseCategory(btn, 'All');
  }

  function chooseCategory(elem, category) {
    let spinner = document.getElementById('spinner-container');
    let peopleGrid = document.getElementById('people-grid');
    let staff = document.getElementById('text-staff');

    spinner.classList.remove('d-none');
    peopleGrid.classList.add('d-none');

    let btns = document.getElementsByClassName('selected');
    for (const btn of btns) {
      btn.classList.remove('selected');
    }
    elem.classList.add('selected');

    let persons = document.getElementsByClassName('person');
    if (category === 'All') {
      for (const person of persons) {
        person.classList.remove('d-none');
      }
      staff.classList.add('d-none');
    }
    else if (category == 'Administration') {
      for (const person of persons) {
        person.classList.add('d-none');
      }
      staff.classList.remove('d-none');
    }
    else {
      for (const person of persons) {
        person.classList.add('d-none');
      }
      let chosen_ones = document.getElementsByClassName(category);
      for (const person of chosen_ones) {
        person.classList.remove('d-none');
      }
      staff.classList.add('d-none');
    }
    spinner.classList.add('d-none');
    peopleGrid.classList.remove('d-none');
  }
</script>
