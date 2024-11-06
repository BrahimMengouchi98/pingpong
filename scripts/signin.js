const active = document.querySelector('.active');
const inactive = document.querySelector('.inactive');
const form1 = document.querySelector('.show');
const form2 = document.querySelector('.hidden');

inactive.addEventListener('click', ()=> {
	inactive.classList.replace('inactive', 'active');
	active.classList.replace('active', 'inactive');
	form1.classList.replace('show', 'hidden');
	form2.classList.replace('hidden', 'show');
})

active.addEventListener('click', ()=> {
	inactive.classList.replace('active', 'inactive');
	active.classList.replace('inactive', 'active');
	form1.classList.replace('hidden', 'show');
	form2.classList.replace('show', 'hidden');
})

const btnContinue = document.getElementsByClassName('btn-continue')[0];
const email = document.getElementById('email');
const pwd = document.getElementById('pwd');

btnContinue.addEventListener('click', ()=>{
	if (email.value == 'brahim' && pwd.value == '123')
	{
		// window.location.host += "/home";
		console.log(window.location.host);
		const container = document.querySelector('.container');
		// Remove any existing component
		const existingComponent = container.querySelector('sign-component');
		if (existingComponent) {
		existingComponent.remove();
		}

		// Create a new game component and add it to the container
		const navComponent = document.createElement('nav-component');
		container.appendChild(navComponent);
	}
})

// const passwords = document.querySelectorAll
const eye_icon = document.querySelectorAll('input + i'); 
eye_icon.forEach(li => {
	li.addEventListener('click', (e)=> {
		const input = e.target.closest('.show-pwd').children[0];
		if (li.className == "fa-solid fa-eye")
		{
			li.className = "fa-solid fa-eye-slash";
			input.type = "password";
		}
		else 
		{
			li.className = "fa-solid fa-eye";
			input.type = "text";
		}
	})
})
