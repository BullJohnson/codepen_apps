'use strict'

// William S. Johnson, Jr | 9-24-23 | DPR214 - codepen_future_value

var futureValue;
		
// get user entries and qualify
var investment = prompt("Enter investment amount as xxxxx.xx", 10000);
investment = parseFloat(investment);
while(isNaN(investment) || investment < 0) {
    investment = parseFloat(prompt("Your entry must be a valid number, greater than zero. \nUse format xx.xx"));
}

var rate = prompt("Enter interest rate as xx.x", 7.5);
rate = parseFloat(rate);
while(isNaN(rate) || rate < 0) {
    rate = parseFloat(prompt("Your entry must be a valid number, greater than zero. \nUse format xx.xx"));
}

var years = prompt("Enter number of years", 10);
years = parseInt(years);
while(isNaN(years) || years < 0) {
    years = parseFloat(prompt("Your entry must be a valid number of years, greater than zero. \nPlease enter whole years"));
}

// calulate future value
futureValue = investment;
document.write(`<h4>Investment amount = ${investment}  Interest rate = ${rate.toFixed(2)}%  Years = ${years}</h4>`);
for (var i = 1; i <= years; i++ ) {
    let interest = (futureValue * rate / 100);
    futureValue = futureValue + interest;
    document.write(`<p>Year= ${i} Interest= ${interest.toFixed(2)} Value= ${futureValue.toFixed(2)}</p>`);
}
document.write(`<h4>In ${years} years, your investment of ${investment} dollars will mature to ${futureValue.toFixed(0)} dollars</h4>`);

