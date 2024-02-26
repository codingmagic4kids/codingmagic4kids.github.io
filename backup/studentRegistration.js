function registration ()
{
	let fname  = document.getElementById("fname").value
	let lname  = document.getElementById("lname").value
   let age    = document.getElementById("age").value
	let course = document.getElementById("course").value
	let day    = document.getElementById("day").value
   let time   = document.getElementById("timings").value

   if (fname.length <2 || lname.length <2 ||
       age == "" || course == "" || day == "" || time == "")
   {
      alert ("Please fill in all the details correctly");
      return;
   }
    
   /*
   const fs = require("fs");
   alert("Going to write into existing file input.txt");

   // Open a new file with name input.txt and write Simply Easy Learning! to it. 
   fs.writeFile("input.txt", "Adding the user data", function(err)
   {   
      alert("Data written successfully!");
      alert("Let's read newly written data");

      // Read the newly written file and print all of its content on the console
      fs.readFile('input.txt', function (err, data) 
      {   
         alert("Asynchronous read: " + data);
      }); 
   });
   */

}
