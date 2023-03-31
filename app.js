const submit_button = document.querySelector(".button");
submit_button.onclick = () => {
    e.preventDefault()
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    const address = document.getElementById("address").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;

    localStorage.setItem('Firstname', fname);
    localStorage.setItem('Lastname', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('ConfirmPassword', cpass);
    localStorage.setItem('Address', address);
    localStorage.setItem('Age', age);
    localStorage.setItem('Phone', phone);

    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == "" && address == "" && age == "" && phone == ""){
        swal("Oop...!", "Input fill must be filled", "error");
    }
    else
    {
        if(pass !== cpass){
            swal("Oops...!", "Password not matching", "error");
        }else{
            swal("Good job!", "registration successful", "success");
        }
    }
}

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();

    const emailAddress = document.getElementById("Email").value;
    const passWord = document.getElementById("password").value;
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if(emailAddress == "" && passWord == ""){
        swal("Oops...!", "Input field has no value", "error");
    }else{
        if(emailAddress == Email && passWord == Password){
            swal("Good job!", "Login successful", "success");
        }else{
            swal("Oops...!", "Something is wrong", "error");

        } 
    }
}