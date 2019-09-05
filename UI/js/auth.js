const loginButton = document.querySelector('#loginButton');
const username = document.querySelector('#username');
const password = document.querySelector('#pass');

const basePath = window.location.href.split('UI')[0];
const url="UI/pages/admin_dashboard.html";
loginButton.addEventListener('click', LoginIntoTheSystem);

function LoginIntoTheSystem(){
    if ( username.value === "admin" && password.value === "bertin123"){
        
        window.location.replace = basePath + "UI/pages/admin_dashboard.html";
        }
         else{
             window.location.href = basePath + "UI/pages/mentors.html";
         }
    } 

