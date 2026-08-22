# Accordion Component

A clean, responsive, and performance-optimized Accordion UI component engineered to handle collapsible content structures efficiently. This implementation provides an interactive Frequently Asked Questions (FAQ) interface built using vanilla JavaScript, semantic HTML5 structure, and native CSS layout practices.

---

## Technical Challenges Overcame

To complete this Roadmap.sh challenge successfully, the implementation required solving specific engineering problems regarding modular script scope, DOM state replication, and CSS layout manipulation:

* **Encapsulated Scope Architecture:** Designed a highly reusable and modular JavaScript function (`accordionConfig`) that isolates state logic for individual panels via localized variables (`checked`). This avoids global scope pollution and ensures that multiple component instances operate independently without side effects.
* **Dynamic DOM Class Management:** Implemented runtime interface updates by manipulating element classes (`classList.add` and `classList.remove`) asynchronously based on direct user click events, providing instant feedback when showing or hiding FAQ answers.
* **Pure CSS Vector Engineering:** Fabricated procedural directional indicators (arrows) strictly through style constraints using borders and geometric mutations (`transform: rotate`). The logic handles visual vector state transitions natively without loading external image assets or icon libraries.
* **Declarative Layout Filtering:** Managed panel visibility states smoothly by mapping JavaScript triggers directly to structural CSS display criteria (`display: none` toggle filters), preventing container layout shifts on collapsed states.

---

## Core Competencies Demonstrated

* **Functional JavaScript Programing:** Mastery of closures, scoped parameters, and functional abstraction to handle repetitive DOM events cleanly.
* **Component-Driven Layouts:** Competence in breaking down standard document elements into atomic, scalable interfaces utilizing CSS Flexbox parameters for clean card and text stacking.
* **Event Handling Patterns:** Implementation of interactive web standards through optimized native event listener assignments (`onclick`) directly bound to semantic interface triggers.

---

## Application Features

* **Modular Interactive Panels:** A fully dynamic sequence of 6 individual content sections that safely transition between expanded and collapsed states upon click.
* **Contextual Vector Rotations:** Interactive indicator arrows that shift angles seamlessly (`-45deg` to `-135deg`) to mirror active layout alterations.
* **Fluid Layout Responsiveness:** Proportional sizing constraints (`width: 50%`) with automatic margins ensuring structural balance across multiple monitor dimensions.

---

## Installation and Deployment

This application operates completely as a client-side module using native browser execution environments. No internal package managers or runtime compilation setups are required.

### 1. Clone the Repository
Execute the git command inside your terminal:
```bash
git clone https://github.com/daniel27072007/Frontend_Projects_Roadmaps.sh/tree/main/Accordion
```

### 2. Navigate to the Directory
Switch to the project root folder:
```bash
cd accordion
```

### 3. Local Execution
You can review the source code through two standard deployment methods:
* **Direct File Access:** Launch the `index.html` file directly using any modern web browser.
* **Development Server (Recommended):** Open the project directory in Visual Studio Code and launch it via the **Live Server** extension to evaluate real-time file updates.

---

## Author

Developed by **Daniel Belculfine**

* **LinkedIn:** [seu-perfil](https://linkedin.com)
* **GitHub:** [seu-usuario](https://github.com)
* **Roadmap.sh:** [seu-perfil](https://roadmap.sh)
