# Accessible Form UI

A user profile configuration interface engineered with a strict focus on Web Accessibility (A11Y), semantic HTML5, and core CSS layout architecture. This project showcases the ability to build functional, compliant user interfaces without relying on heavy JavaScript dependencies.

---

## Technical Challenges Overcame

To complete this Roadmap.sh challenge successfully, the implementation required solving specific engineering problems regarding native browser behaviors and accessible design patterns:

* **State Management via CSS Architecture:** Engineered a non-JavaScript logical toggle for password visibility by leveraging hidden native inputs and the CSS general sibling combinator (`:checked ~ .toggle-label`). This keeps the DOM interactive while maintaining minimal runtime overhead.
* **A11Y Semantics Integration:** Configured precise ARIA attributes including `aria-required`, `aria-invalid`, `aria-describedby`, and `aria-live="assertive"` to guarantee real-time form validation states are clearly communicated to assistive technologies like screen readers.
* **Keyboard Navigation Engineering:** Enhanced standard keyboard interaction by explicitly managing `tabindex` and implementing inline keyboard event listeners (`onkeydown`). This ensures custom interactive elements capture the 'Enter' key appropriately for users relying solely on alternative inputs.
* **Robust Focus Styling:** Overrode default browser focus indicators with highly visible, customized `:focus-visible` states. This maintains cohesive visual branding without sacrificing usability for keyboard-only users.
* **Error State Styling:** Developed contextual visual error cues using custom CSS property modifications, including border-color and box-shadow transitions triggered dynamically via the `input[aria-invalid="true"]` state.

---

## Core Competencies Demonstrated

* **Semantic HTML5:** Proper use of structural landmark elements (`<section>`) and correct technical coupling of form controls with descriptive `<label>` tags.
* **Web Accessibility (A11Y):** Practical knowledge of the Web Content Accessibility Guidelines (WCAG), including DOM focus management, keyboard operability, and ARIA state management.
* **Advanced CSS Layouts:** Proficient structure creation using CSS Flexbox to manage multi-column layouts (`formPart` and `niceThings`), explicit alignment, and element positioning.
* **Interactivity Patterns:** Implementation of declarative UI patterns by utilizing native HTML element states to drive UI rendering changes directly through stylesheet rules.

---

## Application Features

* **Full Keyboard Operability:** Users can navigate through the entirety of the form (Full Name, Email, Password, Password Confirm, and Update Profile) using the `Tab` key with precise visual indicators.
* **Independent Password Toggle:** Dual functional visibility controls that swap visual icon assets dynamically upon interaction while preserving form input integrity.
* **Progress Tracking Module:** A dedicated sidebar segment mapping out profile completion metrics alongside static checklists representing state progress within the system.

---

## Installation and Deployment

This application is built entirely as a static client-side project utilizing native web technologies. No external package management or node dependency installation is required.

### 1. Clone the Repository
Execute the git command inside your terminal:
```bash
git clone https://github.com/daniel27072007/Frontend_Projects_Roadmaps.sh/tree/main/Accessible%20Form%20UI
```

### 2. Navigate to the Directory
Switch to the project root folder:
```bash
cd accessible-form-ui
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
