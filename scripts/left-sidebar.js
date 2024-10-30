(function initializeSidebarComponent(component) {
	// const sidebar = component.querySelector('.sidebar');
  
	const active = document.querySelector('.sidebar .nav .links .active');
	const inactive = document.querySelector('.sidebar .nav .links .inactive');
	const friends = document.querySelector('.sidebar .show');
	const channels = document.querySelector('.sidebar .hidden');

	inactive.addEventListener('click', ()=> {
		inactive.classList.replace('inactive', 'active');
		active.classList.replace('active', 'inactive');
		friends.classList.replace('show', 'hidden');
		channels.classList.replace('hidden', 'show');
	})

	active.addEventListener('click', ()=> {
		inactive.classList.replace('active', 'inactive');
		active.classList.replace('inactive', 'active');
		friends.classList.replace('hidden', 'show');
		channels.classList.replace('show', 'hidden');
	})

	// when click on add friend button
	const addFriendBtn = document.querySelector('.sidebar .friends .nav .add-friend');
	addFriendBtn.addEventListener('click', ()=> {
		// confirm('hello:');
		loadComponent("add-friend");
	})
	
	// click on add channel button
	const addChannelBtn = document.querySelector('.sidebar .channels .nav .add-channel');
	addChannelBtn.addEventListener('click', ()=> {
		//confirm('hello:');
		loadComponent("add-channel");
	})

	const select = document.querySelectorAll('.sidebar .friends .nav .select-box');
	select.forEach(ele => {
		ele.addEventListener('click', () => {
			if (ele.classList.contains('close'))
			{
				ele.classList.replace('close', 'open');
				ele.children[0].children[2].setAttribute('class', 'i-right fa-solid fa-angle-up');
				ele.nextElementSibling.style.display = 'block';
			}
			else
			{
				ele.classList.replace('open', 'close');
				ele.children[0].children[2].setAttribute('class', 'i-right fa-solid fa-angle-down');
				ele.nextElementSibling.style.display = 'none';
			}
			// console.log(ele);
		})
	})

	
	function loadComponent(componentName) {
		// Remove any existing component
		const existingComponent = container.querySelector('add-friend-component, add-channel-component');
		
		if (existingComponent) {
		//   existingComponent.remove();
		return;
		}
	  
		// Create a new component based on the componentName
		let newComponent;
		let containerName;
		switch (componentName) {
			case 'add-friend':
				if (!existingComponent)
					newComponent = document.createElement('add-friend-component');
					console.log(newComponent);
					containerName = ".add-friend-container";
					// else
				// newComponent = document.getElementsByTagName('add-friend-component')[0];
					break;
			case 'add-channel':
				if (!existingComponent)
					newComponent = document.createElement('add-channel-component');
					console.log(newComponent);
					containerName = ".add-channel-container";
					// else
				// newComponent = document.getElementsByTagName('add-friend-component')[0];
					break;
			default:
			return;
		}
	  
		// Append the new component to the container
		if (!existingComponent)
		{
			container.appendChild(newComponent);

		}
		newComponent.addEventListener('content-loaded', () => {
			// Access the HTML inside the component
			//console.log(containerName);
			const input = newComponent.querySelector(`${containerName} .input-msg input`);
			// click add button
			const add = newComponent.querySelector(`${containerName} .actions .add`);
			add.addEventListener('click', ()=>{
				console.log(input.value);
				newComponent.remove();
			})
			// click cancel button 
			const cancel  = newComponent.querySelector(`${containerName} .actions .cancel`);
			cancel.addEventListener('click', ()=>{
				newComponent.remove();
			})
			//console.log(sidebar); // This will log the <div class="sidebar"> element
			//chat.classList.add('active');
		})
	  }
  })(this);
