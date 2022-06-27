---
layout: defaults/page
permalink: /people
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
            <button type="button" id="all" class="btn btn-light" onclick="chooseCategory(this, 'All')">
              All
            </button>
          </li>
          <li>
            <button type="button" id="professors" class="btn btn-light" onclick="chooseCategory(this, 'Professors')">
              Professors
            </button>
          </li>
          <li>
            <button type="button" id="researchers" class="btn btn-light" onclick="chooseCategory(this, 'Researchers')">
              Researchers
            </button>
          </li>
          <li>
            <button type="button" id="collaborators" class="btn btn-light" onclick="chooseCategory(this, 'Collaborators')">
              Collaborators
            </button>
          </li>
          <li>
            <button type="button" id="staff" class="btn btn-light" onclick="chooseCategory(this, 'Staff')">
              Staff
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
        {% for person in site.data.people %}
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
      <div id="text-stuff" class="d-none">
        <p>
          The M.Sc. program "Translational Engineering in Health and Medicine" will be coordinated by the School of Electrical and Computer Engineering (ECE) of the National Technical University of Athens (NTUA), in collaboration with the School of Mechanical Engineering (ME) of NTUA. The administrative support of the program is provided by the School of Electrical and Computer Engineering of NTUA.
        </p>
        <h4>
          Dean of ECE NTUA
        </h4>
        <span> Nectarios Koziris, Professor, School of Electrical and Computer Engineering, NTUA <span>
        <h4>
          Special Interdepartmental Committee (SIC)
        </h4>
        <p>
        - Konstantina Nikita, Professor, School of Electrical and Computer Engineering, NTUA
        - George Matsopoulos, Professor, School of Electrical and Computer Engineering, NTUA
        - Giorgos Stamou, Professor, School of Electrical and Computer Engineering, NTUA
        - Leonidas Alexopoulos, Professor, School of Mechanical Engineering, NTUA
        - Christos Manopoulos, Professor, School of Mechanical Engineering, NTUA
        </p>

        President of SIC

        - Konstantina Nikita, Professor, School of Electrical and Computer Engineering, NTUA


        Steering Committee (SC)

        - Konstantina Nikita, Professor, School of Electrical and Computer Engineering, NTUA
        - George Matsopoulos, Professor, School of Electrical and Computer Engineering, NTUA
        - Giorgos Stamou, Professor, School of Electrical and Computer Engineering, NTUA
        - Leonidas Alexopoulos, Professor, School of Mechanical Engineering, NTUA
        - Christos Manopoulos, Professor, School of Mechanical Engineering, NTUA


        Director of the Master Program

        - Konstantina Nikita, Professor, School of Electrical and Computer Engineering, NTUA


        Deputy Director of the Master Program

        - Leonidas Alexopoulos, Professor, School of Mechanical Engineering, NTUA


        Secretariat of the Master Program

        - Maria Kleanthi, Administrative Staff, School of Electrical and Computer Engineering, NTUA


        Secretariat of ECE NTUA

        - Effrosyni Kanta, Administrative Staff, School of Electrical and Computer Engineering, NTUA
      </div>
    </div>
  </div>
</div>

<script>
  window.onload = function() {
    let btn = document.getElementById('all');
    this.chooseCategory(btn, 'All');
  }

  function chooseCategory(elem, category) {
    let spinner = document.getElementById('spinner-container');
    let peopleGrid = document.getElementById('people-grid');

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
      peopleGrid.classList.remove('d-none');
    }
    else if (category == "Staff") {
      peopleGrid.classList.add('d-none');
      let stuff = document.getElementById('text-stuff');
      stuff.classList.remove('d-none');

    }
    else {
      for (const person of persons) {
        person.classList.add('d-none');
      }
      let chosen_ones = document.getElementsByClassName(category);
      for (const person of chosen_ones) {
        person.classList.remove('d-none');
      }
      peopleGrid.classList.remove('d-none');

    }

    spinner.classList.add('d-none');
    // peopleGrid.classList.remove('d-none');
  }
</script>
