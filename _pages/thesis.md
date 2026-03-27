---
layout: defaults/textpage
permalink: /thesis
narrow: false
header0: 
header1: Master of Science
header2: Translational Engineering in Health and Medicine
header3: Theses
show_sidebar: false
---

<head>
<style>
@media (max-width: 768px) {
  .collapsible {
    flex-direction: column;
    align-items: flex-start;
  }

  .supervisor-name {
    text-align: left;
    margin-top: 8px;
    flex: 1 1 100%;
    white-space: normal;
  }

  .thesis-filters {
    flex-direction: column;
    align-items: stretch;
  }

  .thesis-search-input,
  .thesis-filter-select,
  .thesis-clear-btn {
    width: 100%;
  }
}

.collapsible {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #a3a3a3;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  font-size: 15px;
}

.thesis-title {
  flex: 1 1 65%;
  font-weight: bold;
}

.supervisor-name {
  flex: 0 0 35%;
  text-align: right;
  font-size: 0.9em;
  color: #e4aeb1;
  white-space: nowrap;
}

.new-label {
  color: #ffcb05;
  font-weight: bold;
  font-size: 0.85em;
  margin-left: 8px;
}

.collapsible:hover {
  background-color: #555;
}

.content_c {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
}

.thesis-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 1rem;
}

.thesis-search-input,
.thesis-filter-select {
  padding: 10px 12px;
  font-size: 14px;
  min-width: 240px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.thesis-checkbox {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 14px;
}

.thesis-clear-btn {
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #999;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
}

.thesis-clear-btn:hover {
  background-color: #f3f3f3;
}

.thesis-item.hidden {
  display: none;
}

#thesisResultsCount {
  font-size: 14px;
  color: #555;
}
</style>
</head>

<body>
<p>
The undertaking of the Master's Thesis (MT) can take place after the end of the 2nd semester of
the first year of studies, provided that the postgraduate student has successfully completed at
least half of the postgraduate courses required for the acquisition of the Master's degree by that
time.
</p><br>

<p>
The postgraduate student submits an <a href="{{ site.baseurl }}/forms">application</a>, including the proposed title of the MT, the
proposed supervisor, and an abstract of the proposed work.<br>
Diploma thesis evaluation:
</p>

<ul>
  <li class="mb-3">the thoroughness of the literature review.</li>
  <li class="mb-3">the collection of specific data (through laboratory experiments, field data collection, or the results of theoretical calculations).</li>
  <li class="mb-3">logical processing (e.g., processing of collected data, results of computational simulations, evaluation, and critical presentation of results).</li>
  <li class="mb-3">the structure of the thesis and its written presentation, e.g., the coherence of the text, the correct use of terminology and language, the precise formulation of concepts, the scientifically sound documentation of conclusions, etc.</li>
  <li class="mb-3">the originality of the thesis.</li>
  <li class="mb-3">the student's initiative.</li>
  <li class="mb-3">the oral presentation of the thesis and the response to the examination committee's questions.</li>  
</ul><br>

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

<div class="container mt-5">
  <h3 class="mt-5 mb-3 colored-main">
    Theses available for the Master Program
  </h3>

  {% assign subjects = site.data.thesis | sort: "Sort" %}
  {% assign supervisors = subjects | map: "Supervisor" | uniq | sort %}

  <div class="thesis-filters">
    <input
      type="text"
      id="thesisSearch"
      class="thesis-search-input"
      placeholder="Search by title, supervisor, keyword..."
      aria-label="Search available theses"
    >

    <select
      id="supervisorFilter"
      class="thesis-filter-select"
      aria-label="Filter by supervisor"
    >
      <option value="">All supervisors</option>
      {% for supervisor in supervisors %}
        <option value="{{ supervisor | downcase }}">{{ supervisor }}</option>
      {% endfor %}
    </select>

    <label class="thesis-checkbox">
      <input type="checkbox" id="newOnlyFilter">
      NEW only
    </label>

    <button type="button" id="clearThesisFilters" class="thesis-clear-btn">
      Clear filters
    </button>
  </div>

  <p id="thesisResultsCount"></p>

  <div id="availableThesesList">
    {% for subject in subjects %}
      <div
        class="thesis-item"
        data-title="{{ subject.Title | downcase | escape }}"
        data-supervisor="{{ subject.Supervisor | downcase | escape }}"
        data-text="{{ subject.Text | strip_html | downcase | escape }}"
        data-related="{{ subject.Related | strip_html | downcase | escape }}"
        data-new="{% if subject.New %}true{% else %}false{% endif %}"
      >
        <button class="collapsible">
          <span class="thesis-title">
            {% if subject.New %}
              <span class="new-label">(NEW) </span>
            {% endif %}
            {{ subject.Title }}
          </span>
          <span class="supervisor-name">{{ subject.Supervisor }}</span>
        </button>

        <div class="content_c">
          <p>Supervisor: {{ subject.Supervisor }}</p>
          <p>{{ subject.Text }}</p>
          <p>{{ subject.Related }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<div class="container mt-5">
  <h3 class="mt-5 mb-3 colored-main">
    Completed Theses
  </h3>
  
  {% assign completed_subjects = site.data.completed_thesis | sort: "Sort" %}
  {% for subject in completed_subjects %}
    <div class="completed-thesis-item">
      <button class="collapsible">
        <span class="thesis-title">
          {{ subject.Title }}
        </span>
        <span class="supervisor-name">{{ subject.Supervisor }}</span>
      </button>

      <div class="content_c">
        <p>Supervisor: {{ subject.Supervisor }}</p>
        <p>Student: {{ subject.Student }}</p>
        <p>Link: <a href="{{ subject.Link }}" target="_blank">Artemis</a></p>
      </div>
    </div>
  {% endfor %}
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

  var searchInput = document.getElementById("thesisSearch");
  var supervisorFilter = document.getElementById("supervisorFilter");
  var newOnlyFilter = document.getElementById("newOnlyFilter");
  var clearButton = document.getElementById("clearThesisFilters");
  var resultCount = document.getElementById("thesisResultsCount");
  var thesisItems = document.querySelectorAll("#availableThesesList .thesis-item");

  function filterTheses() {
    var searchTerm = searchInput.value.trim().toLowerCase();
    var selectedSupervisor = supervisorFilter.value;
    var newOnly = newOnlyFilter.checked;
    var visibleCount = 0;

    thesisItems.forEach(function (item) {
      var title = item.dataset.title || "";
      var supervisor = item.dataset.supervisor || "";
      var text = item.dataset.text || "";
      var related = item.dataset.related || "";
      var isNew = item.dataset.new === "true";

      var matchesSearch =
        !searchTerm ||
        title.indexOf(searchTerm) !== -1 ||
        supervisor.indexOf(searchTerm) !== -1 ||
        text.indexOf(searchTerm) !== -1 ||
        related.indexOf(searchTerm) !== -1;

      var matchesSupervisor =
        !selectedSupervisor || supervisor === selectedSupervisor;

      var matchesNew =
        !newOnly || isNew;

      var isVisible = matchesSearch && matchesSupervisor && matchesNew;

      if (isVisible) {
        item.classList.remove("hidden");
        visibleCount++;
      } else {
        item.classList.add("hidden");

        var button = item.querySelector(".collapsible");
        var content = item.querySelector(".content_c");
        if (button) {
          button.classList.remove("active");
        }
        if (content) {
          content.style.maxHeight = null;
        }
      }
    });

    resultCount.textContent = visibleCount + " thesis" + (visibleCount === 1 ? "" : "es") + " found";
  }

  if (searchInput && supervisorFilter && newOnlyFilter && clearButton) {
    searchInput.addEventListener("input", filterTheses);
    supervisorFilter.addEventListener("change", filterTheses);
    newOnlyFilter.addEventListener("change", filterTheses);

    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      supervisorFilter.value = "";
      newOnlyFilter.checked = false;
      filterTheses();
    });

    filterTheses();
  }
});
</script>
</body>