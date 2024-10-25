(function initializeSidebarComponent(component) {
	const sidebar = component.querySelector('.sidebar');
  
	// if (sidebar) {
	//   sidebar.addEventListener("mouseleave", () => {
	// 	sidebar.classList.toggle('hover');
	// 	sidebar.classList.toggle('leave');
	//   });
	// }
	console.log(sidebar);
	const active = document.querySelector('.active');
	const inactive = document.querySelector('.inactive');
	// const form1 = document.querySelector('.show');
	// const form2 = document.querySelector('.hidden');

	inactive.addEventListener('click', ()=> {
		inactive.classList.replace('inactive', 'active');
		active.classList.replace('active', 'inactive');
		// form1.classList.replace('show', 'hidden');
		// form2.classList.replace('hidden', 'show');
	})

	active.addEventListener('click', ()=> {
		inactive.classList.replace('active', 'inactive');
		active.classList.replace('inactive', 'active');
		// form1.classList.replace('hidden', 'show');
		// form2.classList.replace('show', 'hidden');
	})

	const select = document.querySelectorAll('.select-box');
	select.forEach(ele => {
		ele.addEventListener('click', () => {
			if (ele.classList.contains('close'))
			{
				ele.classList.replace('close', 'open');
				ele.children[0].children[2].setAttribute('src', '../assets/imgs/sidebar/down-arrow.svg');
				ele.nextSibling.nextSibling.style.display = 'block';
			}
			else
			{
				ele.classList.replace('open', 'close');
				ele.children[0].children[2].setAttribute('src', '../assets/imgs/sidebar/arrow.svg');
				ele.nextSibling.nextSibling.style.display = 'none';
			}
			console.log(ele);
		})
	})

  })(this);
