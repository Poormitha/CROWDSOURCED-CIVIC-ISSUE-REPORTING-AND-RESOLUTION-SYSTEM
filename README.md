# 🏛️ Civic Issue Reporting & Management System using Web Technologies

<div align="center">

### 🚀 Public Grievance Redressal & Smart Municipal Management Platform

Bridging the gap between citizens and municipal authorities by allowing real-time civic issue reporting, interactive geographic mapping, ticket tracking, and robust backend administrative controls.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Project-Frontend%20Completed-success)
![Context](https://img.shields.io/badge/Scope-Smart%20Governance-blue)

</div>

---

# 📌 Project Overview

Traditional public grievance systems often struggle with operational delays, tracking opaceness, and a lack of localization tools. This project addresses these bottlenecks by establishing a **Civic Issue Reporting & Management System (Poormitha Project)**[cite: 1, 2]. 

It provides an interactive, structured interface where citizens can pinpoint problems (like bad roads, broken streetlights, or sanitation failures) directly onto a mapping system[cite: 2]. The platform automates routing to relevant city departments, gives citizens an audited history of ticket modifications, and equips city managers with granular administrative oversight to streamline operations[cite: 1, 2].

---

# 🎯 Problem Statement

Conventional civic management methods suffer from:
* Coarse communication structures where user complaints get lost across distributed offices.
* Lack of precise geographic information regarding where urban bottlenecks are occurring.
* Opaque progress pipelines that keep the everyday citizen uninformed about ticket updates.

This system resolves these limitations by mapping real-time status progressions (Open, In-Progress, Resolved) to discrete operational departments[cite: 2].

---

# 💡 Key Features

## 👤 Citizen Module

* **Secure Authentication:** Seamless user registration and portal access control interfaces (`register.html`, `login.html`)[cite: 1, 2].
* **Issue Reporting Subsystem:** Lodge location-aware civic complaints detailing categories, titles, and structural definitions (`report.html`)[cite: 1, 2].
* **Geospatial Visualizations:** Interact with dynamic mapping overlays to tag exact physical coordinates (`map.html`)[cite: 1, 2].
* **Live Ticket Tracking:** Review ongoing municipal operations, progress logs, and historical resolutions via distinct dashboard views (`track.html`, `issues.html`, `issue-details.html`)[cite: 1, 2].
* **Profile Audits:** Maintain and modify personal accounts along with complete individual ticket submission records (`profile.html`)[cite: 1, 2].

---

## 🔐 Administrative Module

* **Centralized Governance:** Comprehensive master operations panel engineered for systemic diagnostic viewing (`admin.html`)[cite: 1, 2].
* **Dynamic User Supervision:** Complete lifecycle oversight to monitor authenticated citizen profiles and activity registries[cite: 2].
* **Department Filtering Workflow:** Segment workflows into specific civic partitions such as sanitation, power grids, or roads for cleaner delegation (`department.html`)[cite: 1, 2].
* **Ticket Lifecycle Modification:** Update real-time resolution metrics and manage historical logs for public auditing[cite: 2].

---

## ⚙️ Data Architecture & State Management

* **Persistent Mock Architecture:** Utilizes modular schema structures to store citizen contexts, department types, and historical logs natively without performance degradation (`js/data.js`)[cite: 1, 2].
* **Reactive Logic Pipelines:** Client-side orchestration governing layout switches, dynamic status tracking, and table indexing updates (`js/app.js`)[cite: 1, 2].

---

# 🏗️ Project Architecture

Citizen Node              Admin Node
│                         │
▼                         ▼
Authentication             Administrative Log
(Login/Register)           (User & Issue Management)
│                         │
├─────────────────────────┤
▼                         ▼
Issue Filing           Department Routing
(File Complaint)       (Segregate Workflows)
│                         │
▼                         ▼
Geospatial Engine          Status Mapping
(Map Geolocation Pin)   (Open ➔ In-Progress ➔ Done)
│                         │
└─────────────────────────┘
│
▼
Interactive Feed
(Real-Time Analytics)


---

# 📂 Repository Structure

Poormitha -Project/
│
├── .vscode/               # Workspace configurations
│   └── settings.json      # Editor styling & alignment limits
│
├── css/                   # Presentation Layer
│   └── style.css          # Core UI styling declarations & layout rules
│
├── js/                    # Business Logic Layer
│   ├── app.js             # Core reactive orchestration & routing controls
│   └── data.js            # In-memory storage structures & relational mockup
│
├── index.html             # System Entry Point / Public Facing Home
├── login.html             # Access Control Form
├── register.html          # Account Provisioning Setup
├── profile.html           # Citizen Information Portal
├── report.html            # Public Grievance Lodging Screen
├── track.html             # Live Status Overview Console
├── map.html               # Geospatial Component Interface
├── issues.html            # Open Feed of Categorized Complaints
├── issue-details.html     # Granular Inspection View for Single Tickets
├── department.html        # Group Management Panel for Public Sectors
└── admin.html             # System Administrator Master Console

Code snippet

---

# 🔧 Application Workflow Pipeline

### 1. User Engagement
* Citizen authenticates ➔ Browses active dashboard feed ➔ Inputs structural information regarding a municipal issue[cite: 2].

### 2. Localization
* Geolocation coordinates mapped ➔ System logs timestamp data ➔ Categorizes the underlying issue into specific operational modules[cite: 2].

### 3. Administrative Delegation
* Administrative console catches new ticket records ➔ Allocates target resources ➔ Updates department channels[cite: 2].

### 4. Lifecycle Resolution
* Status values modified dynamically ➔ Logs generated ➔ System outputs verified status back to citizen tracking interface[cite: 2].

---

# 🛠 Technology Stack

### Frontend & UI Presentation
* **HTML5:** Semantic architecture layout mapping[cite: 2].
* **CSS3:** Custom responsive parameters, grid spacing layouts, and unified color schemas (`css/style.css`)[cite: 2].

### Behavior & Business Logic
* **JavaScript (ES6+):** Programmatic state manipulation, layout toggles, dynamic filtering pipelines, and list generation[cite: 2].

### Data Abstraction
* **JSON Structured Arrays:** Simulates relational structures bridging user attributes, issue tickets, and actions (`js/data.js`)[cite: 2].

---

# 📊 System Modules & Layout Index

| Interface Document | Target Module Domain | Operations & Capabilities |
| :--- | :--- | :--- |
| `index.html` | Portal Entrance | Public entry point detailing platform purpose[cite: 1, 2]. |
| `login.html` | Access Control | Verifies active credentials to allow portal routing[cite: 1, 2]. |
| `register.html` | Account Provisioning | Captures unique citizen parameters for profile creation[cite: 1, 2]. |
| `profile.html` | Citizen Record | Modifies user settings and reviews assigned issue indices[cite: 1, 2]. |
| `report.html` | Intake Pipeline | Input screen to document infrastructure issues[cite: 1, 2]. |
| `track.html` | Progress Center | Visual interface tracking status updates in real time[cite: 1, 2]. |
| `map.html` | Geospatial Visualizer | Maps interactive coordinates to pin public problem points[cite: 1, 2]. |
| `issues.html` | General Directory | Aggregates full logs of community-filed complaints[cite: 1, 2]. |
| `issue-details.html` | Granular Review | Deep-dive review panel showing specific comments and timelines[cite: 1, 2]. |
| `department.html` | Operational Domain | Sorts reports by designated municipal branches[cite: 1, 2]. |
| `admin.html` | System Console | Core back-office dashboard to handle system-wide management[cite: 1, 2]. |

---

# 🛠️ System Design & Diagrams

### 1. Use Case Diagram
The workflow logic between the primary actors (**Citizen** and **Administrator**) within the portal boundaries[cite: 2].
![Use Case Diagram](watermarked_img_18300522128285153754.png)[cite: 2]

### 2. Entity Relationship (ER) Diagram
The structural relational mapping showcasing how entities like **Citizen, Issue, Department, Admin,** and **Status History** coordinate data attributes[cite: 2].
![ER Diagram](watermarked_img_15677398683925346488.png)[cite: 2]

---

# 📈 Core System Outputs & Artifacts

* Unified Frontend Blueprint for Public Administration Platforms[cite: 2].
* Dynamic Geolocation Data Pinning Simulation[cite: 2].
* Segmented State Views for Citizens and Administrators[cite: 2].
* Transparent Multi-Stage Ticket Progress Audits[cite: 2].

---

# 🔮 Future Architectural Scope

* **Production Database Migration:** Implement robust SQL backend systems to migrate from in-memory arrays to persistent server tracking.
* **Live GIS API Integrations:** Bind open-source mapping services like Leaflet or Mapbox to enable real-time location accuracy.
* **Automated Image Classifiers:** Integrate AI pipelines to let users submit photos of broken roads and have the system automatically classify the severity.
* **SMS Gateway Alerts:** Automated notification microservices to update citizens directly on mobile devices when their ticket status changes.

---

# 👩‍💻 Developer

**Poormitha**

Project Engineering Portfolio Development

---
