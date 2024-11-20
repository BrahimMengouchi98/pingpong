const links = document.querySelectorAll('.navbar .links-container .links li a');
const container = document.querySelector('.container');

links.forEach(element => {
	element.addEventListener('click', (event) => {
		
		// Prevent the default link behavior
		event.preventDefault(); 

		console.log("element: " + element);
		const active = document.querySelector('.navbar .links-container a.active');
		// console.log(element);
		// if (element.classList.contains('active'))
		// 	element.classList.remove('active');
		active.classList.remove('active');
		element.classList.add('active');


		// Check if the clicked link is the "Game" link
		if (element.parentElement.getAttribute('class') === 'game') {
			console.log('Game component will be added');
			
			// Change the URL to /game without reloading the page
			history.pushState({ page: 'game' }, 'Game', '/game');

			// Load the game component
			window.loadComponent2('game', container);
		  }
		  else if (element.parentElement.getAttribute('class') === 'chat') {
			// Check if the clicked link is the "Game" link  
			console.log('Chat component will be added');
			  
			  // Change the URL to /game without reloading the page
			history.pushState({ page: 'chat' }, 'Chat', '/chat');
  
			  // Load the game component
			 window.loadComponent2('chat', container);
			}
			else if (element.parentElement.getAttribute('class') === 'settings') {
				// Check if the clicked link is the "Game" link  
				console.log('Settings component will be added');
				  
				  // Change the URL to /game without reloading the page
				history.pushState({ page: 'settings' }, 'Settings', '/settings');
	  
				  // Load the game component
				 window.loadComponent2('settings', container);
			}
			else if (element.parentElement.getAttribute('class') === 'profile') {
				// Check if the clicked link is the "Game" link  
				console.log('Profile component will be added');
					
					// Change the URL to /game without reloading the page
				history.pushState({ page: 'profile' }, 'Profile', '/profile');
		
					// Load the game component
					window.loadComponent2('profile', container);
			}
	})
});

//   // Listen for popstate events to handle back/forward navigation
// window.addEventListener('popstate', (event) => {
// 	const componentName = event.state ? event.state.page : null;
// 	if (componentName) {
// 	  loadComponent(componentName);
// 	}
//   });


// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
    const componentName = event.state ? event.state.page : 'home'; // Default to home if no state
    console.log(`Navigating to: ${componentName}`);
    window.loadComponent2(componentName, container); // Load the appropriate component
});