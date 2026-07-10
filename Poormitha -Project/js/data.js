/* =========================================================
   CivicFix — data.js
   A tiny localStorage "database" that stands in for the real
   Spring Boot + MySQL backend described in the project plan.
   Every DB table in the spec (Users, Issues, Categories,
   Departments, Comments, Votes, Notifications, Status History)
   has a matching array below. Swap this file for real API calls
   later without touching the page markup.
   ========================================================= */

const DB_KEY = "civicfix_db_v1";

const CATEGORIES = [
  "Road Damage", "Garbage", "Water Leakage", "Street Light",
  "Drainage", "Illegal Dumping", "Electricity", "Public Toilet"
];

const DEPARTMENTS = [
  "Roads & Infrastructure", "Sanitation", "Water Board",
  "Electricity Board", "Public Works"
];

const STATUS_STEPS = ["Reported", "Verified", "Assigned", "Work Started", "Completed"];

function categoryDept(category) {
  const map = {
    "Road Damage": "Roads & Infrastructure",
    "Garbage": "Sanitation",
    "Illegal Dumping": "Sanitation",
    "Water Leakage": "Water Board",
    "Drainage": "Water Board",
    "Street Light": "Electricity Board",
    "Electricity": "Electricity Board",
    "Public Toilet": "Public Works"
  };
  return map[category] || "Public Works";
}

function seedDB() {
  const users = [
    { id: "u1", name: "Anita Sharma", email: "anita@example.com", password: "citizen123", role: "citizen", reputation: 120, badges: ["First Report", "Community Voice"] },
    { id: "u2", name: "Ravi Kumar", email: "ravi@example.com", password: "citizen123", role: "citizen", reputation: 60, badges: ["First Report"] },
    { id: "admin1", name: "City Admin", email: "admin@civicfix.gov", password: "admin123", role: "admin" },
    { id: "dept1", name: "Roads Dept Officer", email: "roads@civicfix.gov", password: "dept123", role: "department", department: "Roads & Infrastructure" },
    { id: "dept2", name: "Sanitation Officer", email: "sanitation@civicfix.gov", password: "dept123", role: "department", department: "Sanitation" }
  ];

  const now = Date.now();
  const day = 86400000;

  const issues = [
    {
      id: "i1", title: "Large pothole near bus stand", description: "A deep pothole has formed near the main bus stand causing traffic slowdowns and risk to two-wheelers, especially at night.",
      category: "Road Damage", severity: "High", image: "🕳️",
      lat: 11.0168, lng: 76.9558, address: "Near Gandhipuram Bus Stand, Coimbatore",
      status: "Work Started", assignedDept: "Roads & Infrastructure",
      expectedDate: new Date(now + 3 * day).toISOString(),
      reportedBy: "u1", reportedByName: "Anita Sharma", date: new Date(now - 6 * day).toISOString(),
      likes: ["u2"], votes: 34,
      comments: [{ user: "Ravi Kumar", text: "Same issue, my scooter tyre got damaged here.", date: new Date(now - 5 * day).toISOString() }],
      history: [
        { status: "Reported", date: new Date(now - 6 * day).toISOString() },
        { status: "Verified", date: new Date(now - 5 * day).toISOString() },
        { status: "Assigned", date: new Date(now - 4 * day).toISOString() },
        { status: "Work Started", date: new Date(now - 1 * day).toISOString() }
      ]
    },
    {
      id: "i2", title: "Garbage pile not collected for a week", description: "Household waste has piled up at the street corner and is attracting stray animals. Needs urgent collection.",
      category: "Garbage", severity: "Medium", image: "🗑️",
      lat: 11.0055, lng: 76.9661, address: "RS Puram 3rd Street, Coimbatore",
      status: "Assigned", assignedDept: "Sanitation",
      expectedDate: new Date(now + 2 * day).toISOString(),
      reportedBy: "u2", reportedByName: "Ravi Kumar", date: new Date(now - 3 * day).toISOString(),
      likes: [], votes: 18,
      comments: [],
      history: [
        { status: "Reported", date: new Date(now - 3 * day).toISOString() },
        { status: "Verified", date: new Date(now - 2 * day).toISOString() },
        { status: "Assigned", date: new Date(now - 1 * day).toISOString() }
      ]
    },
    {
      id: "i3", title: "Street light not working", description: "The street light at the park entrance has been off for 10 days, making the area unsafe at night.",
      category: "Street Light", severity: "Medium", image: "💡",
      lat: 11.0090, lng: 76.9710, address: "Race Course Road, Coimbatore",
      status: "Verified", assignedDept: "",
      expectedDate: "",
      reportedBy: "u1", reportedByName: "Anita Sharma", date: new Date(now - 2 * day).toISOString(),
      likes: ["u1", "u2"], votes: 9,
      comments: [],
      history: [
        { status: "Reported", date: new Date(now - 2 * day).toISOString() },
        { status: "Verified", date: new Date(now - 1 * day).toISOString() }
      ]
    },
    {
      id: "i4", title: "Sewage water overflowing onto road", description: "Drainage water is overflowing onto the main road every evening, creating a health hazard.",
      category: "Drainage", severity: "High", image: "💧",
      lat: 11.0021, lng: 76.9445, address: "Peelamedu Main Road, Coimbatore",
      status: "Reported", assignedDept: "",
      expectedDate: "",
      reportedBy: "u2", reportedByName: "Ravi Kumar", date: new Date(now - 1 * day).toISOString(),
      likes: [], votes: 5,
      comments: [],
      history: [{ status: "Reported", date: new Date(now - 1 * day).toISOString() }]
    },
    {
      id: "i5", title: "Illegal dumping behind market", description: "Construction debris is being dumped illegally behind the vegetable market.",
      category: "Illegal Dumping", severity: "Low", image: "🚧",
      lat: 11.0135, lng: 76.9601, address: "Town Hall Market, Coimbatore",
      status: "Completed", assignedDept: "Sanitation",
      expectedDate: new Date(now - 1 * day).toISOString(),
      reportedBy: "u1", reportedByName: "Anita Sharma", date: new Date(now - 10 * day).toISOString(),
      likes: ["u2"], votes: 12,
      comments: [{ user: "Anita Sharma", text: "Thank you for the quick action!", date: new Date(now - 1 * day).toISOString() }],
      history: [
        { status: "Reported", date: new Date(now - 10 * day).toISOString() },
        { status: "Verified", date: new Date(now - 9 * day).toISOString() },
        { status: "Assigned", date: new Date(now - 8 * day).toISOString() },
        { status: "Work Started", date: new Date(now - 4 * day).toISOString() },
        { status: "Completed", date: new Date(now - 1 * day).toISOString() }
      ]
    },
    {
      id: "i6", title: "Exposed electric wire near school", description: "A live wire is hanging low near the school gate. Extremely dangerous for children.",
      category: "Electricity", severity: "High", image: "⚡",
      lat: 11.0203, lng: 76.9502, address: "Near Govt School, Coimbatore",
      status: "Assigned", assignedDept: "Electricity Board",
      expectedDate: new Date(now + 1 * day).toISOString(),
      reportedBy: "u2", reportedByName: "Ravi Kumar", date: new Date(now - 2 * day).toISOString(),
      likes: ["u1"], votes: 41,
      comments: [],
      history: [
        { status: "Reported", date: new Date(now - 2 * day).toISOString() },
        { status: "Verified", date: new Date(now - 2 * day).toISOString() },
        { status: "Assigned", date: new Date(now - 1 * day).toISOString() }
      ]
    }
  ];

  const notifications = [
    { id: "n1", userId: "u1", message: "Your report 'Large pothole near bus stand' has been accepted and verified.", date: new Date(now - 5 * day).toISOString(), read: true },
    { id: "n2", userId: "u1", message: "'Large pothole near bus stand' has been assigned to Roads & Infrastructure.", date: new Date(now - 4 * day).toISOString(), read: true },
    { id: "n3", userId: "u1", message: "Work has started on 'Large pothole near bus stand'.", date: new Date(now - 1 * day).toISOString(), read: false },
    { id: "n4", userId: "u2", message: "Your report 'Garbage pile not collected for a week' has been assigned to Sanitation.", date: new Date(now - 1 * day).toISOString(), read: false }
  ];

  return { users, issues, notifications };
}

function loadDB() {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) {
    const fresh = seedDB();
    localStorage.setItem(DB_KEY, JSON.stringify(fresh));
    return fresh;
  }
  try { return JSON.parse(raw); } catch (e) { const fresh = seedDB(); localStorage.setItem(DB_KEY, JSON.stringify(fresh)); return fresh; }
}

function saveDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function resetDB() {
  localStorage.removeItem(DB_KEY);
  return loadDB();
}

/* ---------- Session helpers ---------- */
function getSession() {
  try { return JSON.parse(localStorage.getItem("civicfix_session")); } catch (e) { return null; }
}
function setSession(user) {
  localStorage.setItem("civicfix_session", JSON.stringify({ id: user.id, name: user.name, role: user.role, department: user.department || null }));
}
function clearSession() {
  localStorage.removeItem("civicfix_session");
}

/* ---------- Small utils ---------- */
function uid(prefix) { return prefix + "_" + Math.random().toString(36).slice(2, 9); }

function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86400000);
  if (days <= 0) return "Today";
  if (days === 1) return "1 day ago";
  return days + " days ago";
}

function statusPillClass(status) {
  switch (status) {
    case "Reported": return "pill-pending";
    case "Verified": return "pill-verified";
    case "Assigned": return "pill-assigned";
    case "Work Started": return "pill-progress";
    case "Completed": return "pill-resolved";
    default: return "pill-pending";
  }
}

function markerColor(status) {
  if (status === "Completed") return "#2E9B4D";
  if (status === "Reported" || status === "Verified") return "#E4572E";
  return "#F2B705";
}

function toast(msg) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2600);
}

function initials(name) {
  return name.split(" ").map(p => p[0]).slice(0, 2).join("").toUpperCase();
}
