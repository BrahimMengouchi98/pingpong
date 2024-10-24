class Nav extends HTMLElement {
	constructor() {
	  super();
	}
	async connectedCallback() {
		// Fetch HTML
		const htmlResponse = await fetch('../views/nav.html');
		const htmlContent = await htmlResponse.text();
	
		// Fetch CSS
		const cssResponse = await fetch('../assets/css/nav.css');
		const cssContent = await cssResponse.text();

		// Fetch JavaScript
		const jsResponse = await fetch('../scripts/nav.js');
		const jsContent = await jsResponse.text();
	
		// Append CSS to the shadow DOM
		const style = document.createElement('style');
		style.textContent = cssContent;
	
		// Append JS to the shadow DOM
		const script = document.createElement('script');
		script.textContent = jsContent;

		// Set inner HTML
		this.innerHTML = htmlContent;
		this.appendChild(style);
		this.appendChild(script);

	  }
  }
  customElements.define('nav-component', Nav);
  