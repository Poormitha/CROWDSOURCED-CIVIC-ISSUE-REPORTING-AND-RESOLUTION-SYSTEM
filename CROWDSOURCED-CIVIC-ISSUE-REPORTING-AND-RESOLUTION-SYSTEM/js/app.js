/* =========================================================
   CivicFix — app.js
   Shared behaviour used across every page: nav/session state,
   auth guards, issue-card rendering, and small UI helpers.
   ========================================================= */

function renderNavUser() {
  const el = document.getElementById("navUser");
  if (!el) return;
  const session = getSession();
  if (!session) {
    el.innerHTML = `<a href="login.html" class="btn btn-outline-light btn-sm">Login</a>`;
    return;
  }
  const dash = session.role === "admin" ? "admin.html" : session.role === "department" ? "department.html" : "profile.html";
  el.innerHTML = `
    <a href="${dash}" style="font-weight:700;">${initials(session.name)} · ${session.name.split(" ")[0]}</a>
    <a href="#" id="logoutBtn" class="btn btn-outline-light btn-sm">Logout</a>
  `;
  document.getElementById("logoutBtn").addEventListener("click", (e) => {
    e.preventDefault();
    clearSession();
    toast("You have been logged out.");
    setTimeout(() => window.location.href = "index.html", 500);
  });
}

function requireAuth(role) {
  const session = getSession();
  if (!session || (role && session.role !== role)) {
    window.location.href = "login.html";
    return null;
  }
  return session;
}

function highlightActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
}

/* ---------- Issue card builder (used on home + issues list) ---------- */
function issueCardHTML(issue) {
  return `
  <a href="issue-details.html?id=${issue.id}" class="card issue-card">
    <div class="thumb">
      <span style="font-size:44px;">${issue.image}</span>
      <span class="status-dot" style="background:${markerColor(issue.status)};"></span>
    </div>
    <div class="body">
      <span class="tag" style="margin-bottom:8px; width:fit-content;">${issue.category}</span>
      <h4>${issue.title}</h4>
      <div class="meta">${issue.address} · ${timeAgo(issue.date)}</div>
      <div class="desc">${issue.description.slice(0, 90)}${issue.description.length > 90 ? "…" : ""}</div>
      <div class="foot">
        <span class="pill ${statusPillClass(issue.status)}">${issue.status}</span>
        <span class="muted">▲ ${issue.votes}</span>
      </div>
    </div>
  </a>`;
}

/* ---------- Stats on home page ---------- */
function computeStats() {
  const db = loadDB();
  const total = db.issues.length;
  const resolved = db.issues.filter(i => i.status === "Completed").length;
  const pending = db.issues.filter(i => i.status !== "Completed").length;
  const users = db.users.filter(u => u.role === "citizen").length;
  return { total, resolved, pending, users };
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavUser();
  highlightActiveNav();
});
