/*            

    METHODS:
        ** THESE METHODS DO NOT HAVE A FRONT END SO EVERYTHING IS JUST BEING CONSOLE LOGGED **
        AddEmployee - Complete(?)
        RemoveEmployee - Complete(?)
        displaySalaried - Complete(?)
        displayHourly - Complete(?)
        calculateMonthlyPayFromUser - Complete(?)
        calculatePayDay - Complete(?)
        addBonus - Complete(?)
        addBonusToAll - Complete(?)
        addDeduction  - Complete(?)
        holdPayCheck -  Complete(?)
        changeToSalaried  - Complete(?)
        changeToHourly - Complete(?)
        changeEmployeeAddress - Complete(?)
        suspendEmployee - Complete(?)
        payOutHourlyEmployee - Complete(?)
        payOutSalariedEmployee - Complete(?)
        getRoleEmployee - Complete(?)
        sortIntoCategories - Complete(?)
        reimburseEmployee - Complete(?)
        changeFieldPosition - Complete(?)
*/


var Employee = {
    employeeCollection: [
        {id: 1, email:'w@w.com', firstName: 'William', lastName: 'Spicer', payRate: 35.00, salaried: true,position:'IT',contract: false, address:'111 Main street'},
        {id: 2, email:'j@w.com', firstName: 'Joseph', lastName: 'Smith', payRate: 15.00, salaried: false,position:'IT',contract: true,  address:'213 Far road'},
        {id: 3, email:'s@w.com', firstName: 'Samantha', lastName: 'Gordon', payRate: 25.00, salaried: true,position:'HR',contract: false,  address:'301 Street street'},
        {id: 4, email:'s1@w.com', firstName: 'Sammy', lastName: 'Laing', payRate: 12.00, salaried: false,position: 'General',contract: true,  address:'0971 Apartment road'},
        {id: 5, email:'e@w.com', firstName: 'Enzo', lastName: 'Matheau', payRate: 17.00, salaried: false,position:'General',contract: false,  address:'6521 Green road'},
        {id: 6, email:'r@w.com', firstName: 'Ruby', lastName: 'Breezy', payRate: 40.00, salaried: true,position:'IT',contract: false,  address:'192 Daisy street'},
    ]
};

var holder = Employee.employeeCollection;

//HELPER METHODS
function isString(s) {
    return typeof(s) === 'string' || s instanceof String;
}


function isUndefined(u) {
    return typeof(u) === 'undefined' || u.length === 0;
}

function isNull(n) {
    return typeof(n) === 'null' || n.length === 0;
}

function isNumber(num) {
    return typeof(num) === 'number' || num instanceof Number;
}

//want to figure out how to implement in other methods
function user() {
    for(var i = 0; i < holder.length; i++) {
        var newHolder = holder[i];
        return newHolder;
    }
}

//END OF HELPER METHODS


/*

    METHODS TO FIND EMPLOYEE INFORMATION

*/

//return the employee based on the name that is entered
function findUser(empFName,empLName) {
    var elementPos = holder.map(function(x) { return x.firstName}).indexOf(empFName);
    var objectFound = holder[elementPos];
    if(empFName === objectFound.firstName && empLName === objectFound.lastName) {
        console.log(objectFound);
        return objectFound;
    } else {
        console.log('please enter a valid first and last name');
    }
}



//search for employee based on their first name and last name
function findAddress(empFName, empLName) {
    for(var i = 0; i < holder.length; i++) {
        var newHolder = holder[i];
        var addressHolder = holder[i].address;
        if(newHolder["firstName"] === empFName && newHolder["lastName"] === empLName) {
            console.log('Employee ' + empFName + ' ' + empLName + ' is located at: ' + addressHolder); 
        }
    }
}


//find an employee email based on their ID
function findEmail(empID) {
    for(var i =0; i < holder.length; i++) {
        var newHolder = holder[i];
        if(newHolder['id'] === empID) {
            console.log('Employee ' + newHolder.firstName + "'s email address is: " + newHolder.email);
        }
    }
}


//displays all employees in holder.length that are Salary or make atleast $20/hr
function displaySalariedEmp() {
for(var i = 0 ; i < holder.length; i++) {
    var keyHolder = holder[i];
    if(!keyHolder.salaried === false || isNumber(keyHolder.payRate) >= 20.00 ) {
        console.log(keyHolder);
        }
    }
}

//displays all employees in holder.length that are hourly or make less than $20/hr
function displayHourlyEmp() {
    for(var i = 0; i < holder.length; i++) {
        var keyHolder = holder[i];
        if(keyHolder.salaried === false || isNumber(keyHolder.payRate) <= 19.99) {
            console.log(keyHolder);
        }
    }
}

function displayContractEmp() {
    for(var i = 0; i < holder.length; i++) {
        var keyHolder = holder[i];
        if(keyHolder.salaried === false && keyHolder.contract === true) {
            console.log(keyHolder);
        }
    }
}


//get the role that the user is in
function getRoleEmployee(empID) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    if(empID !== emp.id){
       console.log('Please enter a valid user');
    }
    console.log('Employee ' + emp.firstName + ' is in ' + emp.position);
}


//loop through all users and sort into categories based on their role
function sortIntoCategories() {
    for(var i = 0; i < holder.length; i++){
        var empHolder = holder[i];
        if(empHolder.position === 'IT') {
            console.log('User ' + empHolder.firstName + ' ' + empHolder.lastName +  ' belongs to the IT field');
        } else if(empHolder.position === 'HR') {
            console.log('User ' + empHolder.firstName + ' ' + empHolder.lastName + ' belongs to the HR field');
        } else {
            console.log('User ' + empHolder.firstName + ' ' + empHolder.lastName + ' belongs to the General field');
        } 
    }
}

/*

    END OF METHODS TO FIND EMPLOYEE INFORMATION

*/

/*

    METHODS TO CALCULATE PAYMENT AND/OR PAY OUT

*/

//accepts employee id and pay rate, if they do not match whats in the object, it will not return. 
function calculateMonthlyPayFromUser(empID,empPayRate,hoursWorked,daysWorked,weeksWorked) {
    var hoursWorked = hoursWorked;
    var daysWorked = daysWorked;
    var weeksWorked = weeksWorked;
    for(var i = 0; i < holder.length; i++){
        var keyHolder = holder[i];
        var found = false;
        if(keyHolder["id"] === empID && keyHolder["payRate"] === empPayRate) {
            var payHolder = empPayRate;
            found = true;
            if(found) {
                var total = (Number((hoursWorked * daysWorked) * weeksWorked) * payHolder);
                console.log("$" + total + " is the calculated total monthly payment for this employee before taxes");
                return total;
            } else {
                console.log('Please input the correct types: (#)ID, (#)PAYRATE,  (#)HOURS WORKED(DAILY), (#)DAYS WORKED, AND (#)WEEKS WORKED')
            }
        }
    }
}

//Enter the date[15th or 30th] 
function calculatePayDay(payDay) {
    var payDays = [15,30];
    var today = payDay;
    if(today === payDays[0] || today === payDays[1]){
        return today;
    } else {
        console.log('The day entered is not a payday');
    }
}



//Enter the employees ID and their hourly rate, monthly rate is not needed and payday is entered for you.
function payOutHourlyEmployee(empID, hourlyRate, payDay = calculatePayDay(15)) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    var monthlyPay = calculateMonthlyPayFromUser(empID,hourlyRate,8,5,4);
    if(!emp || emp.length === 0 ) {
        console.log('Employee at index provided cannot be found');
    } 
    if(emp.salaried === false && emp.payRate === hourlyRate  && payDay) {
        console.log('Hourly employee ' + emp.firstName + ' is receiving $' + monthlyPay);
        return monthlyPay;
    }
}

//Enter the employees ID and their hourly rate, monthly rate is not needed and payday is entered for you.
function payOutSalariedEmployee(empID,hourlyRate, payDay = calculatePayDay(30)) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    var monthlyPay = calculateMonthlyPayFromUser(empID,hourlyRate,8,5,4);
    if(!emp || emp.length === 0 ) {
        console.log('Employee at index provided cannot be found');
    } 
    if(emp.salaried === true && emp.payRate === hourlyRate && payDay) {
        console.log('Salaried employee ' + emp.firstName + ' is receiving $' + monthlyPay);
        return monthlyPay;
    }
}


//enter the employee ID and hourly rate
function holdPayCheck(empID, hourlyRate, payDay = calculatePayDay(15)) {
    for(var i = 0; i < holder.length; i++) {
        var newHolder = holder[i];
        var empFName = holder[i].firstName;
        var monthlyPay = calculateMonthlyPayFromUser(empID,35,8,5,4);
        if(empID === newHolder['id'] && hourlyRate === newHolder.payRate && payDay) {
            console.log('Withholding paycheck amount: $' + monthlyPay + ' from employee ' + empFName);
            return monthlyPay;
        } else {
            console.log('Please enter a valid employee ID');
           
        }
    }
}

/*

    END OF METHODS TO CALCULATE PAYMENT AND/OR PAY OUT

*/


/*

    METHODS TO ADD/REMOVE/SUSPEND EMPLOYEES

*/

    function addEmployee(id, email, firstName, lastName, payRate, salaried,position,contract,address) {
        var newHolder = {id: id, email: email, firstName: firstName, lastName: lastName,
            payRate: payRate, salaried: salaried, position: position, contract: contract, address: address};
        if(isString(newHolder.id) || isUndefined(newHolder.id) || isNull(newHolder.id)
        || isNumber(newHolder.email) || isUndefined(newHolder.email) || isNull(newHolder.email)
        || isNumber(newHolder.firstName) || isUndefined(newHolder.firstName) || isNull(newHolder.firstName)
        || isNumber(newHolder.lastName) || isUndefined(newHolder.lastName) || isNull(newHolder.lastName)
        || isString(newHolder.payRate) || isUndefined(newHolder.payRate) || isNull(newHolder.payRate)
        || isString(newHolder.salaried) || isNumber(newHolder.salaried) || isUndefined(newHolder.salaried) || isNull(newHolder.salaried)
        || isNumber(newHolder.position) || isUndefined(newHolder.position) || isNull(newHolder.position)
        || isNumber(newHolder.address) || isUndefined(newHolder.address) || isNull(newHolder.address)) {
            console.log('Please enter the approriate values for each field');
        } else {
            holder.push(newHolder);
            console.log(holder);
        }
    }


//naive version of remove employee by their ID
function removeEmployee(empID) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    if(!emp || emp.length === 0 ) {
        console.log('Employee at index provided cannot be found');
    }
    emp.payRate = 0;
    emp.salaried = false;
    emp.email = null;
    var arr = [];
    arr.push(emp);
    console.log(arr);
    return arr;
}

function suspendEmployee(empID) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    if(!emp || emp.length === 0) {
        console.log('Please enter an actual employee ID');
    } else {
        emp.suspended = true;
        emp.payRate = 0;
        emp.salaried = false;
        console.log('Employee ' + emp.firstName + ' has been suspended');
    }
}

/*

   END OF METHODS TO ADD/REMOVE/SUSPEND EMPLOYEES

*/

/*

    METHODS TO CHANGE PAYMENT/EMPLOYEE INFO TYPE

*/

function changeToSalaried(empID) {
 var pos = holder.map(function(x) { return x.id}).indexOf(empID);
 var emp = holder[pos];
 if(!emp || emp.length === 0) {
     console.log('Please enter an actual employee ID');
 } else {
     if(emp.salaried === true){
        console.log("Employee is already listed as salaried");
     } else {
        console.log('Employee is now listed as salaried');
     }
   }
}


function changeToHourly(empID) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    if(!emp || emp.length === 0) {
        console.log('Please enter an actual employee ID');
    } else {
        if(emp.salaried === true) {
            emp.salaried = false;
            console.log("Employee is now listed as hourly");
        } else {
            console.log('Employee is already listed as hourly');
        }
    }
}

function changeEmployeeAddress(empID,empAddress) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    if(!emp || emp.length === 0 ) {
        console.log('Employee at index provided cannot be found');
    } else {
        emp.address = empAddress;
        console.log('Address of ' + emp.firstName+ ' has been changed to ' + empAddress);
    }
}


function changeFieldPosition(empID,position) {
    for(var i = 0; i < holder.length; i++){
        var empHolder = holder[i];
        if(!empHolder) {
            console.log('There is no employee by this ID');
        }
        else if( empID === empHolder.id && empHolder.position === position) {
            console.log('Employee is already in that position');
        } else if( empID === empHolder.id || isNumber(position) || isNull(position) || isUndefined(position)) {
            console.log('Please enter an actual position type');
        } 
        if(empID === empHolder.id && empHolder.position !== position){
            console.log('Employee ' + empHolder.firstName + ' has been moved from ' + empHolder.position + ' to ' + position);
        }
    }
}



/*

   END OF METHODS TO CHANGE PAYMENT/EMPLOYEE INFO TYPE

*/

/*

     METHODS TO ADD BONUSES/MAKE DEDUCTIONS

*/


//adds an hourly bonus to all employees within the holder.length
function addBonusToAll(amt) {
for(var i = 0; i < holder.length; i++){
    var keyHolder = holder[i];
        keyHolder.payRate += isNumber(amt);
        console.log("Payrate of $" + amt + " has been added to " +  keyHolder.firstName + " amounting to $"  + keyHolder.payRate + " an hour");
    }
}

//Look up the employee based on their ID and add a bonus
function addBonus(empID, amt){
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    if(!emp || emp.length === 0) {
        console.log('Employee can not be found');
    }
    emp.payRate += isNumber(amt);
    console.log("Employee " + emp.firstName + " has had their pay increased by $" + amt + " an hour");
}

//Add a deduction based on the employee ID entered
function addDeduction(empID,amt) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    if(!emp || emp.length === 0 ) {
        console.log('Employee can not be found');
    }
    emp.payRate -= amt;
    console.log("Employee " + emp.firstName + " has had their pay deducted by $" + amt + " an hour");
}



function reimburseEmployee(empID, amt) {
    var pos = holder.map(function(x) { return x.id}).indexOf(empID);
    var emp = holder[pos];
    emp.hasTraveled = true;
    if(!emp || emp.length === 0 ) {
        console.log('Employee can not be found');
    } 
    if(emp.id === empID) {
        if( emp.hasTraveled && amt < 2500) {
            console.log('Reimbursing $' + amt + ' to employee ' + emp.firstName);
        } else {
            console.log('Amount exceeds per diem. Please call (1)800-788-8888');
        }
    }
}


/*

   END OF METHODS TO ADD BONUSES/MAKE DEDUCTIONS

*/

    //addDeduction(1,5.00)
    //findUser('William','Spicer');
    //removeEmployee(3);
    //addBonus(1,1.50);
    //addBonusToAll(5)
    //calculateMonthlyPayFromUser(1,35,8,5,4);
    // findAddress('William','Spicer');
    // findEmail(1);
    //holdPayCheck(1,35);
    //changeToSalaried(2);
    //suspendEmployee(1);
    //payOutHourlyEmployee(2,15);
    //payOutSalariedEmployee(1,35);
    
    //changeEmployeeAddress(2,'Something street');
    //getRoleEmployee('Joseph');
    //sortIntoCategories();
    //displayContractEmp();
   //reimburseEmployee(1,2500);
   //changeFieldPosition(1,'a');