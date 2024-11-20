const routes = {
    "/": "home-component",
    "/chat": "chat-component",
    "/settings": "settings-component",
	"/profile": "profile-component",
	"/game": "game-component"
};

function router() {
    const path = window.location.pathname; // Get current path
    const componentName = routes[path] || "notfound-component"; // Default to "notfound-component"
	
	console.log(path);
    const appContainer = document.querySelector(".container");

	if (componentName == "notfound-component") {
        // Create a "notfound-component" to show when the route is not found
        const notFoundComponent = document.createElement("div");
        notFoundComponent.innerHTML = "<h1>404 - Page Not Found</h1><p>The page you're looking for does not exist.</p>";
        appContainer.textContent = "";
		appContainer.appendChild(notFoundComponent); // Append the "not found" component to the container
        return; // Stop the function execution here
    }


	
    //appContainer.innerHTML = ""; // Clear previous content

    // const componentElement = document.createElement(componentName); // Create new component element
    //appContainer.appendChild(componentElement);
	
	if (componentName == "home-component")
	{
		console.log('eee');
		//window.loadComponent2("chat", appContainer);
	}
	
	else if (componentName == "settings-component")
	{
		console.log("setting");
		window.loadComponent2("settings", appContainer);

	}
	else if (componentName == "chat-component")
	{
		console.log('sss');
		window.loadComponent2("chat", appContainer);
	}
	else if (componentName == "profile-component")
	{
		console.log('sss');
		window.loadComponent2("profile", appContainer);
	}
}

function navigateTo(path) {
    history.pushState({}, "", path); // Update the browser's URL
    router(); // Rerun the router to update content
}

window.addEventListener("popstate", router); // Handle browser back/forward buttons

document.addEventListener("DOMContentLoaded", () => {
    // Attach event listener to capture link clicks and use client-side routing
    document.body.addEventListener("click", (e) => {
        if (e.target.tagName === "A" && e.target.dataset.link === "true") {
            e.preventDefault(); // Prevent default browser navigation
            navigateTo(e.target.pathname); // Use the pathname for routing
        }
    });

    router(); // Run the router on page load to display the correct component
});

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



