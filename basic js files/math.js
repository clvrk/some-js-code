var hourlyRate =  45.25;
var hoursWorked = 40;
var weeklyPay = hourlyRate * hoursWorked;
console.log('Your weekly salary is' + ' ' + '$' + `${weeklyPay}` + ' USD')

var overtimeHours = 10;
var totalHoursWorked = hoursWorked + overtimeHours;
console.log(totalHoursWorked)


var overtimeRate = (hourlyRate /2) + hourlyRate;
console.log('Your overtime rate is ' + overtimeRate + ' HRS')

var totalOvertimePay = overtimeHours * overtimeRate;
console.log('Your total overtime pay is $' + totalOvertimePay + ' USD')

var totalWeeklyPay = weeklyPay + totalOvertimePay;
console.log('Your total weekly pay is $' + totalWeeklyPay + ' USD')

const TAX_MULTIPLIER = 0.33;
var totalTax = totalWeeklyPay * TAX_MULTIPLIER;
var totalNetPay = totalWeeklyPay - totalTax;
console.log('Sum: $' + `${totalNetPay}` + ' USD')


let x = 5;
let y = 2;
console.log(x % y) // this operator allows you to get the remainder when dividing.