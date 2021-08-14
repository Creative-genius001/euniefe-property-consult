// document.getElementById("btn").addEventListener('click' , myFunction);
// var firstPassword = document.getElementById('password').value;
// var verifyPassword = document.getElementById('password2').value;
// const textInput = document.querySelector('#username').value;

// function AutoRefresh( t ) {
// setTimeout("location.reload(true);", t);
// }
// 	function myFunction()
// {
// 	confirm("Do you want to submit this information?");
// 	if(textInput === ""){
// 		document.getElementById("demo").textContent = "Input  A Value";
// 	}
// 	else if(firstPassword.length === ""){
// 		document.getElementById("demo2").textContent= "Verify Password";
// 	}
// 	else if(verifyPassword.length === null){
// 		document.getElementById("demo2").textContent= "Verify Password";
// 	}
// 	else if(firstPassword.length < 8){
// 	alert("password must have a maximum of 8 characrters");
// 	}
// 	else if (firstPassword != verifyPassword){
// 		document.getElementById("demo").textContent= "Password don't match!!";
// 	}
// 	else if(firstPassword.value === verifyPassword.value & textInput.length > 0){
// 	document.getElementById("demo").textContent= "The text you entered is " + textInput;
// 	document.getElementById("demo2").textContent= "The password you entered is " + firstPassword;
// 	}
// 	else { alert("Omo this one na your village people oo");}
// 	AutoRefresh(2000);

// }

// var myArray = ["the", "width is", 10]
// console.log(myArray[1]);
// myArray.join();
// console.log(myArray.join(", "));

const animationBar = document.querySelector('#animate');
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    animate.classList.toggle("start");
    
});

