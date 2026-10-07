/* Content data for the three "View my work in" personas:
   Computational Biology, Machine Learning, and Wellness. */

const PERSONAS = {
  biology: {
    tagline: "Senior Scientist developing ML methods for omics, perturbation biology, and target discovery.",
    summary:
      "Machine learning scientist with experience developing computational methods and scalable pipelines for " +
      "single-cell genomics, statistical genetics, multi-modal data integration, companion diagnostic development, " +
      "and translational biomarker discovery in biopharma. Currently developing single-cell RNA-seq models for " +
      "genetic perturbation response and histopathology cell-type segmentation models for target prioritization. " +
      "Strong cross-functional leadership through close collaboration with translational scientists, computational " +
      "biologists, and domain stakeholders.",
    resumeFile: "assets/resume-biology.pdf",
    experienceHeading: "Experience",
    skillsHeading: "Skills",
    showPublications: true,
    skills: [
      { label: "Data", items: ["Single-cell & bulk RNA-seq", "GWAS", "Single-cell genetic perturbation screens", "H&E and IHC histopathology slides"] },
      { label: "Programming", items: ["Python (pandas, numpy, scikit-learn, PyTorch, TensorFlow)", "R", "SQL", "Shell"] },
      { label: "Infrastructure", items: ["Nextflow", "AWS", "Docker", "Git", "MLflow", "Weights & Biases"] },
    ],
    experience: [
      {
        company: "Merck & Co.",
        role: "Senior Scientist, Machine Learning",
        location: "Boston, MA",
        start: "Dec 2023",
        end: "Present",
        bullets: [
          "Develop machine learning models for genetic perturbation response using single-cell RNA-seq data to support target discovery and prioritization, linking perturbation-driven transcriptional programs to candidate biological mechanisms.",
          "Develop cell segmentation models using H&E-stained histopathology data to quantify cell types of interest and derive imaging biomarkers for downstream translational and companion diagnostics applications.",
          "Apply ML and statistical methods to high-dimensional molecular datasets with an emphasis on interpretable, robust, and reproducible biological insights.",
          "Collaborate with computational biologists and translational research teams to align perturbation modeling outputs with target discovery and mechanistic interpretation objectives.",
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
          "Led development of Minerva, a multi-modal companion diagnostics (CDx) discovery platform within Prometheus360, enabling versioned, reproducible, and extendable model development using multi-modal -omics data.",
          "Built scalable Nextflow pipelines for whole-genome scanning, QTL analysis, and evidence meta-analysis to prioritize SNP features for downstream CDx modeling and machine learning.",
          "Developed and built pipelines for genotype clustering and Bayesian classification modeling workflows for CDx development downstream of SNP discovery.",
          "Collaborated closely with immunologists, computational biologists, radiologists, and -omics experts to align multimodal methods and platform development with translational priorities and biomarker strategy.",
        ],
      },
      {
        company: "Fresenius Medical Care North America",
        role: "Machine Learning Engineer",
        location: "Remote / Boston, MA",
        start: "Oct 2020",
        end: "May 2022",
        bullets: [
          "Built cloud-based capabilities for an internal AI workbench on AWS, enabling scalable model monitoring and faster analytical iteration across cross-functional teams.",
          "Developed reusable ML infrastructure and tooling to improve adoption of cloud-native workflows and accelerate time to insight.",
          "Built a Python-based NLP model that captured 40+ previously unreported instances of abdominal pain annually from unstructured clinical text.",
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
          "Reduced front-end processing time by 70% on a client-facing business rules platform through performance-focused workflow improvements.",
          "Developed and maintained ETL pipelines using shell, PostgreSQL, and AWS Redshift to optimize recurring analytics processes.",
        ],
      },
    ],
  },

  ml: {
    tagline: "Principal-level ML Engineer building multimodal AI systems, computer vision, and ML platforms.",
    summary:
      "Principal-level Machine Learning Engineer and Applied AI Scientist with 8+ years of experience building " +
      "scalable ML platforms, multimodal AI systems, computer vision models, NLP solutions, and cloud-native machine " +
      "learning infrastructure. Experienced leading end-to-end ML initiatives across research and production settings, " +
      "including large-scale image processing, representation learning, Bayesian modeling, high-dimensional data " +
      "integration, reproducible experimentation, and GPU-accelerated inference workflows. Strong technical leader who " +
      "translates ambiguous scientific and product objectives into robust ML architecture, production-grade pipelines, " +
      "and reusable engineering systems.",
    resumeFile: "assets/resume-ml-engineer.tex",
    experienceHeading: "Experience",
    skillsHeading: "Skills",
    showPublications: true,
    skills: [
      { label: "AI / ML", items: ["Deep learning", "Computer vision", "Foundation models", "Multimodal learning", "Representation learning", "NLP", "Graph neural networks", "Bayesian ML"] },
      { label: "ML Systems", items: ["Production ML systems", "Distributed data processing", "GPU inference", "Feature pipelines", "Experiment tracking", "Model monitoring"] },
      { label: "Engineering", items: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "SQL", "R", "Docker", "Git", "MLflow", "Weights & Biases", "Nextflow", "CI/CD"] },
      { label: "Cloud / Data", items: ["AWS", "Google Cloud Storage", "Parquet", "Zarr", "DuckDB", "Large-scale imaging data"] },
    ],
    experience: [
      {
        company: "Merck & Co.",
        role: "Senior Scientist, Machine Learning",
        location: "Boston, MA",
        start: "Dec 2023",
        end: "Present",
        bullets: [
          "Lead machine learning initiatives spanning multimodal AI, single-cell foundation modeling, and computer vision for large-scale biomedical data analysis.",
          "Architect ML systems for genetic perturbation response prediction using single-cell RNA-seq datasets, linking learned representations to target discovery workflows.",
          "Design scalable whole-slide image processing and embedding pipelines for H&E histopathology, including patch extraction, tissue masking, coordinate stores, and GPU inference.",
          "Build and optimize high-throughput data pipelines using PyTorch, Parquet, Zarr, GCS, local NVMe caching, and resumable processing patterns for large imaging corpora.",
          "Establish reproducible ML development patterns, experiment tracking, data validation, and performance diagnostics for long-running training and inference workflows.",
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
          "Led development of Minerva, a multimodal companion diagnostics discovery platform within Prometheus360, enabling versioned, reproducible, and extensible model development across heterogeneous omics datasets.",
          "Architected scalable ML workflows for feature generation, whole-genome scanning, QTL analysis, and evidence meta-analysis using Nextflow and cloud-native processing patterns.",
          "Built Bayesian classification and genotype clustering workflows for predictive modeling downstream of SNP discovery and companion diagnostic feature selection.",
          "Acted as a technical bridge between ML engineering, immunology, computational biology, and biomarker strategy teams to align platform capabilities with translational use cases.",
        ],
      },
      {
        company: "Fresenius Medical Care North America",
        role: "Machine Learning Engineer",
        location: "Remote / Boston, MA",
        start: "Oct 2020",
        end: "May 2022",
        bullets: [
          "Built cloud-based ML platform capabilities for an internal AI workbench on AWS, enabling scalable model monitoring and faster iteration across cross-functional analytics teams.",
          "Developed reusable ML infrastructure and tooling to accelerate adoption of cloud-native experimentation, deployment, and monitoring workflows.",
          "Built a Python-based NLP model for unstructured clinical text that identified 40+ previously unreported annual abdominal pain events, improving downstream clinical signal detection.",
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
    summary:
      "Alongside my work in machine learning, I teach and compete in traditional Chinese martial arts and " +
      "instruct Pilates. I'm a 4th Duan ranked practitioner and assistant instructor at Tong Hua Men, a " +
      "two-time medalist at the World Open Martial Arts Championship, and a certified Pilates instructor " +
      "at Breathe Cambridge — bringing the same discipline, precision, and patience to movement and teaching " +
      "that I bring to research.",
    resumeFile: null,
    experienceHeading: "Training & Teaching",
    skillsHeading: "Practices & Credentials",
    showPublications: false,
    skills: [
      { label: "Martial Arts", items: ["Tai Chi Chuan", "4th Duan rank certified", "Push hands", "Weapons forms", "Competitive sparring"] },
      { label: "Movement & Teaching", items: ["Pilates instruction", "Reformer & mat Pilates", "Injury-aware movement coaching", "Group & 1:1 instruction"] },
    ],
    experience: [
      {
        company: "Tong Hua Men",
        link: "https://huanstaichi.com",
        role: "Assistant Instructor, Tai Chi",
        location: "",
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
};
