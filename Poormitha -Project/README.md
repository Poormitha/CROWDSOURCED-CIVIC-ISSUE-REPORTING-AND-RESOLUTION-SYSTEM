# CivicFix — Crowdsourced Civic Issue Reporting & Resolution System

A simple front-end prototype of the full project brief. It is plain **HTML, CSS, and JavaScript**
(no build step, no npm install) so you can open it in VS Code and run it immediately.

## What this is

All 11 pages from your website structure are implemented and wired together:

| Page | File |
|---|---|
| Home | `index.html` |
| Citizen/Admin/Department Login | `login.html` |
| Citizen Registration | `register.html` |
| Report an Issue | `report.html` |
| View / Filter Issues | `issues.html` |
| Issue Details (like, comment, share) | `issue-details.html` |
| Track Issue (status timeline) | `track.html` |
| Interactive Map | `map.html` |
| Admin Dashboard | `admin.html` |
| Department Dashboard | `department.html` |
| User Profile | `profile.html` |

**Data storage:** instead of a real Java Spring Boot + MySQL backend, this prototype uses your
browser's `localStorage` as a mock database (see `js/data.js`). It is pre-loaded with sample
users, issues, and notifications so every page works immediately with realistic data. This keeps
the project genuinely "very simple" to open and demo, while mirroring the same data model
(Users, Issues, Categories, Departments, Comments, Votes, Notifications, Status History) you
listed in the tech spec — so it's a natural stepping stone to the real backend later.

**Maps:** uses Leaflet.js + OpenStreetMap (free, no API key needed) instead of Google Maps, so
the map "just works" out of the box. Swapping in the Google Maps API later is a drop-in change.

## How to run it

**Easiest — VS Code Live Server:**
1. Open this folder in VS Code (`File > Open Folder...`).
2. Install the **"Live Server"** extension (by Ritwick Dey) from the Extensions tab.
3. Right-click `index.html` → **"Open with Live Server"**.
4. The site opens in your browser at `http://127.0.0.1:5500`.

**Alternative — no extension needed:**
Just double-click `index.html` to open it directly in your browser. Everything works the same
way (all data lives in `localStorage`, so no server is required).

## Demo accounts

| Role | Email | Password |
|---|---|---|
| Citizen | anita@example.com | citizen123 |
| Citizen | ravi@example.com | citizen123 |
| Admin | admin@civicfix.gov | admin123 |
| Roads Department | roads@civicfix.gov | dept123 |
| Sanitation Department | sanitation@civicfix.gov | dept123 |

You can also register a brand-new citizen account from `register.html`.

## Project structure

```
civic-issue-app/
├── index.html            Home page (hero, stats, map preview, recent issues)
├── login.html             Citizen / Admin / Department login
├── register.html          Citizen sign-up
├── report.html             Report Issue form (photo upload, map pin, severity)
├── issues.html             Browse & filter all issues
├── issue-details.html      Full issue view + likes/comments/share/upvote + timeline
├── track.html               Search-and-track status timeline
├── map.html                  Full interactive map with status-colored markers
├── admin.html                Admin dashboard: KPIs, charts, assign/update/delete
├── department.html           Department dashboard: assigned issues + progress updates
├── profile.html               Citizen profile: reports, reputation, badges, notifications
├── css/style.css              Shared design system (all styling)
├── js/data.js                  Mock database + seed data + helpers
└── js/app.js                   Shared nav/session/auth logic
```

## Moving to the real tech stack later

When you're ready to build the production version with the stack you specified:
- **Frontend:** migrate this markup into React components; keep the same design tokens from `style.css`.
- **Backend:** replace the functions in `js/data.js` (`loadDB`, `saveDB`, etc.) with `fetch()` calls
  to your Spring Boot REST API.
- **Auth:** replace `login.html`'s localStorage check with a JWT login endpoint + Spring Security.
- **Database:** the arrays in `data.js` (`users`, `issues`, `notifications`) map directly onto the
  MySQL tables you listed (Users, Issues, Categories, Departments, Comments, Votes, Notifications,
  Issue Images, Status History).
- **Maps:** swap the Leaflet/OpenStreetMap calls for the Google Maps JavaScript API.
- **Images:** swap the base64 image previews for real uploads to Cloudinary.
