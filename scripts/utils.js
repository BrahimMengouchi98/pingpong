function loadMessageFriend(newComponent, nickname) {
	const invitedFriends = newComponent.querySelector('.sidebar-right .friends .nav .drop-down');
	
	invitedFriends.innerHTML = '';
	
	const list = document.createElement('li');
		
		list.classList.add('select-box');
		
		const profile = document.createElement('div');
		profile.classList.add('profile');

		const a = document.createElement('a');

		const img = document.createElement('img');
		img.src = "../assets/imgs/sidebar/profile.jpg";

		const span = document.createElement('span');
		span.classList.add('nickname');
		span.textContent = nickname;

		// append img and span to a
		a.appendChild(img);
		a.appendChild(span);
		
		// append a to profile
		profile.appendChild(a);

		const actions = document.createElement('div');
		actions.classList.add('actions');
		
		const a2 = document.createElement('a');

		const i = document.createElement('i');
		i.classList.add('fa-solid');
		i.classList.add('fa-table-tennis-paddle-ball');

		// append i to i
		a2.appendChild(i);

		// append a to actions div
		actions.appendChild(a2);

		list.appendChild(profile);
		list.appendChild(actions);

		// append li to ul
		invitedFriends.appendChild(list);
}


function loadChat(newComponent, containerName, nickname) {
	// Access the HTML inside the component
	const chat = newComponent.querySelector(containerName);
	console.log(chat);
	const friend_name = newComponent.children[0].children[0].children[0];
	// const body_first_msg = newComponent.querySelector(`${containerName} .body-msg span.first-msg`);
	// body_first_msg.remove();
	// console.log(body_first_msg);
	const input1 = friend_name.parentElement.nextElementSibling.nextElementSibling;
	const input2 = friend_name.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;
	friend_name.innerHTML = nickname;
	select_friend = newComponent.querySelector(`${containerName} .body-msg span.first-msg`);
	if (select_friend)
		select_friend.remove();
	input1.style.display = 'none';
	input2.style.display = 'block';
	input2.children[1].innerHTML = 'Messaging ' + nickname;
	if (!chat.classList.contains('active'))
		chat.classList.add('active');
};

// load chat component
window.loadComponent3 = function(container, componentName, nickname) {
	console.log("hello bitch");
	// Remove any existing component
	const existingComponent = container.querySelector(`${componentName}`);
	console.log("curva", existingComponent)
	if (existingComponent) {
	//   existingComponent.remove();
	}
  
	// Create a new component based on the componentName
	let newComponent;
	let containerName;
	switch (componentName) {
		case 'chat-component':
			containerName = ".chat-container";
			if (!existingComponent)
				newComponent = document.createElement('chat-component');
			else
			{
				newComponent = document.getElementsByTagName('chat-component')[0];
				loadChat(newComponent, containerName, nickname);
			}
			break;
		case 'right-sidebar-component':
			if (!existingComponent)
				newComponent = document.createElement('right-sidebar-component');
			else
			{
				newComponent = document.getElementsByTagName('right-sidebar-component')[0];
				loadMessageFriend(newComponent, nickname);
			}
			containerName = "message-friend";
			break;
		default:
		// return;
	}
  
	// Append the new component to the container
	if (!existingComponent)
		container.appendChild(newComponent);
		newComponent.addEventListener('content-loaded', () => {
		if (containerName == ".chat-container")
			loadChat(newComponent, containerName, nickname);
		else if (containerName == "message-friend")
			loadMessageFriend(newComponent, nickname);
	})
  };


  // build an invited list
  function buildInviteList(nickname)
  {
	const invitedFriends = document.querySelector('.sidebar .friends .nav .drop-down.invited');
	const list = document.createElement('li');
	
	list.classList.add('select-box');
	list.classList.add('close');
	
	const profile = document.createElement('div');
	profile.classList.add('profile');

	const a = document.createElement('a');

	const img = document.createElement('img');
	img.src = "../assets/imgs/sidebar/profile.jpg";

	const span = document.createElement('span');
	span.classList.add('nickname');
	span.textContent = nickname;

	// append img and span to a
	a.appendChild(img);
	a.appendChild(span);
	
	// append a to profile
	profile.appendChild(a);

	const actions = document.createElement('div');
	actions.classList.add('actions');
	
	const a2 = document.createElement('a');

	const i = document.createElement('i');
	i.classList.add('fa-solid');
	i.classList.add('fa-trash');

	// append i to i
	a2.appendChild(i);

	// append a to actions div
	actions.appendChild(a2);

	list.appendChild(profile);
	list.appendChild(actions);

	// append li to ul
	invitedFriends.appendChild(list);
	// console.log(invitedFriends);
}

function buildChannelsList(channelName)
  {
	const invitedFriends = document.querySelector('.sidebar .channels .nav .drop-down.my-channels');
	const list = document.createElement('li');
	
	list.classList.add('select-box');
	list.classList.add('close');
	
	const profile = document.createElement('div');
	profile.classList.add('profile');

	const a = document.createElement('a');

	const img = document.createElement('img');
	img.src = "../assets/imgs/sidebar/profile.jpg";

	const span = document.createElement('span');
	span.classList.add('nickname');
	span.textContent = channelName;

	// append img and span to a
	a.appendChild(img);
	a.appendChild(span);
	
	// append a to profile
	profile.appendChild(a);

	const actions = document.createElement('div');
	actions.classList.add('actions');
	
	const a2 = document.createElement('a');

	const i = document.createElement('i');
	i.classList.add('fa-solid');
	i.classList.add('fa-gear');

	// append i to i
	a2.appendChild(i);

	// append a to actions div
	actions.appendChild(a2);

	list.appendChild(profile);
	list.appendChild(actions);

	// append li to ul
	invitedFriends.appendChild(list);
	// console.log(invitedFriends);
}

  function listeningForAction(newComponent, containerName, input, option) {
		
	if (containerName == ".add-friend-container")
		buildInviteList(input.value);
	else
	{
		const list = document.querySelector("li.select-box .profile a.active");
		if (option == 1)
			buildChannelsList(input.value);
		else if (option == 2)
		{
			console.log(list.children[1]);
			list.children[1].innerHTML = input.value;
		}
		else if (option == 3)
		{
			if (input.value == list.children[1].textContent)
				list.parentElement.parentElement.remove();
			else
			{
				alert("unmatch");
				return;
			}
		}
	}
	newComponent.remove();
}

function getFriends() {
	const friends = document.querySelectorAll('.sidebar .friends .drop-down.my-friends li.select-box .profile a span');
	friends.forEach(li => {
		window.buildMemberList(li.textContent);
		// console.log(li.textContent);
	})
}

function changeOption(newComponent, containerName, option) {
	const options = newComponent.querySelectorAll(`${containerName} .option`);
	options.forEach((opt, i) => {
		console.log(i);
		opt.style.display = 'none';
		if (i == option)
		{
			opt.style.display = 'block';
			if (containerName == ".add-friend-container" && option == 1)
			{
				getFriends();
			}
		}
	})
}

window.loadComponent = function(container, componentName, option) {
	// Remove any existing component
	const existingComponent = container.querySelector('add-friend-component, add-channel-component');
	
	if (existingComponent) {
	//   existingComponent.remove();
	//return;
	}
  
	// Create a new component based on the componentName
	let newComponent;
	let containerName;
	switch (componentName) {
		case 'add-friend':
			if (!existingComponent)
				newComponent = document.createElement('add-friend-component');
				// console.log(newComponent);
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
		changeOption(newComponent, containerName, option);
		const input = newComponent.querySelectorAll(`${containerName} .input-msg input`)[option];
		if (input)
		{
			input.addEventListener('keypress', (e) => {
				if (e.key == 'Enter')
				{
					listeningForAction(newComponent, containerName, input, option);
				}
			});
		}

		// click add button
		const add = newComponent.querySelectorAll(`${containerName} .actions .add`)[option];
		//const add = newComponent.querySelector(`${containerName} .actions .add`);
		// console.log(add);
		// add friend name to invite list or 
		// add channel or change name to a channel or delete a channel
		if (add)
		{
			add.addEventListener('click', ()=>{
				listeningForAction(newComponent, containerName, input, option);
			})
		}
		
		// click cancel button 
		const cancel  = newComponent.querySelectorAll(`${containerName} .actions .cancel`)[option];
		if (cancel)
		{
			cancel.addEventListener('click', ()=>{
				// console.log(cancel);
				newComponent.remove();
			})
			
		}
		// when click on add member window
		const addMember  = newComponent.querySelectorAll(`${containerName} .option.add-member ul.drop-down li.select-box .actions a i`);
		addMember.forEach(li => {
			//listeningForAction(newComponent, containerName, input, option);
			li.addEventListener('click', ()=> {
				// console.log();
				const nickname = li.parentElement.parentElement.previousSibling.children[0].children[1].textContent;
				window.addListMember(nickname);
				li.parentElement.parentElement.parentElement.remove();
			})
		})
		//console.log(sidebar); // This will log the <div class="sidebar"> element
		//chat.classList.add('active');
	})
  };

  // Function to load the specified component
window.loadComponent2 = function(componentName, container) {
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
  };