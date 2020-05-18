// **sharpDigits Data Presentation**
// ### Level 1: Automatic Table of Reviews

// Using the sample reviews and sentiment analysi dataset provided in the form of an array of JavaScript objects, 
// a table is appended to the web page and then adds new rows of data for each customer review for each merchant.

// This part of the code gets the data from data.js and copies it into a new array
var reviewData = data;
var delayInMilliseconds = 3000;

// This part of the code gets table references
var tbody = d3.select("tbody");

function buildTable(reviewData) {
  // This part of the code clears out any existing data
  tbody.html("");

  // loops through each object in dataset
  // and append rows and cells for each value
  reviewData.forEach((dataRow) => {
    // and appends a row to the table body
    var row = tbody.append("tr");

    // loops through each field in the dataRow and adds
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// Uses a merchant code in the HTML document and write JavaScript 
// code that will listen for events and search through the 
// `Select Merchant` and 'select result type' columns to find rows that match users input.

function handleClick() {

  // This part of the code prevents refresh 
  d3.event.preventDefault();

  // This part of the code gets the merchant name value from the filter
  var merc = d3.select("#Merchant").property("value");
  
  // This part of the code gets the result type value from the filter
  var answer = d3.select("#Results").property("value");

  let filteredData = reviewData;

  // This part of the code checks to see if a merchant name was entered and filters the
  // data using that merchant.

  if (merc) {       
        
    filteredData = filteredData.filter(row => row.Merchant === merc);
    
    var score = filteredData.map(function(s) {
      // console.log(s.ACCU);
      return score
    });

    console.log(filteredData[0,0].ACCU);

    //d3.select("li").text(`Accuracy:  ${filteredData[0,0].ACCU}`);
    
  }
              

  if (answer) {
    // Apply `filter` to the table data to only keep the
    // rows where the `Results` value matches the filter value
    filteredData = filteredData.filter(row => row.Results === answer);
  }

  
  var shortFilter = filteredData.map(function(short) {
    // console.log(short.CustomerReviews, short.LexiconAssessment, short.MachineInterpretation, short.Results);
    return [short.CustomerReviews, short.LexiconAssessment, short.MachineInterpretation, short.Results]
  });

 // build the filtered table based on date selected
 setTimeout(function() {
  buildTable(shortFilter);
  d3.select("li").text(`Accuracy:  ${filteredData[0,0].ACCU}`);
 }, delayInMilliseconds);  
  //console.log(shortFilter);
}

// click button event 
d3.selectAll("#filter-btn").on("click", handleClick);

// load page default when page loads 

shortReview = reviewData;

// setTimeout(function() {
// }, delayInMilliseconds);  