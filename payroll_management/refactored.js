function Employee(id, first, last, email, address, payRate,
                  contract, position,salaried) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.email = email;
    this.address = address;
    this.payRate = payRate;
    this.contract = contract;
    this.position = position;
    this.salaried = salaried;                    
}

var emp = new Employee(1,'william','spicer','w@w.com','111 main street', 35.00,
                      false,'IT',true);
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


if(isNull(emp.id) || isUndefined(emp.id) || isString(emp.id)) {
    console.log('There needs to be a number at this specified parameter');
} 

function getUserInfo(emp) {
        function checkEmployeeCredentialsAreCorrect(emp) {
            if(isNull(emp.first) || isUndefined(emp.first) || isNumber(emp.first) ||
                isNull(emp.last) || isUndefined(emp.last) || isNumber(emp.last)    || 
                isNull(emp.email) || isUndefined(emp.email) || isNumber(emp.email) || 
                isNull(emp.address) || isUndefined(emp.address) || isNumber(emp.address) || 
                isNull(emp.payRate) || isUndefined(emp.payRate) || isString(emp.payRate) ||
                isNull(emp.contract) || isUndefined(emp.contract) || isNumber(emp.contract) || isString(emp.contract) || 
                isNull(emp.position) || isUndefined(emp.position) || isNumber(emp.position)||
                isNull(emp.salaried) || isUndefined(emp.salaried) || isString(emp.salaried) || isNumber(emp.salaried)){
                console.log('Please input the appropriate types into each field');
            } else {
                console.log('Everything looks good! Employee created');
            }
            return emp;
        }
        if(!emp || emp.length === 0) {
           console.log('No employee was passed in, or employee field was left empty');
        } else {
            console.log(checkEmployeeCredentialsAreCorrect(emp));
        }
    }


function addEmployee(emp) {
    var empArr = [];
    if(!emp || emp.length === 0) {
        console.log('No employee was passed in, or employee field was empty');
    }
   getUserInfo(emp);
    empArr.push(emp);
}

function removeEmployee(emp) {
    var empArr = [emp];
    if(!empArr || empArr.length === 0) {
        console.log('You cannot remove an already removed employee!');
    }
    empArr.pop(emp);
    console.log(empArr + '\n Employee list after removing employee');
}


function suspendEmployee(emp) {
    var suspendArr = [];
    if(!emp || emp.length === 0) {
        console.log("You can't remove a non-existent employee!");
    }
    emp.status = "suspended";
    emp.payRate = 0;
    emp.salaried = false;
    suspendArr.push(emp);
    console.log(suspendArr);
}


//figure out why this is returning [object Object]
function calculatePayFromUser(emp) {
    if(!emp || emp.length === 0) {
        console.log('Cannot calculate from non-existent employee user');
    }
    var hourly = emp.payRate;
    var weeksWorked = 4;
    var daysWorked = 5;
    var dailyHours = 8;
    var holiday = false;
    
    if(hourly !== emp.payRate) {
        console.log('Something went wrong... payrate does not match');
    }
    if(dailyHours < 8) {
        var actualHoursWorked = 7;
        var deduction = emp.payRate;
        if(actualHoursWorked <= 7) {
            var total = (((weeksWorked * daysWorked) * actualHoursWorked) * hourly) - deduction;
        }
    }
    if(daysWorked < 5) {
        var actualDaysWorked = 4;
        var deduction = emp.payRate * dailyHours;
        holiday = true;
        if(actualDaysWorked <= 4 && !holiday) {
            var total = (((weeksWorked * actualDaysWorked) * dailyHours) * hourly) - deduction;
            //If !holiday.. deduction
        } else {
            var total = ((weeksWorked * daysWorked) * dailyHours) * hourly;
        }
    }
    var total = ((weeksWorked * daysWorked) * dailyHours) * hourly;
    console.log('Employee ' + emp + ' is receiving $' + total + ' this month');
    return total;
}


function payOutEmployee(emp) {
    var totalToPayOut = calculatePayFromUser(emp);
    if(isUndefined(totalToPayOut) || isNull(totalToPayOut)) {
        console.log("Can't determine how much to pay out...");
    } else {
        console.log('Employee has been successfully paid');
    }
}


function holdPayCheck(emp) {
    var total = calculatePayFromUser(emp);
    if(isUndefined(total) || isNull(total)) {
        console.log("Can't determine the total amount");
    }  else {
        console.log('Total amount of $' + total + ' has been withheld from employee');
    }
}

function addBonusToEmployee(emp, amt) {
    if(!emp || emp.length === 0) {
        console.log('No employee found');
    }
    if(isString(amt) || isNull(amt) || isUndefined(amt)){
        console.log('Amount entered needs to be a number');
    } else {
        emp.payRate += amt;
        if(emp.payRate >= 20) {
            emp.salaried = true;
        } else {
            emp.salaried = false;
        }
        console.log('Employee hourly pay rate is now $' + emp.payRate);
    }
}




//getUserInfo(emp);
//holdPayCheck(emp);
//suspendEmployee(emp);
//addBonusToEmployee(emp, 3);
//payOutEmployee(emp);
//addEmployee(emp);
//calculatePayFromUser(emp);

//getUserInfo(emp);

//removeEmployee(emp);




