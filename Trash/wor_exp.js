var x=document.createElement('script');
x.src="test.js";
document.getElementsByTagName("head")[0].appendChild(x);

function Array_loop(div_content,array)
{
  for(i=0;i<array.length;i++)
  {
    var var1="<p>"+array[i].skill+"</p>";
    var var2="<div class=w3-light-grey w3-round-xlarge w3-small>";
    var var3="<div class='w3-container w3-center w3-round-xlarge w3-teal' style=width:"+array[i].percentage+">"+array[i].percentage+"</div></div>";
    div_content=div_content+var1+var2+var3+"<br>";
  }
  return div_content
}



function Display_Skills()
{
  var Skills=new Array({"skill":"test1","percentage":"90%"},{"skill":"test1","percentage":"75%"},{"skill":"test1","percentage":"65%"})

  var div_content="<p class=w3-large><b><i class='fa fa-asterisk fa-fw w3-margin-right w3-text-teal'></i>Skills</b></p>";

  div_content=Array_loop(div_content,Skills)
  document.getElementById("Skills").innerHTML=div_content

}

function Display_Lang()
{

  data=get()

  data.then(value=>
  {
      response=value[0].data
      console.log(response)

      var Skills=response.Skills
      var div_content="<p class=w3-large><b><i class='fa fa-asterisk fa-fw w3-margin-right w3-text-teal'></i>Skills</b></p>";
      div_content=Array_loop(div_content,Skills)
      document.getElementById("Skills").innerHTML=div_content

      var Languages=response.Languages
      var div_content="<p class=w3-large><b><i class='fa fa-asterisk fa-fw w3-margin-right w3-text-teal'></i>Languages</b></p>";
      div_content=Array_loop(div_content,Languages)
      document.getElementById("Languages").innerHTML=div_content





  });
}

function on_call()
{

  Display_Lang();
}
