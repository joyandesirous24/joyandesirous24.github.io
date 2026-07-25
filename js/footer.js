const footerHTML = `
  <div class="container footer-content">
    <p class="footer-name">Phil Aturo</p>
    <p class="footer-role">Software Engineer</p>
    <p class="footer-mission">Building reliable software systems through thoughtful engineering.</p>
    <div class="footer-links">
      <a href="https://github.com/PhilAturo" class="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/aturo-phil-4b2a122a7" class="footer-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://hashnode.com/@aturo-phil" class="footer-link" target="_blank" rel="noopener noreferrer">Hashnode</a>
      <a href="mailto:aturophil641@gmail.com" class="footer-link">Email</a>
    </div>
    <p class="footer-statement">
      Designed and built by Phil Aturo.<br>
      Built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.<br>
      Continuously evolving through engineering, research, and open-source development.
    </p>
  </div>
`;

export function injectFooter() {
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) {
    footerMount.innerHTML = footerHTML;
  }
}
