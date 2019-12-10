// **UFO-level-1**
// ### Level 1: Automatic Table and Date Search

// * Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided.

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
// appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` 
// at the very least.

// Get the data from data.js and copy it into a new array
var reviewData = data;
var delayInMilliseconds = 3000;

// get table references
var tbody = d3.select("tbody");

function buildTable(reviewData) {
  // Clear out any existing data
  tbody.html("");

  // Loop through each object in ufoData
  // and append rows and cells for each value
  reviewData.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// Use a date form in your HTML document and write JavaScript 
// code that will listen for events and search through the 
// `date/time` column to find rows that match user input.

function handleClick() {

  // prevent refresh 
  d3.event.preventDefault();

  // Get the merchant name value from the filter
  var merc = d3.select("#Merchant").property("value");
  
  // Get the result type value from the filter
  var answer = d3.select("#Results").property("value");

  let filteredData = reviewData;

  // Check to see if a merchant name was entered and filter the
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