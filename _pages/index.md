---
layout: defaults/page
permalink: /
narrow: false
header0:
header1: Master of Science
header2: Translational Engineering in Health and Medicine
header3: National Technical University of Athens
show_sidebar: false
---
<div class="container pb-5">
    <div class="row">
        <div class="col-lg-8 col-sm-12 pl-0 pr-0">
            <div class="col-12">
                <h2>Welcome to our Master TEAM</h2>
                <p>
                    Translational Engineering is the process of translating engineering research findings
                    and discoveries into innovations and functional products. Applications of Translational
                    Engineering in Health and Medicine focus on the development of devices and services to
                    improve the public and individual health.
                </p>
                <p>
                    The M.Sc. in Translational Engineering in Health and Medicine, organized by the <a href="https://www.ece.ntua.gr/en"><strong>School of Electrical and Computer Engineering</strong></a> of the <a href="https://www.ntua.gr/en/"><strong>National Technical University of Athens</strong></a> (NTUA), in collaboration with the <a href="http://www.mech.ntua.gr/en/"><strong>School of Mechanical Engineering</strong></a>, is designed to prepare students to pioneer the transformation of innovative technologies into commercial devices and services with a significant socioeconomic impact in the field of Health. The program builds on NTUA's decades of foundational work in biomedical engineering and science and focuses on cultivating deep knowledge and catalyzing interdisciplinary efforts to address urgent healthcare challenges.
                </p>
                <p>
                    Students study and work on cutting-edge topics in biomedical data science and artificial
                    intelligence, neuroengineering, multiscale modeling, digital health, intelligent reality, healthcare
                    robotics, and biomedical microelectromechanical systems (BioMEMs) among others. The curriculum focuses
                    on instilling entrepreneurial and leadership skills in students as well as exposing them to all of the
                    steps involved in translating research discoveries into innovative medical products and services.
                    The program fosters a multidisciplinary and multisectoral approach through student internships in
                    research labs, clinical departments, and industry.
                </p>
            </div>
            <div class="col-12">
                <h2>Who can apply?</h2>
                <p>
                    Do you have a degree in Engineering, Life Sciences, or a similar field? Are you interested in
                    discovering new knowledge at the interface of Engineering and Life Sciences? Do you enjoy
                    working in multidisciplinary teams to develop breakthrough health-tech products and services?
                    Are you looking for an academically rigorous training that will allow you to apply real-time
                    your knowledge for an accelerated impact in healthcare? Then, you are welcome to apply!
                </p>
            </div>
        </div>
        <div class="col-lg-4 col-sm-12 pl-3 pr-0">
            <div class="card text-white background-color-main border-0">
                <div class="card-body grey-box">
                    <h5 class="card-title text-center">KEY INFORMATION</h5>
                    <div class="d-flex flex-column card-text text-center">
                        <label class="mb-0"><strong>Duration:</Strong> 18 months</label>
                        <label class="mb-0"><strong>Start Date:</Strong> October 2022</label>
                        <label class="mb-0"><strong>Location:</Strong> NTUA Campus</label>
                        <label class="mb-0"><strong>Language:</Strong> English</label>
                        <label class="mb-0"><strong>ECTS:</Strong> 90 credits</label>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4 px-0">
                <a href="{{ site.baseurl }}/admissions" role="button" class="btn btn-custom">
                    <i class="fa-regular fa-pen-to-square fa-lg mr-2"></i>Apply
                </a>
                <a href="{{ site.baseurl }}/files/MasterTEAM-Brochure.pdf" role="button" class="btn btn-custom mt-3" download>
                    <i class="fa-solid fa-download fa-lg mr-2"></i>Brochure
                </a>
            </div>
        </div>
    </div>
    <div class="row mt-4 pl-2">
        <div class="custom-information-box col-12 px-0">
            <div class="row">
                <div class="information-box-component col">
                    <label class="title">
                        FACULTY
                    </label>
                    <p class="text">
                        Learn from professors and researchers from top-ranking engineering Schools at a world-class technical University.
                    </p>
                </div>
                <div class="information-box-component col">
                    <label class="title">
                        CURRICULUM
                    </label>
                    <p class="text">
                        Academically rigorous coursework that links research-backed concepts to practice and accelerates impact in the healthcare domain.
                    </p>
                </div>
                <div class="information-box-component col">
                    <label class="title">
                        ENTREPRENEURSHIP
                    </label>
                    <p class="text">
                        Cultivate entrepreneurial skills to deliver high-impact solutions powered by deep science and technology.                   
                    </p>
                </div>
                <div class="information-box-component col">
                    <label class="title">
                        GLOBAL NETWORK
                    </label>
                    <p class="text">
                        Gain hands-on experience in the healthcare domain and build your professional network by interacting and connecting with a diverse community of experts from the industry, clinical sector, and regulatory bodies.                    
                    </p>
                </div>
                <div class="information-box-component col">
                    <label class="title">
                        STRATEGIC COLLABORATIONS
                    </label>
                    <p class="text">
                        Opportunities for internships and a richer academic experience are available to students through a strategic collaboration with Columbia University and the support of the Bodossakis Foundation.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="carousel carousel-desktop slide w-100" data-ride="false" data-interval="false" id="postsCarouselDesktop">
            <div class="row align-items-center">
                <div class="col-lg-10 col-8">
                    <h2>Latest news</h2>
                </div>
                <div class="col-lg-2 col-4 text-md-right lead d-flex justify-content-end">
                    <a class="btn btn-carousel prev-desk" title="go back">
                        <i class="fa-solid fa-chevron-left fa-lg colored-main"></i>
                    </a>
                    <a class="btn btn-carousel next-desk" title="more">
                        <i class="fa-solid fa-chevron-right fa-lg colored-main"></i>
                    </a>
                </div>
            </div>
            <div class="row pt-0 mt-2">
                <div class="carousel-inner">
                    {% capture numberOfSlidesFloat %}{{ site.posts.size | divided_by: 4.0 }}{% endcapture %}
                    {% capture numberOfSlides %}{{ numberOfSlidesFloat | ceil }}{% endcapture %}
                    {% for slide in (1..numberOfSlides) %}
                        <div class='{% if slide == 1 %}carousel-item active{% else %}carousel-item{% endif %}'>
                            <div class="card-deck news-cards-container">
                                {% assign off = slide | minus: 1 | times: 4 %}
                                {% for post in site.posts limit: 4 offset: off %}
                                    {% include components/news-card.html %}
                                {% endfor %}
                            </div>
                        </div>
                    {% endfor %}
                </div>
            </div>
        </div>
        <div class="carousel carousel-mobile slide w-100" data-ride="false" data-interval="false" id="postsCarouselMobile">
            <div class="row align-items-center">
                <div class="col-lg-10 col-8">
                    <h2>Latest news</h2>
                </div>
                <div class="col-lg-2 col-4 text-md-right lead d-flex justify-content-end">
                    <a class="btn btn-carousel prev-mob" title="go back">
                        <i class="fa-solid fa-chevron-left fa-lg colored-main"></i>
                    </a>
                    <a class="btn btn-carousel next-mob" title="more">
                        <i class="fa-solid fa-chevron-right fa-lg colored-main"></i>
                    </a>
                </div>
            </div>
            <div class="row pt-0 mt-2">
                <div class="carousel-inner">
                    {% for slide in (1..site.posts.size) %}
                        <div class='{% if slide == 1 %}carousel-item active{% else %}carousel-item{% endif %}'>
                            <div class="card-deck news-cards-container">
                                {% assign off = slide | minus: 1 %}
                                {% for post in site.posts limit: 1 offset: off %}
                                    {% include components/news-card.html %}
                                {% endfor %}
                            </div>
                        </div>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5 pl-2">
        <h2>Sign up for email updates on the program and upcoming events</h2>
        <div id="mc_embed_signup" class="form-container">
            <form action="https://ntua.us12.list-manage.com/subscribe/post?u=2294fad3462396a281ff35e61&amp;id=edfa3a462d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group form-group">
                        <label for="mce-EMAIL" class="font-weight-bold">Email Address <span class="asterisk colored-main">*</span></label>
                        <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="Enter e-mail address" required>
                    </div>
                    <div class="mc-field-group form-group">
                        <label for="mce-FNAME" class="font-weight-bold">First Name <span class="asterisk colored-main">*</span></label>
                        <input type="text" value="" name="FNAME" class="required form-control" id="mce-FNAME" placeholder="Enter first name" required>
                    </div>
                    <div class="mc-field-group form-group">
                        <label for="mce-LNAME" class="font-weight-bold">Last Name <span class="asterisk colored-main">*</span></label>
                        <input type="text" value="" name="LNAME" class="required form-control" id="mce-LNAME" placeholder="Enter last name" required>
                    </div>
                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2294fad3462396a281ff35e61_edfa3a462d" tabindex="-1" value=""></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary">Submit</button>
                            <span class="indicates-required float-right font-italic pt-2"><span class="asterisk colored-main font-weight-bold">*</span> indicates required</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
<script type='text/javascript'>
    (function ($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = "EMAIL";
        ftypes[0] = "email";
        fnames[1] = "FNAME";
        ftypes[1] = "text";
        fnames[2] = "LNAME";
        ftypes[2] = "text";
        fnames[3] = "ADDRESS";
        ftypes[3] = "address";
        fnames[4] = "PHONE";
        ftypes[4] = "phone";
        fnames[5] = "BIRTHDAY";
        ftypes[5] = "birthday";
        fnames[6] = "MMERGE6";
        ftypes[6] = "dropdown";
        fnames[7] = "MMERGE7";
        ftypes[7] = "address";
    })(jQuery);
    var $mcj = jQuery.noConflict(true);
</script>

<script>
    // desktop carousel controls
    $('.next-desk').click(function(){ $('.carousel-desktop').carousel('next');return false; });
    $('.prev-desk').click(function(){ $('.carousel-desktop').carousel('prev');return false; });
    // mobile carousel controls
    $('.next-mob').click(function(){ $('.carousel-mobile').carousel('next');return false; });
    $('.prev-mob').click(function(){ $('.carousel-mobile').carousel('prev');return false; });
</script>
