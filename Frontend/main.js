// login and signup 
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const login = document.querySelector('.login');
const signIn = document.querySelector('.sign-up');
const container = document.getElementById('container');
const containercls = document.querySelector('.container');
const cont = document.querySelector('.cont');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// login and signup ends here
login.addEventListener("click" , () =>{
	container.classList.toggle("hidden")
	if(container.classList != 'hidden'){
   cont.classList.add("hidden")
}else{
		cont.classList.remove("hidden")

	}
})


