function Employee(id, first, last, email, address, payRate,
                  contract, position,salaried) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.email = email;
    this.address =address;
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
}

function addEmployee(emp) {
    var empArr = [];
    if(!emp || emp.length === 0) {
        console.log('No employee was passed in, or employee field was empty');
    }
    empArr.push(emp);
    console.log(empArr);
}

function removeEmployee(emp) {
    var empArr = [emp];
    if(!empArr || empArr.length === 0) {
        console.log('You cannot remove an already removed employee!');
    }
    empArr.pop(emp);
    console.log(empArr + '\n Employee list after removing employee');
}


function getUserInfo(emp) {
    if(!emp || emp.length === 0) {
        console.log('No employee was passed in, or employee field was empty');
    }
    console.log(emp);
} 


//getUserInfo(emp);
//addEmployee(emp);
//removeEmployee(emp);


//checkEmployeeCredentialsAreCorrect(emp);

