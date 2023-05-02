/* Your Code Here */

function createEmployeeRecord(arr) {
    const [firstName, familyName, title, payPerHour] = arr;
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arr) {
    return arr.map(employee => createEmployeeRecord(employee));
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
  
    const newEvent = {
      type: "TimeIn",
      hour: parseInt(hour),
      date: date
    }
  
    this.timeInEvents.push(newEvent);
    return this;
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");

    const newEvent = {
        type : "TimeOut",
        hour: parseInt(hour),
        date: date
    }

    this.timeOutEvents.push(newEvent);
    return this;
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    
    const timeIn = parseInt(timeInEvent.hour) / 100;
    const timeOut = parseInt(timeOutEvent.hour) / 100;
    
    return timeOut - timeIn;
}

function wagesEarnedOnDate(date) {
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
}
  
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}  

function calculatePayroll(employees) {
    return employees.reduce((totalPay, employee) => {
        return totalPay + allWagesFor.call(employee);
    }, 0);
}  

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

