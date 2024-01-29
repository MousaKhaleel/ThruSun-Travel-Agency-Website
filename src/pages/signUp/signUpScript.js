function signUpValidation(){
    passwordValidate();
}

function passwordValidate(){
    var password=document.getElementById("password").value;
var passwordConfirm=document.getElementById("passwordConfirm").value;
    if(password.length<8)
        alert("Password must be at least 8 chracters");
    else if(password==passwordConfirm)
    window.open("/src/pages/loading/loading.html","_self");
    else
    alert("make sure the two passwords matches");
}