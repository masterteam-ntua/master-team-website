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
  <div class="row">
    <div class="col-12 col-lg-3">
      <div class="people-selector">
        <h3 class="text-center">Category</h3>
        <ul>
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
    <div class="col-12 col-lg-9">
      <div class="row">
        {% for person in site.data.people %}
          <div class="person {{ person.Category }} col-sm-4">
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
    </div>
  </div>
</div>

<script>
  window.onload = function() {
    let btn = document.getElementById('professors');
    this.chooseCategory(btn, 'Professors');
  }

  function chooseCategory(elem, category) {
    let btns = document.getElementsByClassName('selected');
    for (const btn of btns) {
      btn.classList.remove('selected');
    }
    elem.classList.add('selected');

    let persons = document.getElementsByClassName('person');
    for (const person of persons) {
      person.classList.add('d-none');
    }

    let chosen_ones = document.getElementsByClassName(category);
    for (const person of chosen_ones) {
      person.classList.remove('d-none');
    }
  }
</script>
