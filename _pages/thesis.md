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
The postgraduate student submits an application (εδώ βάλε link στα forms), including the proposed title of the MT, the
proposed supervisor, and an abstract of the proposed work.<br>
Diploma thesis evaluation:
</p>
<ul>
  <li>the thoroughness of the literature review.</li>
  <li>the collection of specific data (through laboratory experiments, field data collection, or the results of theoretical calculations).</li>
  <li>logical processing (e.g., processing of collected data, results of computational simulations, evaluation, and critical presentation of results).</li>
  <li>the structure of the thesis and its written presentation, e.g., the coherence of the text, the correct use of terminology and language, the precise formulation of concepts, the scientifically sound documentation of conclusions, etc.</li>
  <li>the originality of the thesis.</li>
  <li>the student's initiative.</li>
  <li>the oral presentation of the thesis and the response to the examination committee's questions.</li>  
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
  
  {% assign subjects = site.data.thesis | sort: "Sort"%}
  {% for subject in subjects%}
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
       <p>Supervisor: {{subject.Supervisor}}</p>
       <p>{{subject.Text}}</p>
       <p>{{subject.Related}}</p>
     </div>
  {% endfor %}
</div>

<div class="container mt-5">
 <h3 class="mt-5 mb-3 colored-main">
    Completed Theses
  </h3>
  
  {% assign subjects = site.data.completed_thesis | sort: "Sort"%}
  {% for subject in subjects%}
    <button class="collapsible">
     <span class="thesis-title">
        {{ subject.Title }}
      </span>
      <span class="supervisor-name">{{ subject.Supervisor }}</span>
    </button>
     <div class="content_c">
       <p>Supervisor: {{subject.Supervisor}}</p>
       <p>Student: {{subject.Student}}</p>
       <p>Link: <a href="{{subject.Link}}" target="_blank">Artemis</a></p>
     </div>
  {% endfor %}
</div>

<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
</script>
</body>
