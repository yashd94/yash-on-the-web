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
  const resumeLink = document.getElementById("resumeDownload");
  const skillsGrid = document.getElementById("skillsGrid");
  const timeline = document.getElementById("timeline");

  function renderPersona(key) {
    const persona = PERSONAS[key];
    taglineEl.textContent = persona.tagline;
    summaryEl.textContent = persona.summary;
    resumeLink.href = persona.resumeFile;

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

    timeline.innerHTML = EXPERIENCE.map(
      (job) => `
      <div class="job">
        <div class="job-head">
          <span class="job-company">${job.company}</span>
          <span class="job-dates">${job.start} – ${job.end}</span>
        </div>
        <div class="job-role">${job.role} · ${job.location}</div>
        ${job.sub ? `<div class="job-sub">${job.sub}</div>` : ""}
        <ul>${job.bullets[key].map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>`
    ).join("");

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

  renderPersona(localStorage.getItem("persona") || "biology");
})();
