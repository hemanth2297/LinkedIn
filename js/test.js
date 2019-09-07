var x=document.createElement('script');
x.src="js/axios.min.js";
document.getElementsByTagName("head")[0].appendChild(x);


async function get(user_id)
{
  const Url="http://127.0.0.1:5001/Profiles?user="+user_id;

  return await axios.get(Url)
  .then(function(data)
  {
      return data
  });
  //return res


}


async function get_course_link(course_name)
{
  const Url="http://127.0.0.1:5001/Courses/?course_name="+course_name;

  return await axios.get(Url)
  .then(function(data)
  {
      return data
  });
  //return res


}


async function new_user(user_id,first_name,last_name)
{

  const Url="http://127.0.0.1:5001/Profiles/new_user?user_id="+user_id+"&first_name="+first_name+"&last_name="+last_name;

  return await axios.get(Url)
  .then(function(data)
  {
      return "Success"
  });
  //return res


}

async function post(response)
{
const post_response = await axios({
    method: 'post',
    url: 'http://127.0.0.1:5001/Profiles_Post/',
    data: response,

});

console.log(post_response)

}

async function post_submit(response)
{
const post_response = await axios({
    method: 'post',
    url: 'http://127.0.0.1:5001/Submit/',
    data: response,

});

console.log(post_response)

}



async function Profile_Suggestion()
{
  const Url="http://127.0.0.1:5001/Profiles/Suggestion/";

  return await axios.get(Url)
  .then(function(data)
  {

      return data
  });

}


async function Hackathon_Suggestion()
{
  const Url="http://127.0.0.1:5001/Hackathons/Suggestion/";

  return await axios.get(Url)
  .then(function(data)
  {

      return data
  });

}


async function Courses_Suggestion()
{
  const Url="http://127.0.0.1:5001/Courses/Suggestion/";

  return await axios.get(Url)
  .then(function(data)
  {

      return data
  });

}
