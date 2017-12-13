function process()
       {
           //Store hourly wage
           var hourlyPay = 22;
          
           //Array to hold all employees data
           var hoursWorked = new Array();
           var i=0, hours;
           var totalPay = 0;
          
           //Reading number of hours
           hours = parseInt(prompt(" Number of Hours Worked? "));
          
           //Loop till user enters -1 to stop reading
           while(hours != -1)
           {
               //Assigning values to array
               hoursWorked[i] = hours;
               i++;
              
               //Reading data again
               hours = parseInt(prompt(" Number of Hours Worked? "));
           }
          
           //Creating table header with three columns
           var payroll= "<table border=1><tr><td style='width: 100px; color: blue; text-align: center;'> Index </td>";
           payroll+= "<td style='width: 200px; color: blue; text-align: center;'> Number of hours worked </td>";
           payroll+="<td style='width: 200px; color: blue; text-align: center;'> Employee Pay </td></tr>";
          
           //Loop over array and print each employee information
           for(var k=0; k<hoursWorked.length; k++)
           {
               var pay = 0;
              
               //If number of hours worked greater than 40
               if(hoursWorked[k] >= 40)
                   pay = parseFloat((40 * hourlyPay) + ((hoursWorked[k] - 40) * 1.5 * hourlyPay));
               //If number of hours worked less than 40
               else
                   pay = parseFloat(hoursWorked[k] * hourlyPay);
              
               //Accumulating total pay
               totalPay += pay;
              
               //Adding each row to table
               payroll += "<tr><td style='width: 100px; color: blue; text-align: center;'>" + (k+1) + " </td>";
               payroll += "<td style='width: 200px; color: blue; text-align: center;'> " + hoursWorked[k] + " </td>";
               payroll += "<td style='width: 200px; color: blue; text-align: center;'> $ " + pay + " </td></tr>"
           }
  
           payroll += "</table>";
          
           //Adding table to html page
           document.getElementById("payrollTable").innerHTML = payroll;
          
           //Adding last summary line
           document.getElementById("totalPay").innerHTML = "Total pay of all employees: $ " + totalPay;
       }