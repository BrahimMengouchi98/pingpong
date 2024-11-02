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

	const select = document.querySelectorAll('.sidebar .friends .nav > .select-box');
	select.forEach(ele => {
		ele.addEventListener('click', () => {
			if (ele.classList.contains('close'))
			{
				ele.classList.replace('close', 'open');
				ele.children[0].children[2].setAttribute('class', 'i-right fa-solid fa-angle-up');
				//ele.children[0].children[2].className = 'i-right fa-solid fa-angle-up';
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
				// add friend name to invite list
				console.log(input.value);
				buildInviteList(input.value);
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

	  // when click on block button that exist in friends list
		const blockBtnFriend =  document.querySelector('.sidebar .friends .nav .drop-down.my-friends');
	    blockBtnFriend.addEventListener('click', (e) =>{
		//   console.log(blockBtnFriend);
		// Check if the clicked element is an 'li' with the 'select-box' class
	  const li = e.target.closest('li.select-box .actions a.first');
	  if (li) {
		//   console.log("Hello");
		  console.log(li);
		  const nickname = li.parentElement.previousElementSibling.children[0].children[1].textContent;
		  li.parentElement.parentElement.remove()
		  buildBlockedList(nickname);  
	  }
	  })

	  // when click on block button that exist in friends list
	  const unfriendBtnFriend =  document.querySelector('.sidebar .friends .nav .drop-down.my-friends');
	  unfriendBtnFriend.addEventListener('click', (e) =>{
		//   console.log(blockBtnFriend);
		// Check if the clicked element is an 'li' with the 'select-box' class
	  const li = e.target.closest('li.select-box .actions a.second');
	  if (li) {
		//   console.log("Hello");
		  console.log(li);		
		  //const nickname = li.parentElement.previousElementSibling.children[0].children[1].textContent;
		  li.parentElement.parentElement.remove()
		  //buildBlockedList(nickname);  
	  }
	  })


	  // when click on deblock button that exist in blocked list
		const reblockBtnFriend =  document.querySelector('.sidebar .friends .nav .drop-down.blocked');
	    reblockBtnFriend.addEventListener('click', (e) =>{
		//   console.log(blockBtnFriend);
		// Check if the clicked element is an 'li' with the 'select-box' class
	  const li = e.target.closest('li.select-box .actions a');
	  if (li) {
		//   console.log("Hello");
		
		  console.log(li);
		  const nickname = li.parentElement.previousElementSibling.children[0].children[1].textContent;
		  li.parentElement.parentElement.remove()
		  buildFriendList(nickname);
	  }
	  })


	  // build a friend list
	  function buildFriendList(nickname)
	  {
		const invitedFriends = document.querySelector('.sidebar .friends .nav .drop-down.my-friends');
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
		a2.classList.add("first");

		const i = document.createElement('i');
		i.classList.add('fa-solid');
		i.classList.add('fa-ban');

		// append i to i
		a2.appendChild(i);

		const a3 = document.createElement('a');
		a3.classList.add("second");
		
		const i2 = document.createElement('i');
		i2.classList.add('fa-solid');
		i2.classList.add('fa-trash');

		// append i to i
		a3.appendChild(i2);

		// append a to actions div
		actions.appendChild(a2);
		actions.appendChild(a3);

		list.appendChild(profile);
		list.appendChild(actions);

		// append li to ul
		invitedFriends.appendChild(list);
		// console.log(invitedFriends);
	}

	  
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

	// build an block list
	function buildBlockedList(nickname)
	{
	  const blockFriends = document.querySelector('.sidebar .friends .nav .drop-down.blocked');
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
	  i.classList.add('fa-sharp');
	  i.classList.add('fa-solid');
	  i.classList.add('fa-trash-arrow-up');

	  // append i to i
	  a2.appendChild(i);

	  // append a to actions div
	  actions.appendChild(a2);

	  list.appendChild(profile);
	  list.appendChild(actions);

	  // append li to ul
	  blockFriends.appendChild(list);
	  // console.log(invitedFriends);
  }

	// when click on cancel btn in invited friends
	const cancelBtnInvited =  document.querySelector('.sidebar .friends .nav .drop-down.invited');
	cancelBtnInvited.addEventListener('click', (e) =>{
	// Check if the clicked element is an 'li' with the 'select-box' class
	const li = e.target.closest('li.select-box .actions a');
	if (li) {
		console.log("Hello");
		li.parentElement.parentElement.remove();
		
	}
	})
  })(this);
