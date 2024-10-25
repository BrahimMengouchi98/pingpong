leftBtn = document.querySelector('.left');

leftBtn.addEventListener('mouseover', ()=>{
	
		// window.location.host += "/home";
		console.log(window.location.host);
		const container = document.querySelector('.container');
		// Remove any existing component
		const existingComponent = container.querySelector('left-sidebar-component');
		if (existingComponent) {
		existingComponent.remove();
		}

		// Create a new game component and add it to the container
		const leftSidebarComponent = document.createElement('left-sidebar-component');
		container.appendChild(leftSidebarComponent);

		// Listen for the custom event 'content-loaded' to access the content
		leftSidebarComponent.addEventListener('content-loaded', () => {
			// Access the HTML inside the component
			const sidebar = leftSidebarComponent.querySelector('.sidebar');
			console.log(sidebar); // This will log the <div class="sidebar"> element
			sidebar.classList.add('hover');
		})
})