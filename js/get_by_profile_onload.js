var x=document.createElement('script');
x.src="js/test.js";
document.getElementsByTagName("head")[0].appendChild(x);
var x=document.createElement('script');
x.src="js/edit.js";
document.getElementsByTagName("head")[0].appendChild(x);



function Array_loop_left(div_content,array,typew)
{
  for(i=0;i<array.length;i++)
  {
    var var1="<p contentEditable='false' id="+typew+"_"+i+">"+array[i].skill+"</p>";
    var var2="<div class=w3-light-grey w3-round-xlarge w3-small>";
    var var3="<div class='w3-container w3-center w3-round-xlarge w3-blue' style=width:"+array[i].percentage+"><span contentEditable='false' id="+typew+"_percentage_"+i+">"+array[i].percentage+"</span></div></div>";
    div_content=div_content+var1+var2+var3+"<br>";
  }
  return div_content
}

function Array_loop_right(div_content,array,typew)
{
  for(i=0;i<array.length;i++)
  {
    var var1="<div class= w3-container >";
    var var2="<h5 class=w3-opacity><b><span contentEditable='false' id="+typew+"_place_"+i+">"+array[i].place+"</span></b></h5>";
    var var3="<h6 class=w3-text-blue><i class='fa fa-calendar fa-fw w3-margin-right'></i><span contentEditable='false' id="+typew+"_duration_"+i+">"+array[i].dur+"</span></h6>";
    var var4="<p contentEditable='false' id="+typew+"_description_"+i+">"+array[i].description+"</p><hr></div>";
    div_content=div_content+var1+var2+var3+var4;
  }
  return div_content
}


function Array_loop_course(div_content,array,typew)
{
  for(i=0;i<array.length;i++)
  {
    var var1="<p contentEditable='false' id="+typew+"_"+i+">"+"<a href="+array[i].link+" target='_blank' style='text-decoration:none'>"+array[i].skill+"</a></p>";
    div_content=div_content+var1;
  }
  return div_content
}

async function on_call()
{


  user_id=document.getElementById("user_id").innerHTML
  data=get(user_id);
  var response;
  await data.then(value=>
  {
      response=value.data
  });


  var Projects=response.Projects
  var div_content="<h2 class='w3-text-grey w3-padding-16'><i class='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue'></i>Projects</h2>";
  div_content=Array_loop_right(div_content,Projects,"Projects")
  document.getElementById("Project").innerHTML=div_content

  var Education=response.Education
  var div_content="<h2 class='w3-text-grey w3-padding-16'><i class='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue'></i>Education</h2>";
  div_content=Array_loop_right(div_content,Education,"Education")
  document.getElementById("Education").innerHTML=div_content


  var Work=response.Work
  var div_content="<h2 class='w3-text-grey w3-padding-16'><i class='fa fa-suitcase  fa-fw w3-margin-right w3-xxlarge w3-text-blue'></i>Work Experience</h2>";
  div_content=Array_loop_right(div_content,Work,"Work")
  document.getElementById("Work").innerHTML=div_content

  var Skills=response.Skills
  var div_content="<p class=w3-large><b><i class='fa fa-asterisk fa-fw w3-margin-right w3-text-blue'></i>Skills</b></p>";
  div_content=Array_loop_left(div_content,Skills,"Skills")
  document.getElementById("Skills").innerHTML=div_content

  var Languages=response.Languages
  var div_content="<p class=w3-large><b><i class='fa fa-asterisk fa-fw w3-margin-right w3-text-blue'></i>Languages</b></p>";
  div_content=Array_loop_left(div_content,Languages,"Languages")
  document.getElementById("Languages").innerHTML=div_content


  var Courses=response.Courses
  var div_content="<p class=w3-large><b><i class='fa fa-asterisk fa-fw w3-margin-right w3-text-blue'></i>Courses</b></p>";
  div_content=Array_loop_course(div_content,Courses,"Courses")
  document.getElementById("Courses").innerHTML=div_content


  var Name=response.name
  document.getElementById("user_name").innerHTML=Name

  var Profession=response.Profession
  document.getElementById("Profession").innerHTML=Profession

  var Place=response.Place
  document.getElementById("Place").innerHTML=Place

  var Email_id=response.Email_id
  document.getElementById("Email_id").innerHTML=Email_id

  var Phone_Number=response.Phone_Number
  document.getElementById("Phone_Number").innerHTML=Phone_Number

  var Work_expi=response.Work_Experience
  document.getElementById("Work_expi").innerHTML="Work Experience : "+Work_expi.toString()+" Years"

  console.log(document.getElementById("user_id").innerHTML);


}



function start()
{
  //var name_by_user=parent.window.opener.document.getElementById("type_user_name").value;
  console.log(sessionStorage.getItem("profile_view_storage"));
  document.getElementById('user_id').innerHTML=sessionStorage.getItem("profile_view_storage")
  on_call();
}
window.onload=start
