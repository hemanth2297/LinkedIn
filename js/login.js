var x=document.createElement('script');
x.src="js/test.js";
document.getElementsByTagName("head")[0].appendChild(x);


function login()
{
  user_id_typed=document.getElementById("type_user_name").value
  console.log(user_id_typed);
  sessionStorage.setItem("user_id_storage", user_id_typed);
    window.open('user_fill.html',"_self");
}


function SignUp_User()
{
  user_id=document.getElementById("type_new_user_name").value
  first_name=document.getElementById("type_first_name").value
  last_name=document.getElementById("type_last_name").value
  var check=new_user(user_id,first_name,last_name)
  sessionStorage.setItem("user_id_storage", user_id);
  window.open('user_fill.html',"_blank");
}
