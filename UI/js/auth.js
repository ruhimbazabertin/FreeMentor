const loginButton = document.querySelector('#loginButton');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

loginButton .addEventListener('click', LoginIntoTheSystem);

function LoginIntoTheSystem(){
    console.log(username.value);
    if ( username.value == "admin" && password.value == "bertin123"){
        window.location.href = "FreeMentorpages/admin_dashboard.html";
        }
        if ( username.value == "mentor" && password.value =="bertin123"){
        window.location = "..pages/mentor.html";
        }else{
            window.location = "..pages/mentors.html";
        }
    } 

