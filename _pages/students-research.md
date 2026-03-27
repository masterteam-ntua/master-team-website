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

  function closeContent(button, content) {
    button.classList.remove("active");
    content.style.maxHeight = null;
  }

  function openContent(button, content) {
    button.classList.add("active");
    content.style.maxHeight = content.scrollHeight + 40 + "px";
  }

  function closeAllExcept(currentButton) {
    for (var i = 0; i < coll.length; i++) {
      var button = coll[i];
      var content = button.nextElementSibling;

      if (button !== currentButton) {
        closeContent(button, content);
      }
    }
  }

  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      var isOpen = !!content.style.maxHeight;

      if (isOpen) {
        closeContent(this, content);
      } else {
        closeAllExcept(this);
        openContent(this, content);
      }
    });
  }

  window.addEventListener("resize", function () {
    for (var i = 0; i < coll.length; i++) {
      var button = coll[i];
      var content = button.nextElementSibling;

      if (button.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + 40 + "px";
      }
    }
  });
});
</script>