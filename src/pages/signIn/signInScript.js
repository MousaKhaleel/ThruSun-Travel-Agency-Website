function signInValidate(){
passwordValidate();
}

function passwordValidate(){
    var password=document.getElementById("password").value;
    if(password.length<8){
        alert("Password must be at least 8 chracters");
    }
else
window.open("/src/pages/loading/loading.html","_self");
}
