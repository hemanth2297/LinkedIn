//
// var x=document.createElement('script');
// x.src="js/test.js";
// document.getElementsByTagName("head")[0].appendChild(x);

function Array_loop_course(div_content,response,count)
{
  for(i=0;i<count;i++)
  {

    var var1="<div class ='column'><div class='card'><div class='card-heading'></div><div class='card-img'><img src='Images/Hackathon/"+response[i.toString()].website+".jpg' alt='Avatar' class='avatar'></div><div class='info'>"
    var var2="<h3>"+response[i.toString()].name+"</h3>"
    var var3="<p class='title'>"+response[i.toString()].website+"</p>"
    var var4="<div style='margin: 24px 0;'><a href='#'><i class='fa fa-dribbble'></i></a><a href='#'><i class='fa fa-twitter'></i></a><a href='#'><i class='fa fa-linkedin'></i></a><a href='#'><i class='fa fa-facebook'></i></a></div>"
    var var5="<a href='"+response[i.toString()].Link+"' target='_blank' class='btn btn-info'>Register</a></div></div></div>"



    if(i==3 || i==6 || i==8 )
    {
      div_content=div_content+"<br>"
    }
    div_content=div_content+var1+var2+var3+var5;
  }
  return div_content
}

async function Hackathon_call()
{


  data=Hackathon_Suggestion();
  var response;
  await data.then(value=>
  {
      response=value.data
  });
  var count = Object.keys(response).length;


  var div_content=""
  div_content=Array_loop_course(div_content,response,count)
  document.getElementById("multiple_hackathon").innerHTML=div_content


}
window.onload=Hackathon_call
