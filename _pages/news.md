---
layout: defaults/page
permalink: /news
narrow: false
header0: MASTER
header1: TEAM
header2:
header3: News
---
<div>
    {% for post in site.posts %}
        {% include components/news-card.html %}
    {% endfor %}
</div>
