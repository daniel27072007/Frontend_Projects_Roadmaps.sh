# Personal Portfolio Website

A multi-page central portfolio platform engineered to showcase architectural web design challenges, semantic HTML5 distribution, responsive structures, and dynamic sub-modules. This refined second version introduces a declarative dark mode theme toggle system driven purely via style selectors without runtime script overhead.

---

## Technical Challenges Overcame

To complete this core compilation milestone successfully, the implementation required solving data encapsulation problems, styling inheritances, cross-component inputs, and advanced pseudo-class selectors:

* **Non-JavaScript Dark Mode Architecture:** Engineered a fully declarative, client-side dark theme toggler using native HTML `<input type="checkbox">` elements tied to the CSS general sibling combinator (`:checked ~ .settings`). The setup dynamically overrides root background values, font distributions, link parameters, and visual borders instantly upon state mutations without leveraging JavaScript execution routines.
* **Fluid Layout Responsiveness Framework:** Formulated a clean desktop design translation layer utilizing media parameters (`@media (min-width: 1024px)`) combined with CSS Flexbox layouts. The grid system transitions components smoothly from vertical mobile stacks into multi-column grid arrays (`.infoBox` components distributing space evenly), handling layout parameters cleanly across diverse display scopes.
* **Component-Level Styling Overrides:** Solved granular visual constraints when handling embedded layout blocks across variable nested trees. By implementing high-specificity, scoped style rule declarations (`.settings .contactWays a img`), the engine successfully forces custom height limits (`75px`) to preserve icon grids over absolute parameters.
* **Dynamic Node Content Pipeline Aggregation:** Configured reliable routing paths linking diverse frontend challenge apps (`JavaScript part`, `MovieWeb Project`, `Single-Page CV`) within a multi-page blueprint. Navigational links connect distinct document assets cleanly while keeping the layout container fully integrated across active views.

---

## Core Competencies Demonstrated

* **Advanced Layout Structural Styling:** Competence manipulating DOM elements across explicit structural parameters utilizing CSS Flexbox row models, multi-tier grid allocations, and relative coordinate boundaries.
* **Declarative UI State Management:** Leveraging native checkbox states to drive global color overrides across independent UI landmark layers.
* **Defensive Frontend Design:** Implementing automatic media constraint filters, modular cross-file dependencies (`stylesheet2.css`), and localized text alignments to preserve high-fidelity rendering layout balance.

---

## Application Features

* **State-Driven Dark Mode Module:** A global color space controller allowing view selection changes between light and deep visual layouts.
* **Consolidated Sub-Project Gateway:** A streamlined navigational framework directing target user traffic into external apps like a JavaScript RPG game board or an API-driven Movie Catalog.
* **Responsive Biography Hub:** Divided multi-column spaces grouping technical qualifications, academic courses, past projects, and validated recommendations cleanly.

---

## Installation and Deployment

This repository operates as a multi-page client application containing basic client modules and local Node.js backend drafts.

### 1. Clone the Repository
Execute the git command inside your terminal (replace with your specific repository URL copied from GitHub):
```bash
git clone https://github.com
```

### 2. Navigate to the Directory
Switch to the project root folder:
```bash
cd "Personal Portfolio"
```

### 3. Review Sub-Module Configurations
The platform includes sub-modules requiring localized dependency maps (such as the `projects/MovieWeb Project/BackEnd` server). Restoring those components requires standard node deployment routines:
```bash
cd "projects/MovieWeb Project/BackEnd"
npm install
```

### 4. Local Execution
* **Static Assets:** The main interface files can be evaluated directly by launching the `page/homePage2.html` layout file via any modern web browser interface.
* **Live Development Server:** Open the root project repository directly in Visual Studio Code and leverage the **Live Server** plugin on `homePage2.html` to navigate through all sub-projects cleanly with auto-reload activated.

---

## Author

Developed by **Daniel Belculfine**

* **LinkedIn:** [Daniel Belculfine](https://linkedin.com)
* **GitHub:** [Daniel27072007](https://github.com)
* **Roadmap.sh:** [dbelculfine](https://roadmap.sh)