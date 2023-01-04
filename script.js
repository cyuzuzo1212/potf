const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};



			// get data
	const nameInput =document.querySelector("#name");
	const email =document.querySelector("#email");
	const message=document.querySelector('#message');
	const errorNodes= document.querySelectorAll('.error');
	//validate form
	function validateForm(){
		clearMessages();
		let errorFlag=false;
		if(nameInput.value.length<1){
			errorNodes[0].innerText="Name cannot be blank";
			nameInput.classList.add('error-border');
			errorFlag=true;
		}
		if(!eamilIsValid(email.value)){
			errorNodes[1].innerText="Invalid email address";
			email.classList.add('error-border');
			errorFlag=true;
		}
		if(message.value.length<1){
			errorNodes[2].innerText="Please enter message";
			message.classList.add('error-border');
			errorFlag=true;
	
		}
		if(!errorFlag){
			success.innerText="Done";
		}
	
	}
	// clear error /sucess messages
	function clearMessages(){
		for(let i=0;i<errorNodes.length;i++){
			errorNodes[i].innerText="";
		}
		success.innerText="";
		nameInput.classList.remove('error-border');
		email.classList.remove('error-border');
		message.classList.remove('error-border');
	}
	
	//check if email is valid
	function eamilIsValid(email){
		let pattern=/\S+@\S+\.\S+/;
		return pattern.test(email);
	
	}
	