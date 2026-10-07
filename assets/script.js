(function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Theme toggle
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    if (next === "dark") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Persona rendering
  const toggle = document.getElementById("personaToggle");
  const taglineEl = document.getElementById("tagline");
  const chineseNameEl = document.getElementById("chineseName");
  const summaryEl = document.getElementById("summaryText");
  const resumeLinks = document.getElementById("resumeLinks");
  const linkedinLink = document.getElementById("linkedinLink");
  const githubLink = document.getElementById("githubLink");
  const emailMeBtn = document.getElementById("emailMeBtn");
  const pilatesBtn = document.getElementById("pilatesBtn");
  const taichiBtn = document.getElementById("taichiBtn");
  const skillsGrid = document.getElementById("skillsGrid");
  const timeline = document.getElementById("timeline");
  const experienceHeading = document.getElementById("experienceHeading");
  const skillsHeading = document.getElementById("skillsHeading");
  const skillsSection = document.getElementById("skills");
  const publicationsSection = document.getElementById("publications");
  const contactSection = document.getElementById("contact");
  const experienceSection = document.getElementById("experience");
  const poemsSection = document.getElementById("poems");
  const poemsList = document.getElementById("poemsList");
  const awardsSection = document.getElementById("awards");
  const awardsList = document.getElementById("awardsList");
  const navExperience = document.getElementById("navExperience");
  const navExperienceLabel = document.getElementById("navExperienceLabel");
  const navAwards = document.getElementById("navAwards");
  const navPoems = document.getElementById("navPoems");
  const navSkills = document.getElementById("navSkills");
  const navSkillsLabel = document.getElementById("navSkillsLabel");
  const navPublications = document.getElementById("navPublications");
  const navContact = document.getElementById("navContact");

  function renderPersona(key) {
    const persona = PERSONAS[key];
    document.documentElement.setAttribute("data-persona", key);
    chineseNameEl.hidden = key !== "wellness";
    taglineEl.textContent = persona.tagline;
    taglineEl.style.display = persona.tagline ? "" : "none";
    summaryEl.innerHTML = persona.summaryParagraphs.map((p) => `<p>${p}</p>`).join("");

    resumeLinks.innerHTML = persona.resumes
      .map((r) => `<a href="${r.href}" download class="btn">${r.label}</a>`)
      .join("");
    linkedinLink.style.display = persona.showSocialLinks ? "" : "none";
    githubLink.style.display = persona.showSocialLinks ? "" : "none";
    emailMeBtn.style.display = persona.showEmail ? "" : "none";
    pilatesBtn.style.display = persona.showWellnessCTAs ? "" : "none";
    taichiBtn.style.display = persona.showWellnessCTAs ? "" : "none";

    experienceHeading.textContent = persona.experienceHeading;
    skillsHeading.textContent = persona.skillsHeading;
    experienceSection.style.display = persona.showExperience ? "" : "none";
    skillsSection.style.display = persona.showSkills ? "" : "none";
    publicationsSection.style.display = persona.showPublications ? "" : "none";
    contactSection.style.display = persona.showContact ? "" : "none";
    poemsSection.style.display = persona.showPoems ? "" : "none";
    awardsSection.style.display = persona.showAwards ? "" : "none";

    navExperienceLabel.textContent = persona.experienceHeading;
    navSkillsLabel.textContent = persona.skillsHeading;
    navExperience.style.display = persona.showExperience ? "" : "none";
    navAwards.style.display = persona.showAwards ? "" : "none";
    navPoems.style.display = persona.showPoems ? "" : "none";
    navSkills.style.display = persona.showSkills ? "" : "none";
    navPublications.style.display = persona.showPublications ? "" : "none";
    navContact.style.display = persona.showContact ? "" : "none";

    awardsList.innerHTML = (persona.awards || [])
      .map(
        (award) => `
      <div class="award">
        <span class="award-name">${award.name}</span>
        <span class="award-result">${award.result}</span>
      </div>`
      )
      .join("");

    poemsList.innerHTML = (persona.poems || [])
      .map(
        (poem, idx) => `
      <article class="poem">
        <details class="poem-details">
          <summary class="poem-toggle">
            <span class="poem-title-row">
              <span class="poem-title">${poem.title}</span>
              <span class="poem-toggle-icon" aria-hidden="true"></span>
            </span>
            ${poem.subtitle ? `<span class="poem-subtitle">${poem.subtitle}</span>` : ""}
          </summary>
          ${poem.stanzas
            .map(
              (stanza) => `
            <div class="poem-stanza">
              ${stanza.label ? `<p class="poem-label">${stanza.label}</p>` : ""}
              ${
                stanza.lines.length
                  ? `<p class="poem-lines">${stanza.lines
                      .map((l) => (l === "" ? "<br>" : l))
                      .join("<br>")}</p>`
                  : ""
              }
            </div>`
            )
            .join("")}
        </details>
      </article>`
      )
      .join("");

    skillsGrid.innerHTML = persona.skills
      .map(
        (group) => `
      <div class="skill-card">
        <h3>${group.label}</h3>
        <div class="tag-list">
          ${group.items.map((i) => `<span class="tag">${i}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");

    timeline.innerHTML = persona.experience
      .map((job) => {
        const dates = [job.start, job.end].filter(Boolean).join(" – ");
        const companyLabel = job.link
          ? `<a href="${job.link}" target="_blank" rel="noopener">${job.company}</a>`
          : job.company;
        return `
      <div class="job">
        <div class="job-head">
          <div class="job-company-row">
            ${job.logo ? `<img class="job-logo" src="${job.logo}" alt="${job.company} logo" loading="lazy" />` : ""}
            <span class="job-company">${companyLabel}</span>
          </div>
          ${dates ? `<span class="job-dates">${dates}</span>` : ""}
        </div>
        <div class="job-role">${job.role}${job.location ? ` · ${job.location}` : ""}</div>
        ${job.sub ? `<div class="job-sub">${job.sub}</div>` : ""}
        <ul>${job.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>`;
      })
      .join("");

    toggle.querySelectorAll(".segment").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.persona === key);
    });
    localStorage.setItem("persona", key);
  }

  toggle.addEventListener("click", (e) => {
    const btn = e.target.closest(".segment");
    if (!btn) return;
    renderPersona(btn.dataset.persona);
  });

  const stored = localStorage.getItem("persona");
  renderPersona(PERSONAS[stored] ? stored : "research");
})();
