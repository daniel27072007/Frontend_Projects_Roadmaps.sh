# Blog Post Page

A clean, responsive single-page blog article layout built strictly with native semantic HTML5 tags. This project serves as a practical demonstration of building accessible web documents by mapping textual hierarchy directly to browser landmark modules without using inline visual styling or third-party presentation frameworks.

---

## Technical Challenges Overcame

To complete this Roadmap.sh challenge successfully, the implementation required solving document distribution flows, accessibility structures, and character escaping properties inside the runtime DOM tree:

* **Strict Landmark Separation Hierarchy:** Engineered a segmented text container architecture separating distinct logical document areas using native components like `<header>`, `<main>`, `<article>`, and `<footer>`. This structural separation enforces accessibility criteria, allowing screen readers to jump between sections effortlessly.
* **Component Semantics Deployment:** Integrated specialized semantic tags to display contextual article metadata correctly. The logic leverages the `<time datetime="2026-5-20">` attribute to provide uniform machine-readable scheduling data while serving clean human-readable representations directly inside the article header.
* **Embedded Technical Syntax Presentation:** Resolved character rendering conflicts when outputting raw tags inside text streams. The structure maps strict HTML entities (`&lt;` and `&gt;`) inside `<code>` modules to output browser syntax strings safely without breaking active document tags or spawning unexpected nested nodes.
* **Complex Figure Asset Association:** Structured media attachments safely by wrapping core image components with standard caption identifiers (`<figcaption>`). This architectural design maps visual graphics explicitly to textual descriptions, preserving semantic accuracy under modern WCAG standards.

---

## Core Competencies Demonstrated

* **Semantic Content Engineering:** Applying standard hierarchy tags (`<h1>` down to `<h3>`) along with structural components to establish strict document readability logic.
* **Inline Technical Formats:** Utilizing micro-semantics such as `<cite>` for external resource sourcing and `<code>` blocks to display software parameters cleanly.
* **SEO and Crawler Optimization:** Structuring standard machine-readable text components that allow modern search engine crawlers to parse page intent effortlessly.

---

## Application Features

* **Hierarchical Navigational Header:** Integrated upper platform navigation controls referencing structural landing points like Home, Blog, About, and Contact.
* **Isolated Content Core:** An article container wrapping text breakdowns, distinct bullet points, image showcases, blockquotes, and live code examples.
* **Accessible Metadata Layout:** Contextual date configurations and resource documentation links mapping out clean reading flows.

---

## Installation and Deployment

This application operates completely as a client-side component using standard native browser engines. No runtime modules or server installation tasks are required.

### 1. Clone the Repository
Execute the git command inside your terminal (replace with your specific repository URL copied from GitHub):
```bash
git clone https://github.com
```

### 2. Navigate to the Directory
Switch to the project root folder:
```bash
cd "Blog Post Page"
```

### 3. Local Execution
You can evaluate this application using standard local browser rendering workflows:
* **Direct Browser File Launch:** Access the application directory via your operating system file navigator and double-click the `index.html` file to launch the page inside any browser platform.
* **VS Code Server Tooling:** Load the parent project directory inside Visual Studio Code, activate the **Live Server** extension, and right-click `index.html` to load the application inside a local development environment.

---

## Author

Developed by **Daniel Belculfine**

* **LinkedIn:** [Daniel Belculfine](https://www.linkedin.com/in/daniel-belculfine-2905253b3/)
* **GitHub:** [Daniel27072007](https://github.com/daniel27072007)
* **Roadmap.sh:** [dbelculfine](https://roadmap.sh/u/dbelculfine)