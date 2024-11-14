(function initializeSidebarComponent(component) {
	console.log("hello");
	const container = document.querySelector('.container');

	// when click on add memeber button
	const addMemberBtn = document.querySelector('.sidebar-right2 .friends .nav .add-friend');
	addMemberBtn.addEventListener('click', ()=> {
		window.loadComponent(container, "add-friend", 1);
	})


	const div = document.querySelector('.sidebar-right2-container .member-setting');

	// when click on member setting for each member
	const memberAction = document.querySelector('.sidebar-right2 .friends .nav ul.drop-down');
	memberAction.addEventListener('click', (e)=>{
		const li = e.target.closest(".sidebar-right2 .friends .nav ul.drop-down .actions a.first i");
		if (li)
		{
			console.log(li);
			console.log(li.getBoundingClientRect().top);
			console.log(li.getBoundingClientRect().left);
			// console.log(test);
			div.style.display = 'block';
			div.style.position = 'absolute';
			div.style.top = `${li.getBoundingClientRect().top}px`;
			const widthOfMemberSetting = div.getBoundingClientRect().width - (li.getBoundingClientRect().width);
			div.style.left = `${li.getBoundingClientRect().left - widthOfMemberSetting}px`;
			//const nickname = li.parentElement.previousElementSibling.children[0].children[1].textContent;
			
			
			// console.log(li.parentElement.previousElementSibling.children[0]);
			// li.parentElement.previousElementSibling.children[0].classList.add('active');
		}
	})

	// Close the `div` when clicking outside of it
	document.addEventListener('click', (e) => {
		// Check if the click target is not the `div` and not the `settingBtnFriend`
		if (!div.contains(e.target) && !memberAction.contains(e.target)) {
			div.style.display = 'none';
		}
	});

	// member operations

	// kick member from the channel
	const kick_member = document.querySelector('.member-setting a.kick');
	kick_member.addEventListener('click', ()=>{
		div.style.display = 'none';
		console.log("kick user");
		//window.loadComponent(container, "add-channel", 1);
		// const list = document.querySelector("li.select-box .profile a.active");
		// console.log(list.children[1]);
		// list.children[1].innerHTML = "hello";
	})

})(this);