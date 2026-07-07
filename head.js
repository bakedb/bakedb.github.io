class HeadTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" href="paw-logo.png" type="image/svg+xml">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap">
      <link rel="stylesheet" href="style.css">
    `;
    
    // Move the children elements into the actual document <head>
    while (this.firstElementChild) {
      document.head.appendChild(this.firstElementChild);
    }
    // Remove the temporary custom element from the DOM body
    this.remove();
  }
}

customElements.define('head-template', HeadTemplate);