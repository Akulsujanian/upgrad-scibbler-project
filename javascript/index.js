var signinbox = document.getElementById("Sign-in");
var signupbox = document.getElementById("Sign-up");
var opaq = document.getElementById("opaq");
var post = document.getElementById("post-box");
var fname = document.getElementById("fullname");
var  username = document.getElementById("username");
var password = document.getElementById("password");
var conpassword = document.getElementById("cpassword");

console.log("js");
function signin(){
    console.log("si");
    signupbox.style.display="none";
    post.style.display="none";
    signinbox.style.display="block";
    opaq.style.display="block";
}

 function closesigninbox() {
     signinbox.style.display="none";
     opaq.style.display="none";
 }
 function signup(){
  
    signinbox.style.display="none";
    post.style.display="none";
    signupbox.style.display="block";
    opaq.style.display="block";
 }
 function closesignupbox() {
    signupbox.style.display="none";
    opaq.style.display="none";
}
function createpost(){
    post.style.display="block";
    opaq.style.display="block";
    signupbox.style.display="none";
    signinbox.style.display="none";
}
function closepostbox(){
    post.style.display="none";
    opaq.style.display="none";
}
function check(event){
    event.preventDefault();
    if(fname.value.length==0||username.value.length==0||password.value.length==0||conpassword.value.length==0){
    alert("any field should not be empty");}
    else if(fname.value.length<3)
    {
        alert("fullname should be of min. 3 characters");
    }
    else if(/^[a-zA-Z ]+$/.test(fname.value)==false)
    {
        alert("use of only  alphabets in fullname");
    }
    else if(username.value.length<6)
    {
        alert("username should be of min. 6 characters");
    }
    else if(password.value.length<8)
    {
        alert("password should be of min. 8 characters");
    }
    else if(/^[a-zA-Z0-9@._-]+$/.test(username.value)==false)
    {
        alert("username should contain alphabets and numbers + (@._-) characters it shoud not have any space in between them");
    }
    else if(!password.value.match(/[A-Z]/g))
    {
      
        alert("password should contain atleast one  Uppercase letter");
    }
    else if(!password.value.match(/[a-z]/g))
    {
        alert("password should contain  atleast one lowercase letter");
    }
    else if(!password.value.match(/[0-9]/g))
    {
        alert("password should contain atleast one number");
    }
    else if(!password.value.match(/[!@#$%&*]/g))
    {
        alert("password should contain  atleast one character(!@#$%&*)");
    }
    else if(/^[a-zA-Z0-9!@#$%&*]+$/.test(password.value)==false)
    {
        alert("password should contain alphabets + numbers + (@!#$%&*) characters it shoud not have any space in between them ");
    }
    else if(conpassword.value!=password.value)
    {
        alert("password doesn't match  ");
    }
    else
    alert("User Registered");
   
   
    }
  