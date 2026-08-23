# Flash Cards Web Application

A single-page Flash Cards learning platform built with React 19, powered by Vite, and structured around the modern React Context API. The system provides an interactive framework for study review loops, managing complex state dependencies globally across independent UI view components.

---

## Technical Challenges Overcame

To complete this Roadmap.sh challenge successfully, the implementation required handling decentralized component communication pipelines, cross-provider lifecycle dependencies, and precise evaluation boundaries:

* **Global Shared Architecture via Compound Contexts:** Engineered a robust, centralized state engine by compounding multiple scoped Context trees (`CardContext` and `AtualCardContext`) under a unified composite framework (`GlobalProvider`). This mitigates the performance costs of prop-drilling, delivering data directly to deeply nested layout structures like navigation systems and individual visual wrappers.
* **Complex UI Control Mutators:** Programmed automated evaluation controls inside menu mechanisms (`ButtonMenu.jsx`). The button component evaluates global index integers to intercept illegal pagination requests (`disabled={AtualCard == 0}`), while binding dynamic callback algorithms to re-toggle answers to hidden modes automatically upon processing pagination shifts.
* **Dynamic Index Bounds Engineering:** Structured a reliable, out-of-bounds text layout template inside main viewing fields (`Card.jsx`). The grid matrix tracks indices seamlessly through localized text lists, executing final text updates and intercepting runtime pointer index tracking bugs as soon as the index counts match the absolute limit parameters (`AtualCard == 20`).
* **Declarative Metrics Tracking:** Formulated a reactive tracking display (`ProgressBar.jsx`) linked directly to native browser elements (`<progress>`). The layout updates progress values based on runtime indexes while processing conditional mathematical strings (`AtualCard > 20 ? AtualCard-1 : ...`) to keep visible labels accurate without duplicating underlying state variables.

---

## Core Competencies Demonstrated

* **Modern React Hook Execution:** Comprehensive mastery of operational hooks (`useContext`, `useState`) to capture element nodes, pass variable frameworks, and control UI states.
* **Modular React Directory Structuring:** Organizing project files logically into specialized functional sub-directories (`Components`, `Context`), facilitating smooth component expansion and cleaner maintenance logs.
* **Declarative Component Engineering:** Constructing interactive client interfaces entirely using clean functional JSX syntax, separating render views from calculations.

---

## Application Features

* **Interactive Study Board Module:** An active question panel displaying core development queries that can be toggled to show or hide the text solution instantly based on selection triggers.
* **Global Navigation Infrastructure:** Forward and backward pagination controls that respect chronological document limits and automatically handle visibility states.
* **Live Operational Metrics Tracker:** A synced graphical bar tracking the user's progress through a 20-card review deck.

---

## Installation and Deployment

This application uses the Node Package Manager (`package.json`) to install developer tools and build production assets via Vite.

### 1. Clone the Repository
Execute the git command inside your terminal (replace with your specific repository URL copied from GitHub):
```bash
git clone https://github.com
```

### 2. Navigate to the Directory
Switch to the project root folder:
```bash
cd "Flash Cards"
```

### 3. Install Production Dependencies
Restore all compiler packages, production tools, and React engines defined inside the manifest files:
```bash
npm install
```

### 4. Local Execution
Launch the local development environment using Vite's server:
```bash
npm run dev
```
Open your browser and navigate to the local host address provided in the terminal output (typically `http://localhost:5173`).

---

## Author

Developed by **Daniel Belculfine**

* **LinkedIn:** [Daniel Belculfine](https://www.linkedin.com/in/daniel-belculfine-2905253b3/)
* **GitHub:** [Daniel27072007](https://github.com/daniel27072007)
* **Roadmap.sh:** [dbelculfine](https://roadmap.sh/u/dbelculfine)