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

<div class="container thesis-page">
  <div class="row my-3">
    <div class="col thesis-page-intro">
      <p>
        The undertaking of the Master's Thesis (MT) can take place after the end of the 2nd semester of
        the first year of studies, provided that the postgraduate student has successfully completed at
        least half of the postgraduate courses required for the acquisition of the Master's degree by that
        time.
      </p>

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
      </ul>
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

  <div class="row mt-5">
    <div class="col">
      <h3 class="mb-3 colored-main">
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

      <div id="availableThesesList" class="thesis-list">
        {% for subject in subjects %}
          {% capture searchable_text %}{{ subject.Title }} {{ subject.Text }} {{ subject.Related }}{% endcapture %}
          <div
            class="thesis-item"
            data-search="{{ searchable_text | strip_html | downcase | normalize_whitespace | escape }}"
            data-new="{% if subject.New %}true{% else %}false{% endif %}"
          >
            <button class="collapsible" type="button">
              <span class="thesis-title">
                {% if subject.New %}
                  <span class="new-label">(NEW)</span>
                {% endif %}
                {{ subject.Title }}
              </span>
              <span class="supervisor-name">{{ subject.Supervisor }}</span>
            </button>

            <div class="content_c">
              <p><strong>Supervisor:</strong> {{ subject.Supervisor }}</p>
              <p>{{ subject.Text }}</p>
              <p>{{ subject.Related }}</p>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>

  <div class="row mt-5 mb-5">
    <div class="col">
      <h3 class="mb-3 colored-main">
        Completed Theses
      </h3>

      <div class="completed-theses-list thesis-list">
        {% assign completed_subjects = site.data.completed_thesis | sort: "Sort" %}
        {% for subject in completed_subjects %}
          <div class="completed-thesis-item">
            <button class="collapsible" type="button">
              <span class="thesis-title">
                {{ subject.Title }}
              </span>
              <span class="supervisor-name">{{ subject.Supervisor }}</span>
            </button>

            <div class="content_c">
              <p><strong>Supervisor:</strong> {{ subject.Supervisor }}</p>
              <p><strong>Student:</strong> {{ subject.Student }}</p>
              <p><strong>Link:</strong> <a href="{{ subject.Link }}" target="_blank">Artemis</a></p>
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

  var searchInput = document.getElementById("thesisSearch");
  var supervisorFilter = document.getElementById("supervisorFilter");
  var newOnlyFilter = document.getElementById("newOnlyFilter");
  var clearButton = document.getElementById("clearThesisFilters");
  var resultCount = document.getElementById("thesisResultsCount");
  var thesisItems = document.querySelectorAll("#availableThesesList .thesis-item");

  function normalizeText(text) {
    return (text || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function extractSupervisorsFromItem(item) {
    var supervisorElement = item.querySelector(".supervisor-name");
    if (!supervisorElement) return [];

    var rawText = supervisorElement.textContent || "";
    return rawText
      .split(",")
      .map(function (name) {
        return name.replace(/\s+/g, " ").trim();
      })
      .filter(function (name) {
        return name.length > 0;
      });
  }

  function populateSupervisorFilter() {
    var supervisors = [];

    thesisItems.forEach(function (item) {
      var itemSupervisors = extractSupervisorsFromItem(item);

      itemSupervisors.forEach(function (name) {
        if (supervisors.indexOf(name) === -1) {
          supervisors.push(name);
        }
      });
    });

    supervisors.sort(function (a, b) {
      return a.localeCompare(b);
    });

    supervisors.forEach(function (supervisor) {
      var option = document.createElement("option");
      option.value = normalizeText(supervisor);
      option.textContent = supervisor;
      supervisorFilter.appendChild(option);
    });
  }

  function filterTheses() {
    var searchTerm = normalizeText(searchInput.value);
    var selectedSupervisor = normalizeText(supervisorFilter.value);
    var newOnly = newOnlyFilter.checked;
    var visibleCount = 0;

    thesisItems.forEach(function (item) {
      var baseSearchable = normalizeText(item.getAttribute("data-search"));
      var itemSupervisors = extractSupervisorsFromItem(item);
      var supervisorsSearchable = normalizeText(itemSupervisors.join(" "));
      var isNew = item.getAttribute("data-new") === "true";

      var searchable = baseSearchable + " " + supervisorsSearchable;

      var matchesSearch = !searchTerm || searchable.indexOf(searchTerm) !== -1;
      var matchesSupervisor =
        !selectedSupervisor ||
        itemSupervisors.some(function (name) {
          return normalizeText(name) === selectedSupervisor;
        });
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
    populateSupervisorFilter();

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