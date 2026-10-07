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
  const summaryEl = document.getElementById("summaryText");
  const resumeLinks = document.getElementById("resumeLinks");
  const skillsGrid = document.getElementById("skillsGrid");
  const timeline = document.getElementById("timeline");
  const experienceHeading = document.getElementById("experienceHeading");
  const skillsHeading = document.getElementById("skillsHeading");
  const skillsSection = document.getElementById("skills");
  const publicationsSection = document.getElementById("publications");
  const contactSection = document.getElementById("contact");

  function renderPersona(key) {
    const persona = PERSONAS[key];
    document.documentElement.setAttribute("data-persona", key);
    taglineEl.textContent = persona.tagline;
    summaryEl.innerHTML = persona.summaryParagraphs.map((p) => `<p>${p}</p>`).join("");

    resumeLinks.innerHTML = persona.resumes
      .map((r) => `<a href="${r.href}" download class="btn">${r.label}</a>`)
      .join("");

    experienceHeading.textContent = persona.experienceHeading;
    skillsHeading.textContent = persona.skillsHeading;
    skillsSection.style.display = persona.showSkills ? "" : "none";
    publicationsSection.style.display = persona.showPublications ? "" : "none";
    contactSection.style.display = persona.showContact ? "" : "none";

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
          <span class="job-company">${companyLabel}</span>
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
