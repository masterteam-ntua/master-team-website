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
<div class="container mt-5" onload="chooseCategory(this, 'Administration')">
  <p>
    Hello from outer space.
  </p>
 <h3 class="mt-5 mb-3 colored-main">
    Secretariat of the Master Program
  </h3>
  <p>
    <a href="" data-toggle="modal" data-target="#kougkoulou-modal">Aimilia Kougkoulou</a>, Administrative Staff, School of Electrical and
    Computer Engineering, NTUA
  </p>

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
