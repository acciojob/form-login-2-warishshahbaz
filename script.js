//your JS code here. If required.
let btn = document.getElementById("MyForm");
function handleSubmit(){
	
alert("fdsfs")
	let first = document.getElementById("firstname").value
	let last = document.getElementById("lastname").value
	let phone = document.getElementById("phone").value
	let email = document.getElementById("email").value
	alert(`
	First Name : ${first}
	Last Name : ${last}
	Phone Number : ${phone}
	Email ID : ${email}
	`)
}
// btn.addEventListner("click",(e)=>{
// 	e.preventDefault();
// 	let first = document.getElementById("firstname").value
// 	let last = document.getElementById("lastname").value
// 	let phone = document.getElementById("phone").value
// 	let email = document.getElementById("email").value
// 	alert(`
// 	First Name : ${first}
// 	Last Name : ${last}
// 	Phone Number : ${phone}
// 	Email ID : ${email}
// 	`)
// })
})