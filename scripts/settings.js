(function initializeChatComponent(component) {
	const container = document.querySelector('.container');
	const changeUsername = document.querySelector(".settings-container .body-msg .profile-container .user .username a.change");
	changeUsername.addEventListener('click', ()=>{
		console.log(changeUsername);
		window.loadComponent(container, "add-channel", 4);
	})
})(this);