
var x=document.createElement('script');
x.src="js/test.js";
document.getElementsByTagName("head")[0].appendChild(x);

function Array_loop_course(div_content,response,count)
{
  for(i=0;i<count;i++)
  {
    var var1="<div class ='column'><div class='card'><div class='card-heading'></div><div class='card-img'><img src='Images/test2.jpg' alt='Avatar' class='avatar'></div><div class='info'>"
    var var2="<h3>"+response[i.toString()].name+"</h3>"
    var var3="<p class='title'>"+response[i.toString()].Profession+"</p>"
    var var6="<p hidden id='profile_load_user_"+i.toString()+"'>"+response[i.toString()].user_id+"</p>"
    var var5="<a  id='profile_load_"+i.toString()+"' target='_blank' class='btn btn-info'>Connect</a></div></div></div>"
    // var var5="<button  onclick=profile_load('"+response[i.toString()].user_id+"') class='btn btn-info'>Connect</button></div></div></div>"


    div_content=div_content+var1+var2+var3+var6+var5;

  }
  return div_content
}

function profile_load(user_id)
{
  console.log(user_id);
  sessionStorage.setItem("profile_view_storage",user_id)
  window.open("profile_view.html","_blank")
}
async function profile_call()
{


  data=Profile_Suggestion();
  var response;
  await data.then(value=>
  {
      response=value.data
  });
  var count = Object.keys(response).length;



  var div_content=""
  div_content=Array_loop_course(div_content,response,count)
  document.getElementById("multiple_profile").innerHTML=div_content



var link=[1,2,3,4,5,6,7,8,9,0]
var profile_load_user=[1,2,3,4,5,6,7,8,9,0]

// for(i=0;i<9;i++)
// {
//     link[i]= document.getElementById('profile_load_'+i.toString())
//     console.log(link[i]);
//
//       link[i].addEventListener('click', function() {
//         profile_load_user[i]=document.getElementById('profile_load_user_'+i.toString()).innerHTML;
//         console.log(profile_load_user[i]);
//           profile_load(profile_load_user[i]);
//       });
//
//     }

    link_0= document.getElementById('profile_load_0')

      link_0.addEventListener('click', function() {
        profile_load_user_0=document.getElementById('profile_load_user_0').innerHTML;
          profile_load(profile_load_user_0);

        });
    link_1= document.getElementById('profile_load_1')

      link_1.addEventListener('click', function() {
        profile_load_user_1=document.getElementById('profile_load_user_1').innerHTML;
          profile_load(profile_load_user_1);

        });
    link_2= document.getElementById('profile_load_2')

      link_2.addEventListener('click', function() {
        profile_load_user_2=document.getElementById('profile_load_user_2').innerHTML;
          profile_load(profile_load_user_2);

        });
    link_3= document.getElementById('profile_load_3')

      link_3.addEventListener('click', function() {
        profile_load_user_3=document.getElementById('profile_load_user_3').innerHTML;
          profile_load(profile_load_user_3);

        });

    link_4= document.getElementById('profile_load_4')

      link_4.addEventListener('click', function() {
        profile_load_user_4=document.getElementById('profile_load_user_4').innerHTML;
          profile_load(profile_load_user_4);

        });
    link_5= document.getElementById('profile_load_5')

      link_5.addEventListener('click', function() {
        profile_load_user_5=document.getElementById('profile_load_user_5').innerHTML;
          profile_load(profile_load_user_5);

        });


  link_6= document.getElementById('profile_load_6')

    link_6.addEventListener('click', function() {
      profile_load_user_6=document.getElementById('profile_load_user_6').innerHTML;
        profile_load(profile_load_user_6);

      });
  link_7= document.getElementById('profile_load_7')

    link_7.addEventListener('click', function() {
      profile_load_user_7=document.getElementById('profile_load_user_7').innerHTML;
        profile_load(profile_load_user_7);

      });


  link_8= document.getElementById('profile_load_8')

  link_8.addEventListener('click', function() {
    profile_load_user_8=document.getElementById('profile_load_user_8').innerHTML;
      profile_load(profile_load_user_8);

    });

  link_9= document.getElementById('profile_load_9')

  link_9.addEventListener('click', function() {
    profile_load_user_9=document.getElementById('profile_load_user_9').innerHTML;
      profile_load(profile_load_user_9);

    });






}

window.onload=profile_call
