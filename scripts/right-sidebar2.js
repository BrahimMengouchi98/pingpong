(function initializeSidebarComponent(component) {
	console.log("hello");
	const container = document.querySelector('.container');

	// when click on add memeber button
	const addMemberBtn = document.querySelector('.sidebar-right2 .friends .nav .add-friend');
	addMemberBtn.addEventListener('click', ()=> {
		window.loadComponent(container, "add-friend", 1);
	})


})(this);