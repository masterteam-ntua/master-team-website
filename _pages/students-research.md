---
layout: defaults/textpage
permalink: /students-research
narrow: false
header0: 
header1: Master of Science
header2: Translational Engineering in Health and Medicine
header3: Student Research
show_sidebar: false
---

<div class="container thesis-page">

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

  <div class="row mt-5 mb-5">
    <div class="col">
      <h3 class="mb-3 colored-main">
        Student Research
      </h3>

      <div class="completed-theses-list thesis-list">
        {% assign subjects = site.data.completed_thesis | sort: "Student" %}
        {% for subject in subjects %}
          <div class="completed-thesis-item">
            <button class="collapsible" type="button">
              <span class="thesis-title">
                {{ subject.Title }}
              </span>
              <span class="supervisor-name">
                {{ subject.Student }}
              </span>
            </button>

            <div class="content_c">
              <p><strong>Supervisor:</strong> {{ subject.Supervisor }}</p>
              <p><strong>Student:</strong> {{ subject.Student }}</p>
              <p><strong>Link:</strong> 
                <a href="{{ subject.Link }}" target="_blank">Artemis</a>
              </p>
            </div>
          </div>
        {% endfor %}
      </div>

    </div>
  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
</script>