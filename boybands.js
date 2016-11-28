/*
Loop through the two arrays provided (bands and vegetables) and output each element 
in the arrays into their corresponding HTML <div> element. Ensure that each item is in 
a block element (e.g. li, div, p. etc...)
*/


var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
console.log(bandElement);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
console.log(veggieElement);

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];

  var newBandPara = document.createElement("p");

  var addBand = document.createTextNode(currentBand);

  newBandPara.appendChild(addBand);

  bandElement.appendChild(newBandPara);


  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];

  var newVeggPara = document.createElement("p");

  var addVegg = document.createTextNode(currentVeggie);

  newVeggPara.appendChild(addVegg);

  veggieElement.appendChild(newVeggPara);

}