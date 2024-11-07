// (function initializeSidebarComponent(component) {
// 	const sidebar = component.querySelector('.sidebar-right');
// 	// if (sidebar) {
// 	//   sidebar.addEventListener("mouseleave", () => {
// 	// 	sidebar.classList.toggle('hover');
// 	// 	sidebar.classList.toggle('leave');
// 	//   });
// 	// }
// 	console.log(component.parent.locat);
// 	const active = document.querySelector('.active');
// 	const inactive = document.querySelector('.inactive');
// 	const friends = document.querySelector('.show');
// 	const channels = document.querySelector('.hidden');

// 	inactive.addEventListener('click', ()=> {
// 		inactive.classList.replace('inactive', 'active');
// 		active.classList.replace('active', 'inactive');
// 		friends.classList.replace('show', 'hidden');
// 		channels.classList.replace('hidden', 'show');
// 	})

// 	active.addEventListener('click', ()=> {
// 		inactive.classList.replace('active', 'inactive');
// 		active.classList.replace('inactive', 'active');
// 		friends.classList.replace('hidden', 'show');
// 		channels.classList.replace('show', 'hidden');
// 	})

// 	// add friend
// 	const addFriendBtn = document.querySelector('.add-friend');
// 	addFriendBtn.addEventListener('click', ()=> {
// 		confirm('hello:');
// 	})

// 	const select = document.querySelectorAll('.select-box');
// 	select.forEach(ele => {
// 		ele.addEventListener('click', () => {
// 			if (ele.classList.contains('close'))
// 			{
// 				ele.classList.replace('close', 'open');
// 				ele.children[0].children[2].setAttribute('class', 'i-right fa-solid fa-angle-up');
// 				ele.nextElementSibling.style.display = 'block';
// 			}
// 			else
// 			{
// 				ele.classList.replace('open', 'close');
// 				ele.children[0].children[2].setAttribute('class', 'i-right fa-solid fa-angle-down');
// 				ele.nextElementSibling.style.display = 'none';
// 			}
// 			// console.log(ele);
// 		})
// 	})

//   })(this);

// part 2
// const friends = document.querySelectorAll('.sidebar-right .friends .nav .drop-down .select-box .profile');

// friends.forEach(ele => {
// 	ele.addEventListener('click', () => {
// 		// const nickname = document.querySelector('.sidebar-right .friends .profile a span.nickname');
// 		const nickname = ele.children[0].children[1];
// 		loadComponent2('chat', nickname.textContent);
// 	})
// })

// part 3

(function initializeSidebarComponent(component) {
	// const sidebar = component.querySelector('.sidebar-right');
	const friends = component.querySelector('.sidebar-right .friends .nav .drop-down');
	// console.log("br", friends);
	
	friends.addEventListener('click', (e) => {
		const hh = e.target.closest(".select-box .profile a span");
		if (hh)
		{
		  //window.loadComponent2(container, 'chat', hh.textContent);
		}
		if (e.target.tagName == "IMG" || e.target.tagName == "SPAN")
		{
			// console.log(container);
			window.loadComponent3(container, 'chat-component', hh.textContent);
		}

	})

  })(this);