(function initializeSidebarComponent(component) {
	console.log("hello");
	const container = document.querySelector('.container');

	// when click on add memeber button
	const addFriendBtn = document.querySelector('.sidebar-right2 .friends .nav .add-friend');
	addFriendBtn.addEventListener('click', ()=> {
		window.loadComponent(container, "add-friend", 1);
	})


})(this);