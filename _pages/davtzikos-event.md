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
    <div class="container">
        <div class="row flex-column">
            <p>
                Prof. Christos Davatzikos, Director of the AI2D Center for AI and Data Science for Integrated Diagnostics, University of Pensylvania, to give a lecture at ECE-NTUA on December 8th, 2025, at 16:30 (Multimedia Amphitheatre, Ground Floor, Central Library, Zografos campus)<br>
                Abstract: Neuroimaging has significantly expanded our understanding of brain changes in neuropsychiatric disorders as well as in aging and neurodegenerative diseases. However, it wasn’t until the advent of machine learning tools that imaging signatures that can be detected in individuals, rather than groups, were constructed. This talk will present work on deriving imaging signatures of diagnostic and predictive value. It will then focus on weakly-supervised machine learning methods for analysis of the heterogeneity of brain imaging phenotypes, arriving at a dimensional representation reflecting the heterogeneity of brain aging and of various brain diseases. Finally, international consortia pooling and harmonizing large numbers of brain MRIs from many studies are presented as means for creating sufficiently large datasets for robust machine learning training and heterogeneity analysis, but also pose new challenges, including that or harmonization across studies. The talk will also describe work on radiomics of glioblastoma, and its use for guidance of personalized treatment.<br><br>
                Short Bio: Christos Davatzikos is the Wallace T. Miller Sr. Professor of Radiology at the University of Pennsylvania, and Director of the recently founded AI2D Center for AI and Data Science for Integrated Diagnostics. He has been the Founding Director of the Center for Biomedical Image Computing and Analytics since 2013, and the director of the AIBIL lab (AI in Biomedical Imaging). He holds a secondary appointment in Electrical and Systems Engineering and in the Division of Informatics at Penn as well as at the Bioengineering and Applied Mathematics graduate groups. He obtained his undergraduate degree by the National Technical University of Athens, Greece in 1989, and his Ph.D. degree from Johns Hopkins, in 1994, on a Fulbright scholarship. He then joined the faculty in Radiology and later in Computer Science, where he founded and directed the Neuroimaging Laboratory. In 2002 he moved to Penn, where he founded and directed the section of biomedical image analysis. Dr. Davatzikos’ interests are in medical image analysis. He oversees a diverse research program ranging from basic problems of imaging pattern analysis and machine learning, to a variety of clinical studies of aging and Alzheimer’s Disease, schizophrenia, brain cancer, and brain development. Dr. Davatzikos has served on a variety of scientific journal editorial boards and grant review committees. He is an IEEE fellow, a fellow of the American Institute for Medical and Biological Engineering, and member of the council of distinguished investigators of the US Academy of Radiology and Biomedical Imaging Research.
            </p>
        </div>
    </div>
</div>
