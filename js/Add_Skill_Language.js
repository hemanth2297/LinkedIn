var x=document.createElement('script');
x.src="js/test.js";
document.getElementsByTagName("head")[0].appendChild(x);

async function Add_Post(typew)
{
    user_id=document.getElementById("user_id").innerHTML
    data=get(user_id);
    var response;
    await data.then(value=>
    {
        response=value.data
    });
    closeForm(typew)

    if(typew=="Skills" || typew=="Languages" || typew=="Courses" )
    {
      response[typew].push({"skill" :document.getElementById("New_"+typew).value ,
      "percentage" : document.getElementById("New_"+typew+"_Pro").value+"%"})
    }
    else
    {

      response[typew].push({"place" :document.getElementById("New_"+typew+"_Place").value ,
      "description" : document.getElementById("New_"+typew+"_Descritpion").value,
      "dur" : document.getElementById("New_"+typew+"_From").value+"-"+document.getElementById("New_"+typew+"_To").value})
      console.log(response[typew]);
    }

    console.log(response);
    post(response)

      //location.reload();

}


async function Add_Course(typew)
{
    user_id=document.getElementById("user_id").innerHTML
    data=get(user_id);
    var response;
    await data.then(value=>
    {
        response=value.data
    });
    closeForm(typew)

    if(typew=="Skills" || typew=="Languages" || typew=="Courses" )
    {

      var new_course=document.getElementById("New_"+typew).value
      var link=get_course_link(new_course)
      var link_data
      await link.then(value=>
      {
          link_data=value.data

      });
      var new_course_link=link_data
      response[typew].push({"skill" :new_course,"percentage" : new_course_link})
    }

    console.log(response);
    post(response)

      //location.reload();

}

function openForm(typew)
{
  document.getElementById(typew+"_Form").style.display = "block";
}

function closeForm(typew)
{
  document.getElementById(typew+"_Form").style.display = "none";
}
