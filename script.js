

function hack (){
  let userName = document.getElementById("getName").value;
 let userPassword = document.getElementById("getPassword").value;
  console.log(userName);
  console.log(userPassword);
  document.cookie = "name ="+ userName;
  document.cookie = "password ="+ userPassword;
  console.log(document.cookie);
}