---
layout: defaults/page
permalink: /news
narrow: false
header0: MASTER
header1: TEAM
header2:
header3: News
---
<div class="news-cards-container">
    {% capture numberOfSlidesFloat %}{{ site.posts.size | divided_by: 4.0 }}{% endcapture %}
    {% capture numberOfSlides %}{{ numberOfSlidesFloat | ceil }}{% endcapture %}
    {% for batch in (1..numberOfSlides) %}
        <div id='batch-{{batch}}' class='card-batch-container {% if batch == 1 %}row{% else %}hidden{% endif %}'>
            {% assign off = batch | minus: 1 | times: 4 %}
            {% for post in site.posts limit: 4 offset: off %}
                {% include components/news-card.html %}
            {% endfor %}
        </div>
    {% endfor %}
</div>
<div class="text-center mt-3 mr-5">
    <button id="btn-loadmore" type="button" class="btn btn-primary" onClick="loadMore()">Load More</button>
</div>

<script>
    var batchNum = 1;
    const totalBatches = {{ numberOfSlides }};

    function loadMore() {
        batchNum++;
        let elem = document.getElementById(`batch-${batchNum}`);
        elem.classList.add('row');
        elem.classList.remove('hidden');
        if (batchNum == totalBatches) {
            let btn = document.getElementById('btn-loadmore');
            btn.classList.add('hidden');
        }
    }
</script>
