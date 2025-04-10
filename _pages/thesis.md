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
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
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
    <button class="collapsible">{{subject.Title}}</button>
     <div class="content_c">
       <p>Supervisor: {{subject.Supervisor}}</p>
       <p>{{subject.Text}}</p>
       <p>{{subject.Related}}</p>
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
