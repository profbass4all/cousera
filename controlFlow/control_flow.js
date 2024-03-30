let userRole = 'admin';
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType){
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager'
        break;
    case 'subscriber':
        userCategory = 'Subscriber'
        break;
    default:
        userCategory = 'Unknown';
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated? 'Authenticated': 'Not authenticated';
console.log("Authentication Status:", authenticationStatus);

let role = 'Employee';
let access;

if (role == 'Employee' || role == 'Enrolled Member' || role == 'Subscriber'){
    if(role == 'Employee'){
        access = 'You are authorized to have Dietary services'
    }else if (role == 'Enrolled Member'){
        access = 'You are authorized to have access to dieary services and one-on-one interaction with dietician'
    }else{
        access = 'You have partial access to facilitate dietary services'
    }
}else{
    access = 'You have to subscribe to use this facility'
}

console.log('Access: ', access)