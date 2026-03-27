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
    grid-template-columns: 1fr;
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

.thesis-item.hidden {
  display: none;
}

/* Filter UI */
.thesis-filters-wrap {
  margin: 20px 0 18px 0;
}

.thesis-filters {
  display: grid;
  grid-template-columns: minmax(260px, 1.8fr) minmax(220px, 1fr) auto auto;
  gap: 12px;
  align-items: stretch;
}

.thesis-control {
  height: 46px;
  min-height: 46px;
  box-sizing: border-box;
  padding: 0 14px;
  border: 1px solid #d2d2d2;
  border-radius: 0;
  background: #fff;
  color: #444;
  font-size: 14px;
  line-height: 46px;
  box-shadow: none;
}

.thesis-control:focus {
  outline: none;
  border-color: #999;
}

.thesis-search-input {
  width: 100%;
}

.thesis-filter-select {
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #666 50%), linear-gradient(135deg, #666 50%, transparent 50%);
  background-position: calc(100% - 18px) calc(50% - 3px), calc(100% - 12px) calc(50% - 3px);
  background-size: 6px 6px, 6px 6px;
  background-repeat: no-repeat;
  padding-right: 34px;
}

.thesis-checkbox-wrap {
  display: flex;
  align-items: center;
  height: 46px;
  padding: 0 14px;
  border: 1px solid #d2d2d2;
  background: #fff;
  color: #444;
  font-size: 14px;
  box-sizing: border-box;
  white-space: nowrap;
}

.thesis-checkbox-wrap input {
  margin-right: 8px;
}

.thesis-clear-btn {
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.15s ease;
}

.thesis-clear-btn:hover {
  background-color: #f3f3f3;
}

#thesisResultsCount {
  margin: 12px 0 18px 0;
  font-size: 14px;
  color: #666;
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

  <div class="thesis-filters-wrap">
    <div class="thesis-filters">
      <input
        type="text"
        id="thesisSearch"
        class="thesis-control thesis-search-input"
        placeholder="Search by title, supervisor, keyword..."
        aria-label="Search available theses"
      >

      <select
        id="supervisorFilter"
        class="thesis-control thesis-filter-select"
        aria-label="Filter by supervisor"
      >
        <option value="">All supervisors</option>
        {% assign supervisor_names = "" | split: "|" %}
        {% for subject in subjects %}
          {% unless supervisor_names contains subject.Supervisor %}
            {% assign supervisor_names = supervisor_names | push: subject.Supervisor %}
          {% endunless %}
        {% endfor %}
        {% assign supervisor_names = supervisor_names | sort %}
        {% for supervisor in supervisor_names %}
          <option value="{{ supervisor | downcase }}">{{ supervisor }}</option>
        {% endfor %}
      </select>

      <label class="thesis-checkbox-wrap">
        <input type="checkbox" id="newOnlyFilter">
        NEW only
      </label>

      <button
        type="button"
        id="clearThesisFilters"
        class="thesis-control thesis-clear-btn"
      >
        Clear filters
      </button>
    </div>

    <p id="thesisResultsCount"></p>
  </div>

  <div id="availableThesesList">
    {% for subject in subjects %}
      {% capture searchable_text %}{{ subject.Title }} {{ subject.Supervisor }} {{ subject.Text }} {{ subject.Related }}{% endcapture %}
      <div
        class="thesis-item"
        data-search="{{ searchable_text | strip_html | downcase | normalize_whitespace | escape }}"
        data-supervisor="{{ subject.Supervisor | downcase | strip | escape }}"
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
    var selectedSupervisor = supervisorFilter.value.trim().toLowerCase();
    var newOnly = newOnlyFilter.checked;
    var visibleCount = 0;

    thesisItems.forEach(function (item) {
      var searchable = (item.getAttribute("data-search") || "").toLowerCase();
      var supervisor = (item.getAttribute("data-supervisor") || "").toLowerCase();
      var isNew = item.getAttribute("data-new") === "true";

      var matchesSearch = !searchTerm || searchable.indexOf(searchTerm) !== -1;
      var matchesSupervisor = !selectedSupervisor || supervisor === selectedSupervisor;
      var matchesNew = !newOnly || isNew;

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