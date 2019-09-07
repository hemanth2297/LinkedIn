

// var word_array = [
//    {text: "Lorem", weight: 15,link: "http://jquery.com/"},
//    {text: "Ipsum", weight: 15, link: "http://jquery.com/"},
//    {text: "Dolor", weight: 15, link: "http://jquery.com/"},
//    {text: "Sit", weight: 15,link: "http://jquery.com/"},
//    {text: "Amet", weight: 15,link: "http://jquery.com/"},
//    {text: "Lorem", weight: 15,link: "http://jquery.com/"},
//    {text: "Ipsum", weight: 15, link: "http://jquery.com/"},
//    {text: "Dolor", weight: 15, link: "http://jquery.com/"},
//    {text: "Sit", weight: 15,link: "http://jquery.com/"},
//    {text: "Amet", weight: 15,link: "http://jquery.com/"}
//    // ...as many words as you want
// ];

$(async function() {

  data=Courses_Suggestion();
  var response;
  await data.then(value=>
  {
      response=value.data
  });
  word_array=response

 // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
 $("#example").jQCloud(word_array,{
   shape: 'Cloud shape',
   autoResize: true

 });
});
