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

.active, .collapsible:hover {
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
<div class="container mt-5">
 <h3 class="mt-5 mb-3 colored-main">
    Secretariat of the Master Program
  </h3>
  
  {% assign persons = site.data.people | where: "showOnlyInAdministration", True | sort: "Name" %}
  {% for person in persons%}
    <button class="collapsible">{{person.Name}}</button>
     <div class="content_c">
       <p>{{person.Bio}}</p>
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
