---
layout: defaults/textpage
permalink: /cdavatzikos-event
narrow: false
header0:
header1: Master of Science
header2: Translational Engineering in Health and Medicine
header3: Machine learning in Neuroimaging
youtubeId: u8YTTOCh24s
---
<div class="container">
    <style>
        .centered-tables {
            display: flex;
            justify-content: center;
        }
        .left-aligned {
            text-align: left;
        }
        .center-aligned {
            text-align: center;
        }
        .custom-table {
            width: 100%;
        }
        .table-container {
            width: 80%;
            margin: auto;
        }
        .team-member {
            display: flex;
            flex-direction: row;
        }
        .team-member-img {
            max-width: 20%;
            margin-right: 20px;
            object-fit: cover;
        }
        .sponsor-logos {
            display: flex; /* Use Flexbox */
            justify-content: space-around; /* Distribute logos evenly across the row */
            align-items: center; /* Center logos vertically */
            flex-direction: row;
        }
        .sponsor-logo-img {
            max-width: 20%; /* Ensure the image is not larger than its container */
            height: auto; /* Maintain aspect ratio */
        }
        @media screen and (max-width: 600px) {
            .team-member {
                flex-direction: column;
            }
            .team-member-img {
                max-width: 80%;
                margin-right: auto;
                object-fit: cover;
            }
            .sponsor-logos {
                flex-direction: column;
            }
            .sponsor-logo-img {
                max-width: 80%; /* Ensure the image is not larger than its container */
                height: auto; /* Maintain aspect ratio */
            }
        }
    </style>
    <div class="row subject-block centered-tables">
        <h1>
            Machine learning in Neuroimaging
        </h1>
        <div class="center-aligned">
            <h3>
                Emphasis on aging and dementia, neuropsychiatric disorders, and brain cancer.
            </h3>
            <br>
            <p>
                Multimedia Amphitheatre, Central Library, Zografou Campus
            </p>
        </div>
    </div>
    <div class="embed-container">
      <iframe
          src="https://www.youtube.com/embed/{{page.youtubeId}}"
          width="700"
          height="480"
          frameborder="0"
          allowfullscreen="true">
      </iframe>
    </div>
</div>
