# Contact Form

A semantic, standard-compliant contact and support form application engineered using native HTML5 markup constraints. This implementation emphasizes accessible user data ingestion structures, strict form layout semantics, and browser-level field validation workflows without relying on external validation scripts or design frameworks.

---

## Technical Challenges Overcame

To complete this Roadmap.sh challenge successfully, the implementation required solving data categorization issues, input element coupling, and native client-side validation logic within a browser context:

* **Explicit Label-to-Control Binding Architecture:** Engineered a fully accessible form node tree by establishing precise programmatic links between form components using matching `for` and `id` properties. This technical pairing expands interactive focus hit targets and ensures that screen readers broadcast form controls with contextual vocal parameters.
* **Declarative Client-Side Input Defenses:** Programmed semantic boundary limits natively on user text entries. The form maps specialized browser parameters including `type="email"`, `required` properties, and restrictive data metrics like `minlength="5"` and `maxlength="250"` directly inside the `<textarea>` node to catch invalid structures before submission loops trigger.
* **Accessible Group Contextual Isolation:** Structured an isolated segment for user sourcing parameters by incorporating a standard `<fieldset>` wrap coupled with a contextual `<legend>` marker. This groups the localized radio group (`name="byWho"`) programmatically, signaling cohesive semantic context to assistive technologies.
* **Standardized Form Serialization Parameters:** Configured input elements with unique, explicit `name` identifiers (`User_Full_Name`, `User_Email`, `Subject`, `Message`). This enables proper browser data compilation and guarantees seamless form serialization during standard `POST` method data transfers.

---

## Core Competencies Demonstrated

* **Semantic User Ingestion Engineering:** Proper deployment of native input variations (`type="text"`, `type="email"`, `type="radio"`, `type="checkbox"`) alongside dropdown `<select>` modules to handle complex data inputs cleanly.
* **Standard Browser UI Semantics:** Applying native structural nodes (`<header>`, `<main>`, `<footer>`) to construct an isolated form entry context beneath standard header menus.
* **Native Assistive Accessibility:** Building forms that comply with native HTML5 accessibility blueprints by executing explicit control mapping and logical container encapsulation.

---

## Application Features

* **Comprehensive Data Capture Pipeline:** Captures comprehensive support data fields including customer identity, valid email pointers, dynamic topic selections, and long-form feedback descriptions.
* **Granular Survey Module:** An isolated radio matrix enabling multi-choice, single-selection tracking parameters regarding brand discoverability pathways.
* **Built-in Validation Defenses:** Native alert barriers blocking incomplete submissions, invalid email formats, or short message payloads automatically inside the viewport.

---

## Installation and Deployment

This application operates completely as a client-side layout component using standard native browser engines. No internal script setup or server-side installations are required.

### 1. Clone the Repository
Execute the git command inside your terminal (replace with your specific repository URL copied from GitHub):
```bash
git clone https://github.com
```

### 2. Navigate to the Directory
Switch to the project root folder:
```bash
cd "Contact Form"
```

### 3. Local Execution
You can evaluate this application using standard local browser rendering workflows:
* **Direct Browser File Launch:** Navigate to the local project directory through your operating system file manager and double-click the `index.html` file to render the page inside any browser software.
* **VS Code Live Server Tooling:** Load the parent project directory inside Visual Studio Code, activate the **Live Server** extension, and right-click `index.html` to run the contact application within an automated local hot-reloaded dev server.

---

## Author

Developed by **Daniel Belculfine**

* **LinkedIn:** [Daniel Belculfine](https://linkedin.com)
* **GitHub:** [Daniel27072007](https://github.com)
* **Roadmap.sh:** [dbelculfine](https://roadmap.sh)