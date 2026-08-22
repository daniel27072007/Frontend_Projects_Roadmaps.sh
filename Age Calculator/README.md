# Age Calculator

A professional, client-side web application engineered to calculate a user's precise age down to the exact days, months, and years. This project demonstrates third-party dependency integration, modular JavaScript execution, and precise temporal calculations using advanced date libraries rather than relying on error-prone native date arithmetic.

---

## Technical Challenges Overcame

To complete this Roadmap.sh challenge successfully, the implementation required handling external library configurations, JavaScript modules within browser runtimes, and strict temporal boundary validation:

* **Advanced Temporal Math via Luxon:** Implemented the `Luxon` library using ES6 browser modules to execute exact calendar calculations. By utilizing `DateTime.diff()`, the application natively manages complex date logic such as leap years and variable month lengths, avoiding common compounding rounding errors found in vanilla date mathematics.
* **Third-Party UI Component Lifecycle:** Integrated the `flatpickr` library to provide a polished, accessible datepicker interface. Configured custom date formatting constraints (`d/m/Y`) and hooked into the library's asynchronous `onChange` lifecycle callback to instantly extract and process selected JavaScript date objects.
* **Granular Input Validation & Boundaries:** Engineered strict runtime validation constraints to prevent illogical operations. The execution handles future date entries (`anos < 0`) and extreme outliers (`anos > 100`) dynamically, overriding calculations to supply clear error messaging directly within the active DOM viewport.
* **Natively Scoped Variable Pipelines:** Organized state variables (`anos`, `meses`, `dias`) across closures, enabling asynchronous value updates between the date picker's change events and the click handler of the main action element.

---

## Core Competencies Demonstrated

* **Modern Dependency Integration:** Managing project packages through Node Package Manager (`package.json`) and declaring production script bundles directly within standard web assets.
* **ES6 Modular Architecture:** Utilizing native browser module compilation (`type="module"`) to selectively import dependencies without polluting global layout namespaces.
* **Defensive Error Engineering:** Devising defensive validation checks inside client-side event loops to guarantee logical application outputs across unpredictable user actions.

---

## Application Features

* **Calibrated Age Telemetry:** Captures and translates a date input into a detailed summary detailing the user's specific age in years, months, and days.
* **Interactive Date Picker:** Seamless desktop and mobile calendar integration providing error-free input mapping without manually typing text values.
* **Real-time Form Defenses:** Built-in validation filters rejecting future timestamps or implausible age distributions.

---

## Installation and Deployment

This application relies on external dependencies managed by node package ecosystems. Follow these execution instructions to initialize the project environment:

### 1. Clone the Repository
Execute the git command inside your terminal (replace with your specific repository URL copied from GitHub):
```bash
git clone https://github.com
```

### 2. Navigate to the Directory
Switch to the project root folder:
```bash
cd age-calculator
```

### 3. Install Dependencies
Restore the required development packages (`flatpickr` and `luxon`) configured inside the project's dependency manifest:
```bash
npm install
```

### 4. Local Execution
Because this application loads third-party assets through native ES6 imports (`import { DateTime }`), browsers require the application to run within a secure server environment. 

* **Recommended Deployment:** Open the directory within Visual Studio Code, ensure the **Live Server** extension is installed, right-click on `index.html`, and select **Open with Live Server**. This creates a local host pipeline (`http://127.0.0.1`) that complies with browser module security rules.

---

## Author

Developed by **Daniel Belculfine**

* **LinkedIn:** [seu-perfil](https://linkedin.com)
* **GitHub:** [seu-usuario](https://github.com)
* **Roadmap.sh:** [seu-perfil](https://roadmap.sh)
