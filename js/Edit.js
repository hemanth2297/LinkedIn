var x=document.createElement('script');
x.src="js/test.js";
document.getElementsByTagName("head")[0].appendChild(x);

async function edit()
{
  var content_edit=document.getElementById("Profession").contentEditable;

  if(content_edit=="false")
  {
    document.getElementById("Profession").contentEditable=true;
    document.getElementById("Place").contentEditable=true;
    document.getElementById("Email_id").contentEditable=true;
    document.getElementById("Phone_Number").contentEditable=true;
    document.getElementById("profession_edit").innerHTML="Save";
  }
  else
    {
      user_id=document.getElementById("user_id").innerHTML
      data=get(user_id);
      var response;
      await data.then(value=>
      {
          response=value.data
          response.Profession=document.getElementById("Profession").innerHTML
          response.Place=document.getElementById("Place").innerHTML
          response.Email_id=document.getElementById("Email_id").innerHTML
          response.Phone_Number=document.getElementById("Phone_Number").innerHTML

          document.getElementById("Profession").contentEditable=false;
          document.getElementById("Place").contentEditable=false;
          document.getElementById("Email_id").contentEditable=false;
          document.getElementById("Phone_Number").contentEditable=false;
          post(response)
      });


      document.getElementById("profession_edit").innerHTML="Edit";
    }
}


async function Edit_Left(typew)
{
  user_id=document.getElementById("user_id").innerHTML
  console.log(user_id);
  data=get(user_id);

  var response;
  await data.then(value=>
  {
      response=value.data

  });
  var content_edit=document.getElementById(typew+"_0").contentEditable;
  if(content_edit=="false")
  {
    for(i=0;i<response[typew].length;i++)
    {
      document.getElementById(typew+"_"+i).contentEditable=true;
      document.getElementById(typew+"_percentage_"+i).contentEditable=true;
      document.getElementById(typew+"_edit").innerHTML=typew+"_Save";
    }
  }
  else
  {
    for(i=0;i<response[typew].length;i++)
    {
      response[typew][i].skill=document.getElementById(typew+"_"+i).innerHTML
      response[typew][i].percentage=document.getElementById(typew+"_percentage_"+i).innerHTML
      document.getElementById(typew+"_"+i).contentEditable=false;
      document.getElementById(typew+"_percentage_"+i).contentEditable=false
    }
    post(response)

    document.getElementById(typew+"_edit").innerHTML=typew+"_Edit";
  }
}



async function Edit_Right(typew)
{
  data=get(user_id);
  var response;
  await data.then(value=>
  {
      response=value.data

  });
  var content_edit=document.getElementById(typew+"_description_0").contentEditable;
  if(content_edit=="false")
  {
    for(i=0;i<response[typew].length;i++)
    {
      document.getElementById(typew+"_description_"+i).contentEditable=true;
      document.getElementById(typew+"_place_"+i).contentEditable=true;
      document.getElementById(typew+"_duration_"+i).contentEditable=true;
      document.getElementById(typew+"_edit").innerHTML=typew+"_Save";
    }
  }
  else
  {
    for(i=0;i<response[typew].length;i++)
    {
      response[typew][i].place=document.getElementById(typew+"_place_"+i).innerHTML
      response[typew][i].dur=document.getElementById(typew+"_duration_"+i).innerHTML
      response[typew][i].description=document.getElementById(typew+"_description_"+i).innerHTML

      document.getElementById(typew+"_description_"+i).contentEditable=false;
      document.getElementById(typew+"_place_"+i).contentEditable=false;
      document.getElementById(typew+"_duration_"+i).contentEditable=false;
    }
    post(response)

    document.getElementById(typew+"_edit").innerHTML=typew+"_Edit";
  }
}



async function Edit_Course(typew)
{
  user_id=document.getElementById("user_id").innerHTML
  console.log(user_id);
  data=get(user_id);

  var response;
  await data.then(value=>
  {
      response=value.data

  });
  var content_edit=document.getElementById(typew+"_0").contentEditable;
  if(content_edit=="false")
  {
    for(i=0;i<response[typew].length;i++)
    {
      document.getElementById(typew+"_"+i).contentEditable=true;
      document.getElementById(typew+"_edit").innerHTML=typew+"_Save";
    }
  }
  else
  {
    for(i=0;i<response[typew].length;i++)
    {
      response[typew][i].skill=document.getElementById(typew+"_"+i).innerHTML

      var link=get_course_link(document.getElementById(typew+"_"+i).innerHTML)
      var link_data
      await link.then(value=>
      {
          link_data=value.data

      });
      response[typew][i].percentage=link_data

      document.getElementById(typew+"_"+i).contentEditable=false;
    }
    post(response)

    document.getElementById(typew+"_edit").innerHTML=typew+"_Edit";
  }
}

async function submit()
{


  user_id=document.getElementById("user_id").innerHTML
  console.log(user_id);
  data=get(user_id);

  var response;
  await data.then(value=>
  {
      response=value.data

  });

  post_submit(response,user_id)
  //location.reload();

}
