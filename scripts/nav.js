const links = document.querySelectorAll('.navbar .links-container a');
const container = document.querySelector('.container');

links.forEach(element => {
	element.addEventListener('click', (event) => {
		const active = document.querySelector('.navbar .links-container a.active');
		// console.log(element);
		// if (element.classList.contains('active'))
		// 	element.classList.remove('active');
		active.classList.remove('active');
		element.classList.add('active');
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
		  else if (element.parentElement.getAttribute('class') === 'chat') {
			// Check if the clicked link is the "Game" link  
			console.log('Chat component will be added');
			  
			  // Change the URL to /game without reloading the page
			history.pushState({ page: 'chat' }, 'Chat', '/chat');
  
			  // Load the game component
			  loadComponent('chat');
			}
	})
});


// Function to load the specified component
function loadComponent(componentName) {
	// Remove any existing component
	const existingComponent = container.querySelector('game-component, sign-component, chat-component');
	if (existingComponent) {
	  existingComponent.remove();
	}
  
	// Create a new component based on the componentName
	let newComponent;
	let containerName;
	switch (componentName) {
	    case 'game':
			newComponent = document.createElement('game-component');
			break;
		case 'chat':
			newComponent = document.createElement('chat-component');
			containerName = ".chat-container";
		break;
		default:
		return;
	}
  
	// Append the new component to the container
	container.appendChild(newComponent);
	newComponent.addEventListener('content-loaded', () => {
		// Access the HTML inside the component
		//console.log(containerName);
		const chat = newComponent.querySelector(containerName);
		//console.log(sidebar); // This will log the <div class="sidebar"> element
		chat.classList.add('active');
	})
  }
  
//   let components = ['']
  function loadComponent2(componentName, nickname) {
	
	// Remove any existing component
	const existingComponent = container.querySelector('game-component, sign-component, chat-component');
	if (existingComponent) {
	//   existingComponent.remove();
	}
  
	// Create a new component based on the componentName
	let newComponent;
	let containerName;
	switch (componentName) {
	    case 'game':
			newComponent = document.createElement('game-component');
			break;
		case 'chat':
			containerName = ".chat-container";
			if (!existingComponent)
			{
				newComponent = document.createElement('chat-component');
			}
			else
			{
				newComponent = document.getElementsByTagName('chat-component')[0];
				loadChat(newComponent, containerName, nickname);
			}
			
		break;
		default:
		return;
	}
  
	// Append the new component to the container
	if (!existingComponent)
		container.appendChild(newComponent);
		newComponent.addEventListener('content-loaded', () => {
		loadChat(newComponent, containerName, nickname);
	})
  }
  

  function loadChat(newComponent, containerName, nickname) {
	// Access the HTML inside the component
	const chat = newComponent.querySelector(containerName);
	const friend_name = newComponent.children[0].children[0].children[0];
	const input1 = friend_name.parentElement.nextElementSibling.nextElementSibling;
	const input2 = friend_name.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;
	friend_name.innerHTML = nickname;
	input1.style.display = 'none';
	input2.style.display = 'block';
	input2.children[1].innerHTML = 'Messaging ' + nickname;
	if (!chat.classList.contains('active'))
		chat.classList.add('active');
}


  // Listen for popstate events to handle back/forward navigation
window.addEventListener('popstate', (event) => {
	const componentName = event.state ? event.state.page : null;
	if (componentName) {
	  loadComponent(componentName);
	}
  });