let userName =document.getElementById("userName");
let password =document.getElementById("password");
let error1 =document.getElementById("message1");
let error2 =document.getElementById("message2")

function checkUsername(callback) {
    var userid="admin";
    if(userName.value.match(userid)){
        userName.style.border="1px solid green";
        return callback;
    }else{
        error1.innerHTML="Invalid username!!"
        error1.style.color="red";
        userName.style.border="1px solid red"
        return false;
    }
}
function checkPassword() {
    var pwd=12345;
    if(password.value.match(pwd)){
        password.style.border="1px solid green";
        return true;
    }else{
        error2.innerHTML="Invalid password!!";
        error2.style.color="red";
        password.style.border="1px solid red";
        return false
    }

}