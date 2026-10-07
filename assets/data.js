/* Content data for the two "View my work in" personas: Research and Wellness. */

const PERSONAS = {
  research: {
    tagline: "Research engineer spanning computational biology, multi-omic data integration, and ML systems.",
    summaryParagraphs: [
      "Curious, experienced research engineer with 8+ years of experience spanning multiple modalities of data " +
        "in or adjacent to biotech, pharma, and healthcare. I develop computational methods and pipelines for " +
        "single-cell genomics, statistical genetics, multi-omic data integration for companion diagnostic " +
        "development, and translational biomarker discovery.",
      "References available on request. I thrive in environments that are cross-functional, learning from " +
        "close collaborations with translational scientists.",
      "My scientific training and curiosity are informed by my immersion in wellness, and vice versa.",
    ],
    resumes: [
      { label: "Résumé", href: "assets/resume-biology.pdf" },
    ],
    experienceHeading: "Experience",
    skillsHeading: "Skills",
    showExperience: true,
    showSkills: true,
    showPublications: true,
    showContact: true,
    showPoems: false,
    skills: [
      { label: "Data", items: ["Single-cell & bulk RNA-seq", "GWAS", "Single-cell genetic perturbation screens", "H&E and IHC histopathology slides", "Large-scale imaging data"] },
      { label: "AI / ML", items: ["Deep learning", "Computer vision", "Foundation models", "Multimodal learning", "Representation learning", "NLP", "Graph neural networks", "Bayesian ML", "Statistical learning"] },
      { label: "Engineering", items: ["Python (pandas, numpy, scikit-learn, PyTorch, TensorFlow)", "R", "SQL", "Shell", "Docker", "Git", "MLflow", "Weights & Biases", "Nextflow", "CI/CD"] },
      { label: "Cloud / Infrastructure", items: ["AWS", "Google Cloud Storage", "Parquet", "Zarr", "DuckDB"] },
    ],
    experience: [
      {
        company: "Merck & Co.",
        role: "Senior Scientist, Machine Learning",
        location: "Boston, MA",
        start: "Dec 2023",
        end: "Present",
        bullets: [
          "Lead machine learning initiatives spanning single-cell genomics, genetic perturbation modeling, multimodal AI, and computer vision for large-scale biomedical data analysis.",
          "Develop single-cell RNA-seq models for genetic perturbation response, linking perturbation-driven transcriptional programs and learned representations to candidate biological mechanisms for target discovery and prioritization.",
          "Design and build cell segmentation and whole-slide image processing pipelines for H&E histopathology — including patch extraction, tissue masking, coordinate stores, and GPU-accelerated inference — to derive imaging biomarkers for translational and companion diagnostics applications.",
          "Build and optimize high-throughput data pipelines using PyTorch, Parquet, Zarr, GCS, local NVMe caching, and resumable processing patterns for large imaging and molecular datasets.",
          "Apply ML and statistical methods to high-dimensional molecular datasets with an emphasis on interpretable, robust, and reproducible biological insights, including reproducible experimentation, data validation, and performance diagnostics.",
          "Collaborate with computational biologists, translational scientists, and ML engineers to align perturbation modeling and platform development with target discovery and mechanistic interpretation objectives.",
        ],
      },
      {
        company: "Prometheus Biosciences",
        sub: "A wholly-owned subsidiary of Merck & Co. Inc.",
        role: "Machine Learning Engineer",
        location: "San Diego, CA",
        start: "Jun 2022",
        end: "Dec 2023",
        bullets: [
          "Led development of Minerva, a multimodal companion diagnostics (CDx) discovery platform within Prometheus360, enabling versioned, reproducible, and extensible model development across heterogeneous -omics datasets.",
          "Architected scalable Nextflow pipelines for whole-genome scanning, QTL analysis, and evidence meta-analysis to prioritize SNP features for downstream CDx modeling and machine learning.",
          "Built Bayesian classification and genotype clustering workflows for predictive modeling downstream of SNP discovery and companion diagnostic feature selection.",
          "Served as a technical bridge between ML engineering, immunology, computational biology, radiology, and -omics experts to align multimodal methods and platform development with translational priorities and biomarker strategy.",
        ],
      },
      {
        company: "Fresenius Medical Care North America",
        role: "Machine Learning Engineer",
        location: "Remote / Boston, MA",
        start: "Oct 2020",
        end: "May 2022",
        bullets: [
          "Built cloud-based ML platform capabilities for an internal AI workbench on AWS, enabling scalable model monitoring and faster analytical iteration across cross-functional teams.",
          "Developed reusable ML infrastructure and tooling to accelerate adoption of cloud-native workflows, deployment, and monitoring.",
          "Built a Python-based NLP model for unstructured clinical text that captured 40+ previously unreported annual abdominal pain events, improving downstream clinical signal detection.",
        ],
      },
      {
        company: "ZS",
        sub: "Business Technology Group",
        role: "Data Analyst",
        location: "Pune, India",
        start: "Jul 2016",
        end: "May 2018",
        bullets: [
          "Built and maintained production ETL pipelines using Shell, PostgreSQL, AWS Redshift, and workflow automation for client-facing analytics platforms.",
          "Reduced front-end processing time by 70% on a business rules platform through performance-focused workflow redesign and automation.",
        ],
      },
    ],
  },

  wellness: {
    tagline: "Tai Chi instructor and 4th Duan black belt, competitive martial artist, and Pilates instructor.",
    summaryParagraphs: [
      "Tai Chi and Xin Yi Dao practitioner under the tutelage of Sifu Huan Zhang. Pilates instructor at Breathe Cambridge.",
    ],
    resumes: [],
    experienceHeading: "Training & Teaching",
    skillsHeading: "Practices & Credentials",
    showExperience: true,
    showSkills: false,
    showPublications: false,
    showContact: false,
    showPoems: false,
    skills: [
      { label: "Martial Arts", items: ["Tai Chi Chuan", "4th Duan rank certified", "Push hands", "Weapons forms", "Competitive sparring"] },
      { label: "Movement & Teaching", items: ["Pilates instruction", "Reformer & mat Pilates", "Injury-aware movement coaching", "Group & 1:1 instruction"] },
    ],
    experience: [
      {
        company: "Tong Hua Men",
        link: "https://huanstaichi.com",
        role: "Assistant Instructor, Tai Chi",
        location: "Cambridge, MA",
        start: "",
        end: "Present",
        bullets: [
          "Assist in teaching traditional Tai Chi forms, push hands, and foundational martial arts principles to students of all levels.",
          "4th Duan rank certified.",
        ],
      },
      {
        company: "World Open Martial Arts Championship",
        role: "Competitor",
        location: "",
        start: "",
        end: "",
        bullets: [
          "Two-time medalist — gold and silver.",
        ],
      },
      {
        company: "Breathe Cambridge",
        link: "https://www.breathecambridge.com/team",
        role: "Pilates Instructor",
        location: "Cambridge, MA",
        start: "",
        end: "Present",
        bullets: [
          "Teach mat and equipment-based Pilates classes focused on strength, mobility, and body awareness.",
        ],
      },
    ],
  },

  poetry: {
    tagline: "Poems written between stillness and motion.",
    summaryParagraphs: [
      "A small collection of poems — the first inspired by the Tai Chi form itself.",
    ],
    resumes: [],
    experienceHeading: "",
    skillsHeading: "",
    showExperience: false,
    showSkills: false,
    showPublications: false,
    showContact: false,
    showPoems: true,
    skills: [],
    experience: [],
    poems: [
      {
        title: "tai chi",
        subtitle: "or how i learned to start moving and love the form",
        stanzas: [
          {
            label: "1 | emptiness lifts the crown of the head.",
            lines: [
              "the mind does not follow.",
              "dust has settled on paths overgrown",
              "with wildflowers wilting",
              "with sorrows bartered for anger",
              "and anger bartered for nothing.",
            ],
          },
          {
            label: "2 | contain the chest and raise the back.",
            lines: [
              "for nothing, thumps my chest",
              "a jolt from the left to the right,",
              "it knows my father.",
              "he knows my rage.",
              "a flint in ever muscle,",
              "and every muscle a shelf.",
              "my back is a warehouse of unsold goods.",
            ],
          },
          {
            label: "3 | relax the waist.",
            lines: [
              "a river's worth of pain,",
              "and a boatful of inconsequence",
              "sails down to dock at my waist",
              "my left foot lifts, wrenching reflex redux.",
              "with flotillas overturned, drowning",
              "and drowning",
              "and drowning",
              "and drowning",
              "is a mercy beyond measure.",
            ],
          },
          {
            label: "4 | distinguish empty from full.",
            lines: [
              "my left foot has no weight",
              "the other, it shakes",
              "waves upon waves undammed",
              "with blood biblical bruising",
              "with sunflowers sonorous extending",
              "and movement bartered for stillness.",
            ],
          },
          {
            label: "5 | sink the shoulders, drop the elbows.",
            lines: [
              "the right rotator roots",
              "ice has settled on nerves",
              "I thought were made of steel.",
              "with fastidious fairies flossing",
              "and a single lotus blooming,",
              "ice is no longer ice.",
            ],
          },
          {
            label: "6 | use intent, not force.",
            lines: [
              "I yield to softness",
              "an intent has hardened, gently",
              "with raucous breaths resting",
              "on solid ground, from head to toe",
              "in vapid air, from ear to ear",
              "from nothing,",
              "from nothing,",
              "from nothing.",
            ],
          },
          {
            label: "7 | upper and lower body follow each other.",
            lines: [
              "I am rooted in the feet,",
              "issued by the legs, perhaps",
              "I am governed by the waist",
              "expressed by the fingers, perhaps",
              "with silent solipsism surrendered",
              "the mind follows the feet, and so–",
            ],
          },
          {
            label: "8 | inner and outer are united.",
            lines: [
              "a breath catches in my throat",
              "my left eye betrays me, and I am",
            ],
          },
          {
            label: "9 | linked without fracture.",
            lines: [
              "like the long river, ceaselessly flowing.",
              "",
              "yet again, today,",
              "with wildflowers wilted waking",
              "with mind bartered for body,",
              "and body bartered for mind;",
              "with madness bartered for purpose,",
            ],
          },
          {
            label: "10 | I seek stillness in motion.",
            lines: [],
          },
        ],
      },
    ],
  },
};
