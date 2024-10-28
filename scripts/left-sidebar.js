(function initializeSidebarComponent(component) {
	const sidebar = component.querySelector('.sidebar');
  
	// if (sidebar) {
	//   sidebar.addEventListener("mouseleave", () => {
	// 	sidebar.classList.toggle('hover');
	// 	sidebar.classList.toggle('leave');
	//   });
	// }
	// console.log(sidebar);
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

	// add friend
	const addFriendBtn = document.querySelector('.add-friend');
	addFriendBtn.addEventListener('click', ()=> {
		confirm('hello:');
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

  })(this);
