(function initializeChatComponent(component) {
	const input = component.document.querySelector('.chat-container .input-msg2 > input');
	const body = component.document.querySelector('.chat-container .body-msg');
	// const msgContainer = component.document.querySelector('.chat-container .body-msg .messages');
	const msgContainer = body.children[0];
	console.log(msgContainer);
	input.addEventListener('keypress', (e) => {
		if (e.key == 'Enter')
		{
			// body.appendChild(msgContainer);
			// console.log(msgContainer);

			const msg = document.createElement('li');
			msg.classList.add('message');
			
			msgContainer.appendChild(msg);

			body.appendChild(msgContainer);

			const name = document.createElement('h4');
			name.classList.add('name');
			name.innerHTML = 'You';

			msg.appendChild(name);

			const content1 = document.createElement('div');
			content1.classList.add('content1');
			
			msg.appendChild(content1);

			const img = document.createElement('div');
			img.classList.add('image');

			const image = document.createElement('img');
			image.src = "../assets/imgs/sidebar/profile.jpg";

			img.appendChild(image);

			content1.appendChild(img);

			const content2 = document.createElement('div');
			content2.classList.add('content2');
			
			const messageContent = document.createElement('span');
			messageContent.classList.add('msg');
			messageContent.innerHTML = input.value;

			content2.appendChild(messageContent);
			
			const br = document.createElement('br');
			content2.appendChild(br);

			const messageDate = document.createElement('span');
			messageDate.classList.add('date');
			
			const date = new Date();

			// Check whether AM or PM
			let hours = date.getHours();
			let minues = date.getMinutes();
			let am_pm = hours >= 12 ? 'PM' : 'AM';
			messageDate.innerHTML = hours + ":" + minues + " " + am_pm;

			content2.appendChild(messageDate);
			
			content1.appendChild(content2);

			input.value = "";
		}
	})
})(this);