import { useState } from "react";

function EmployeeSalary() {
 
    const [salary, setSalary] = useState();
    var [pension, setPension] = useState();
    var [housing, setHousing] = useState();
    var [transport, setTransport] = useState();
    var [tax, setTax] = useState();
    var [nsal, setNsal] = useState();
 
// When the salary is greater than #50,000 
// tax is 10%  of salary
// pension is 10% of salary
// housing is #5000
// transportation is #5000

// When the salary is greater than #30,000 
// tax is 5%  of salary
// pension is 10% of salary
// housing is #2000
// transportation is #2000

// When the salary is less than  or equal to #30,000 
// tax is 10% of salary
// pension is 10% of salary
// housing is 0
// transportation is 0
function Calculation()
 
{
  
      if(salary > 50000)
       {
         tax = salary * 10/100;
         pension = salary * 10/100;
         housing = 5000;
         transport = 5000;
       }
       else if(salary > 30000)
       {
         tax = salary * 5/100;
         pension = salary * 10/100;
         housing = 2000;
         transport = 2000;

       }
       else
       {
        tax = salary * 10/100;
        pension = salary * 10/100;
         housing = 0;
         transport = 0;
       }
       

       setPension(pension);
       setHousing(housing);
       setTransport(transport);
       setTax(tax);  
       
      
      
       nsal = salary  - housing - transport - pension  - tax ;
 
 
    setNsal(nsal);  
 
}
    

 
 
    return (
      <div className="container">
        <h3>Employee Payroll</h3>
 
    <div className="form-group">
    <label>Employee Name</label>
    <input type="text" className="form-control" placeholder="Employee Name" id="name" />
    </div>
 
    <div className="form-group">
    <label>Salary</label>
    <input type="text" className="form-control" id="salary" placeholder="Enter Salary"
    onChange={(event) =>
        {
            setSalary(event.target.value);      
        }}
    />
    </div>
     <div className="form-group">
    <label>Housing</label>
    <input type="text" className="form-control" placeholder="Housing" value={ housing }  />
    </div>

    <div className="form-group">
    <label>Transport</label>
    <input type="text" className="form-control" placeholder="Transport" value={ transport }  />
    </div>

    <div className="form-group">
    <label>Pension</label>
    <input type="text" className="form-control" placeholder="Pension" value={ pension }  />
    </div> 
 
    <div className="form-group">
    <label>Tax</label>
    <input type="text" className="form-control" placeholder="Tax" value={ tax }  />
    </div>
 
 
    <div className="form-group">
    <label>Net Salary</label>
    <input type="text" className="form-control" placeholder="Net Salary" value={nsal} />
    </div>
  <button type="submit" onClick={Calculation}  className="btn btn-primary mt-4" id="submit">Submit</button>
 
 
        
      </div>
    );
  }
  function receive(){
    let a = document.getElementById("name").value;
    let b = document.getElementById("salary").value;
    let c = document.getElementById("housing").value;
    let d = document.getElementById("transport").value;
    let e = document.getElementById("pension").value;
    let f = document.getElementById("tax").value;
    let g = document.getElementById("netsalary").value;

    let details = {"name":a, 
                    "salary":b , 
                    "housing":c,
                     "transport":d ,
                     "pension": e,
                     "tax": f,
                     "netsalary": g

                    };
                    console.log(details);
    localStorage.setItem("details", JSON.stringify(details));
    document.getElementById("submit").addEventListener("click", receive);

function receive() {
  document.getElementById("submit").innerHTML = localStorage.setItem("details", JSON.stringify(details));;
}

   
}
  
  export default EmployeeSalary;