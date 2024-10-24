const links = document.querySelectorAll('a');
const container = document.querySelector('.container');


links.forEach(element => {
	element.addEventListener('click', (event) => {
		
		// Prevent the default link behavior
		event.preventDefault(); 

		// Check if the clicked link is the "Game" link
		if (element.parentElement.getAttribute('class') === 'game') {
			console.log('Game component will be added');
			
			// Change the URL to /game without reloading the page
			history.pushState({ page: 'game' }, 'Game', '/game');

			// Load the game component
			loadComponent('game');
		  }
	})
});


// Function to load the specified component
function loadComponent(componentName) {
	// Remove any existing component
	const existingComponent = container.querySelector('game-component, sign-component, home-component');
	if (existingComponent) {
	  existingComponent.remove();
	}
  
	// Create a new component based on the componentName
	let newComponent;
	switch (componentName) {
	  case 'game':
		newComponent = document.createElement('game-component');
		break;
	  // Add more cases here if you want to handle other components
	  // case 'sign':
	  //   newComponent = document.createElement('sign-component');
	  //   break;
	  // case 'home':
	  //   newComponent = document.createElement('home-component');
	  //   break;
	  default:
		return; // If no valid component is found, do nothing
	}
  
	// Append the new component to the container
	container.appendChild(newComponent);
  }
  
  // Listen for popstate events to handle back/forward navigation
window.addEventListener('popstate', (event) => {
	const componentName = event.state ? event.state.page : null;
	if (componentName) {
	  loadComponent(componentName);
	}
  });