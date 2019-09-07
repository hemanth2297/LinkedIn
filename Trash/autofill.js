function auto_fill_form()
{


  var formstr="<div class='form-popup' id='Skills_Form' autocomplete='off'>
    <form action='/action_page.php' class='form-container' autocomplete='off'>
      <h1>Add Skill</h1>

      <div class='autocomplete' style='width:280px;'>
      <label for='email'><b>Skill</b></label>
      <input type='text' placeholder='Enter Skill' name='email' id='New_Skills' required>

    </div>

      <label for='psw'><b>Proficiency</b></label>
      <input type='number' placeholder='Enter Proficiency' name='psw' id='New_Skills_Pro' required>

      <button type='button' class='btn' onclick=Add_Post('Skills')>Add</button>
      <button type='button' class='btn cancel' onclick=closeForm('Skills')>Close</button>
    </form>
  </div>

  <div class='form-popup' id='Languages_Form' autocomplete='off'>
    <form action='/action_page.php' class='form-container' autocomplete='off'>
      <h1>Add Language</h1>

      <div class='autocomplete' style='width:280px;'>
        <label for='email'><b>Language</b></label>
        <input type='text' placeholder='Enter Language' name='email' id='New_Languages' required>
      </div>

      <label for='psw'><b>Proficiency</b></label>
      <input type='number' placeholder='Enter Proficiency' name='psw' id='New_Languages_Pro' required>

      <button type='button' class='btn' onclick=Add_Post('Languages')>Add</button>
      <button type='button' class='btn cancel' onclick=closeForm('Languages')>Close</button>
    </form>
  </div>

  <div class='form-popup' id='Work_Form' autocomplete='off'>
    <form action='/action_page.php' class='form-container' autocomplete='off'>
      <h1>Add Work</h1>

  <div class='autocomplete' style='width:280px;'>
      <label for='email'><b>Company</b></label>
      <input type='text' placeholder='Enter Work' name='email' id='New_Work_Place' required>
  </div>


      <label for='psw'><b>From</b></label>
      <input type='number' placeholder='Enter From' name='psw' id='New_Work_From' required>



      <label for='psw'><b>To</b></label>
      <input type='number' placeholder='Enter To' name='psw' id='New_Work_To' required>


  <div class='autocomplete' style='width:280px;'>
      <label for='email'><b>Description</b></label>
      <input type='text' placeholder='Enter Description' name='email' id='New_Work_Descritpion' required>
  </div>
      <button type='button' class='btn' onclick=Add_Post('Work')>Add</button>
      <button type='button' class='btn cancel' onclick=closeForm('Work')>Close</button>
    </form>
  </div>




  <div class='form-popup' id='Projects_Form' autocomplete='off'>
    <form action='/action_page.php' class='form-container' autocomplete='off'>
      <h1>Add Project</h1>

  <div class='autocomplete' style='width:280px;'>
      <label for='email'><b>Company</b></label>
      <input type='text' placeholder='Enter Project' name='email' id='New_Projects_Place' required>
  </div>

      <label for='psw'><b>From</b></label>
      <input type='number' placeholder='Enter From' name='psw' id='New_Projects_From' required>



      <label for='psw'><b>To</b></label>
      <input type='number' placeholder='Enter To' name='psw' id='New_Projects_To' required>


  <div class='autocomplete' style='width:280px;'>
      <label for='email'><b>Description</b></label>
      <input type='text' placeholder='Enter Description' name='email' id='New_Projects_Descritpion' required>
  </div>

      <button type='button' class='btn' onclick=Add_Post('Projects')>Add</button>
      <button type='button' class='btn cancel' onclick=closeForm('Projects')>Close</button>
    </form>
  </div>

  <div class='form-popup' id='Education_Form'>
    <form action='/action_page.php' class='form-container' autocomplete='off'>
      <h1>Add Education</h1>

  <div class='autocomplete' style='width:280px;' >
      <label for='email'><b>Company</b></label>
      <input type='text' placeholder='Enter Work' name='email' id='New_Education_Place' required>
  </div>

      <label for='psw'><b>From</b></label>
      <input type='number' placeholder='Enter From' name='psw' id='New_Education_From' required>



      <label for='psw'><b>To</b></label>
      <input type='number' placeholder='Enter To' name='psw' id='New_Education_To' required>


  <div class='autocomplete' style='width:280px;'>
      <label for='email'><b>Description</b></label>
      <input type='text' placeholder='Enter Description' name='email' id='New_Education_Descritpion' required>
  </div>

      <button type='button' class='btn' onclick=Add_Post('Education')>Add</button>
      <button type='button' class='btn cancel' onclick=closeForm('Education')>Close</button>
    </form>
  </div>


  <div class='form-popup' id='Courses_Form'>
    <form action='/action_page.php' class='form-container' autocomplete='off'>
      <h1>Add Courses</h1>

      <div class='autocomplete' style='width:280px;'>
        <label for='email'><b>Courses</b></label>
        <input type='text' placeholder='Enter Courses' name='email' id='New_Courses' required>
      </div>

      <button type='button' class='btn' onclick=Add_Course('Courses')>Add</button>
      <button type='button' class='btn cancel' onclick=closeForm('Courses')>Close</button>
    </form>
  </div>"


  console.log(formstr);

}

window.onload=auto_fill_form()
