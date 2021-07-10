let userEl = document.querySelector(".txtuser");
let passEl = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");
let showPassEl = document.querySelector("#showPass");
function checkPass() {
    if(showPassEl.checked == true){
        passEl.setAttribute( 'type', 'text' );
        console.log(passEl.value);
    }else{
        passEl.setAttribute( 'type', 'password' );
    }
}

let stadiumApi = '/json/db.json';

function start() {
    getStadium(checkLogin);
}

start();

function getStadium(callback) {
    fetch(stadiumApi).then(function(response) {
        return response.json();
    }).then(data => callback(data.customer))
}

function checkLogin(customers){
    let html = customers.map(function(customer) {
    if(window.localStorage){
        localStorage.setItem("user",`${customer.NameLogin}`);
        localStorage.setItem("pass",`${customer.password}`);

        let user = localStorage.getItem("user");
        let pass = localStorage.getItem("pass");

        console.log(user);
        console.log(pass);
        let message = document.querySelector(".message");

        submit.addEventListener("click", function(){
            if(user == userEl.value && pass == passEl.value){
                window.location = "home.html";
            }else{
                message.innerHTML = `Đăng nhập không thành công`;
            }
        })
    }return "";
});
}