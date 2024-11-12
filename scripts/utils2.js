// build member list
window.buildMemberList = function(nickname)
{
  const invitedFriends = document.querySelector('.add-friend-container .option.add-member ul.drop-down');
  const list = document.createElement('li');
  
  list.classList.add('select-box');
  
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
  i.classList.add('fa-plus');

  // append i to i
  a2.appendChild(i);

  // append a to actions div
  actions.appendChild(a2);

  list.appendChild(profile);
  list.appendChild(actions);

  // append li to ul
  invitedFriends.appendChild(list);
  // console.log(invitedFriends);
};

window.addListMember = function(nickname) {
  const invitedFriends = document.querySelector('.sidebar-right2 .friends .nav ul.drop-down');
  
  // create the owner of the member list only for the first time
  if(invitedFriends.children.length == 0)
  {
		console.log("yes");
		const li = document.createElement('li');
  
		li.classList.add('select-box');
		li.classList.add("owner")
		
		const profile = document.createElement('div');
		profile.classList.add('profile');

		const a = document.createElement('a');

		const img = document.createElement('img');
		img.src = "../assets/imgs/sidebar/profile.jpg";

		const span = document.createElement('span');
		span.classList.add('nickname');

		const i0 = document.createElement('i');
		i0.className = "fa-solid fa-user";
  }
 
  const list = document.createElement('li');
  
  list.classList.add('select-box');
  list.classList.add("ch-friends")
  
  const profile = document.createElement('div');
  profile.classList.add('profile');

  const a = document.createElement('a');

  const img = document.createElement('img');
  img.src = "../assets/imgs/sidebar/profile.jpg";

  const span = document.createElement('span');
  span.classList.add('nickname');

  const i0 = document.createElement('i');
  i0.className = "fa-solid fa-user";

  const span2 = document.createElement('span');
//   span2.classList.add('nickname');
  span2.textContent = nickname;

  span.appendChild(i0);
  span.appendChild(span2);

  // append img and span to a
  a.appendChild(img);
  a.appendChild(span);
  
  // append a to profile
  profile.appendChild(a);

  const actions = document.createElement('div');
  actions.classList.add('actions');
  
  const a2 = document.createElement('a');
  a2.className = "first";

  const i = document.createElement('i');
  i.className = "fa-solid fa-user-gear";

  // append i to i
  a2.appendChild(i);


  const a3 = document.createElement('a');
  a3.className = "second";

  const i2 = document.createElement('i');
  i2.className = "fa-solid fa-table-tennis-paddle-ball";

  // append i to i
  a3.appendChild(i2);

  // append a to actions div
  actions.appendChild(a2);
  actions.appendChild(a3);

  list.appendChild(profile);
  list.appendChild(actions);

  // append li to ul
  invitedFriends.appendChild(list);
}