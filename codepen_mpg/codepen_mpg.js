'use strict'

// William S. Johnson, Jr | 9-24-23 | DPR214 - codepen_MPG

let again = "y";
let trip = 1;
alert("This app calculates the average miles per gallon, for your road trips.\nIt also allows multiple entries, for comparison purposes");

do {
    // Get the number of miles driven
    let miles = 0;
    do {
        miles = parseFloat(prompt("Enter miles driven"));
    }
    while (isNaN(miles) || miles < 0);

    // Get the amount of gas used
    let gallons =0;
    do {
        gallons = parseFloat(prompt("Enter gallons of gas used"));
    }
    while (isNaN(gallons) || gallons < 0);    


    // Calculating Miles per Gallon
            let mpg = miles / gallons;
            mpg = parseFloat(mpg);
            document.write(`<h4>Trip Number:${trip} &nbsp;&nbsp;Miles Driven:${miles}
               &nbsp;&nbsp;Gallons of Fuel Used:${gallons}  &nbsp;&nbsp;Averaage MPG:${mpg.toFixed(1)}</h4>`);
            trip = trip + 1;

            again = prompt("Would you like to enter another trip,\nfor comparison purposes?", "y");
}
while (again == "y");