function validateForm(){
var uID = document.forms["quizform"]["userid"].value;
    var firstName = document.forms["quizform"]["fname"].value;
    var lastName = document.forms["quizform"]["lname"].value;
document.getElementById("id_msg").innerHTML = "";
document.getElementById("fname_msg").innerHTML = "";
document.getElementById("lname_msg").innerHTML = "";
       
	   if(uID== "" && firstName== "" && lastName== ""){
	  
	   document.getElementById("id_msg").innerHTML="Please Enter an ID ";
	    document.getElementById("fname_msg").innerHTML="Please Enter a First Name ";
		 document.getElementById("lname_msg").innerHTML="Please Enter a Last Name ";
		  alert("You forgot to fill in the  detail(s) ID, First Name and Last Name");
		  
		  return false;
	   }else{
	   if(firstName== "" && lastName=="")
	   {
	              document.getElementById("fname_msg").innerHTML="Please Enter a First Name ";
				  document.getElementById("lname_msg").innerHTML="Please Enter a Last Name ";
				  alert("You forgot to fill in the  detail(s) First Name and Last Name");
				  
				return false;
	   }else if(uID== "" && firstName=="")
	   {
	   document.getElementById("id_msg").innerHTML="Please Enter an ID ";
	   document.getElementById("fname_msg").innerHTML="Please Enter a First Name "; 
	   alert("You forgot to fill in the  detail(s) ID and First Name");
	   
	   return false;
	   }else if(uID== "" && lastName==""){
	    document.getElementById("id_msg").innerHTML="Please Enter an ID ";
	   document.getElementById("lname_msg").innerHTML="Please Enter a Last Name "; 
	   alert("You forgot to fill in the  detail(s) ID and Last Name");
	   
	   return false;
	   }
	   else if(uID=="" || uID== null)
	   {
	   document.getElementById("id_msg").innerHTML="Please Enter an ID"; 
	   alert("You forgot to fill in the  detail(s) ID");
	   
	   return false;
	   }
	   else if(firstName=="" || firstName== null)
	   {
	   document.getElementById("fname_msg").innerHTML="Please Enter a First Name "; 
	   alert("You forgot to fill in the  detail(s) First Name");
	   
	   return false;
	   }
	   else if(lastName=="" || lastName== null)
	   {
	   document.getElementById("lname_msg").innerHTML="Please Enter a Last Name ";
	   alert("You forgot to fill in the  detail(s) Last Name");
	   
	    return false;
	   }
	   else
	   {
	   document.getElementById("input").innerHTML= uID;
    document.getElementById("firstname").innerHTML= firstName;
    document.getElementById("lastname").innerHTML= lastName;
    document.getElementById("quizform").reset();
	   }
}
    
    
    
    return true;
     
}

