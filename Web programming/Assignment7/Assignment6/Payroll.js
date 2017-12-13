
	var employeeHours = parseInt(window.prompt("How many hours did this employee work?\n"  +  "Enter '-1' to quit.")); 
	var employeeNumber = 0;
	var hourlyWage = 15;  
	var overtimeWage = 15*1.5;               
	var pay = 0;                         
	var last = 0;           
	
	while (employeeHours >=0){
		employeeNumber += 1;	
		if (employeeHours > 40) 
			pay = (hourlyWage * 40) + (overtimeWage * (employeeHours - 40));
		else
			pay = employeeHours * hourlyWage;

		document.write("<tr><td>" + employeeNumber + "</td><td>" + employeeHours + "</td><td>$" + pay + "</td></tr>");
		last += pay;
		
		employeeHours = parseInt(window.prompt("Please Enter the Number of Hours the Employee Worked?\n"  +  "Please Enter '-1' to quit."));
			
	}
	document.write("</tbody>");
	document.write("</table>");
	document.write("<p>The total pay of all the employees is <strong>$" + last + "</strong>." +"</p>");
