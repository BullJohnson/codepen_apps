'use strict'

// William S. Johnson, Jr | 9-24-23 | DPR214 - codepen_scores_array

var entry;
var average;
var scores = [];
var total = 0;
var show = "The test scores:\n";

// use a do-while loop to get scores from user
do {
    entry = prompt("Enter test score\n" +
                   "Or enter 999 to end entries", 999);
    entry = parseInt(entry);
    if (entry >= 0 && entry <= 100) {
        scores[scores.length] = entry;
    } else if (entry != 999){
        alert("Entry must by a valid number from 0 through 100\n" +
              "Or enter 999 to end entries");
    }
}
while (entry != 999); 

document.write(`<h4>The Test Scores:</h4>`);  // added docWrite, to original script, for attractive display

if (scores.length != 0) {
    // use a for loop to process the scores
    for (var i = 0; i < scores.length; i++) {

        document.write(`<p>${scores[i]}</p>`);  // added docWrite, to original script, for attractive display

        total = total + scores[i];       // both are numbers so adds
        show = show + scores[i] + "\n";  // strings & number so concatenates
    }

    // calculate the average and display
    average = parseInt(total/scores.length);
   // alert(show + "\nAverage score is " + average);

    document.write(`<h5>Average score is ${average}</h5>`);   // added docWrite, to original script, for attractive display	
}