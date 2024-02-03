//your JS code here. If required.
function handleSubmit() {
  let first = document.getElementById("firstname").value;
  let last = document.getElementById("lastname").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  alert(`
	First Name : ${first}
	Last Name : ${last}
	Phone Number : ${phone}
	Email ID : ${email}
	`);
}


