function Hotel(name,address,availableSuites){
    this.name = name;
    this.address = address;
    this.availableSuites = availableSuites;
}

var hotel = new Hotel('Embassy','111 main street,OK',24);


function User(fName,lName,cc,nightsStayed,email){
    this.firstName = fName;
    this.lastName = lName;
    this.creditCard = cc;
    this.nightsStayed = nightsStayed;
    this.email = email;
}

var user = new User('Rosie','Breezy','010101010101',6,'r@r.com');



function isNumber(num) {
    return typeof(num) === 'number' || num instanceof Number;
}


function isHotelValid(hotel) {

    if(hotel.name === "" || hotel.name === undefined || hotel.name === null || isNumber(hotel.name)) {
        console.log('Please enter a valid hotel name');
    } else if(hotel.address === "" || hotel.address === undefined || hotel.address === null || isNumber(hotel.address)) {
        console.log('Please enter a valid hotel address');
    }
    else {
        if(typeof Object) {
            console.log('Specified hotel is indeed valid');
        } else {
            console.log('not able to determine what was returned...');
        }
    }
}
   

function isSuiteAvailable(hotel){
    if(hotel.availableSuites <= 0) {
        console.log("There are no suites currently available");
    } else if(hotel.availableSuites === null || hotel.availableSuites === undefined || hotel.availableSuites === ""){
        console.log("Unable to view the amount of rooms available because type is null or undefined");
    } else {
        console.log('There are currently ' + hotel.availableSuites + ' suites available');
    }
}


function calculateBill(user){
    var total;
    var nightlyFee = 99.00;
    var discount = .3;
    var creditCardValid = creditIsValid(user);
    
    if(!user){
        console.log('User cannot be found');
    } else if(user.nightsStayed <= 0 && !creditCardValid) {
        console.log('Cannot charge a user who did not stay at the hotel');
    } else {
        if(user.nightsStayed >= 4 && creditCardValid) {
            total = ((nightlyFee - discount) * user.nightsStayed);
            console.log('Your bill comes up to $' + total);
        } else {
            total = (nightlyFee * user.nightsStayed) 
            console.log('Your bill comes up to $' + total);
        }
    }
}


function creditIsValid(user) {
    var isValid = false;
    var usersName = user.name;
    if(user.creditCard && usersName === user.name) {
        isValid = true;
        if(isValid) {
            console.log('Credit card checks out');
        } else {
            console.log('The credit card entered is invalid or does not belong to this individual');
        }
    } else {
        console.log('There has been an error: this may be a fradulent charge!');
    }
}


function searchByUser(user) {
    if(!user) {
        console.log('An error has occured, are you sure this user exists?');
    } else {
        console.log(user);
    }
}

function isUserStayingInHotel(user,hotel) {
    if(!user) {
        console.log('An error has occured, are you sure this user exists?');
    } else if(isHotelValid(hotel) === null || undefined) {
            console.log('An error has occured, are you sure the hotel is valid?')
     } else {
        console.log('User ' + user.firstName + ' is staying at hotel ' + hotel.name + ' for ' + user.nightsStayed + ' nights');
    }   
}

function makeAppointment(user,hotel) {
    var checksOut = false;
    if(!user || !hotel) {
        console.log('An error has occured, are you sure this user or hotel exists?')
        return checksOut;
    } else if(creditIsValid(user) ===  null) {
        console.log('Unable to make appointment because Credit Card is invalid or unavailable');
        return checksOut;
    }
    else {
        checksOut = true;
        if(isSuiteAvailable(hotel) === null) {
            console.log('An error has occured, are you sure this hotel is available?');
            return checksOut = false;
            } else {
                console.log('How many nights would you like to stay?');
                return checksOut;
            } 
        }
    }