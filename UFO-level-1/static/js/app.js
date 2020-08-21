// from data.js
var tableData = data;


//select the form 
var tbody = d3.select('tbody');

//add data
function displayTdata(data) {
    tbody.text("")
    data.forEach(function (ufos) {
        new_tr = tbody.append("tr")
        Object.entries(ufos).forEach(function ([key, value]) {
            new_td = new_tr.append("td").text(value)
        })


    })
}

displayTdata(tableData)
console.log("after display Tdata");

//EventListener for filtered data

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");



function runEnter() {
    console.log("in RunEnter");
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);
    console.log(tableData);

    var filtered_table = tableData.filter(ufos => ufos.datetime === inputValue)

    console.log(filtered_table);
    displayTdata(filtered_table)
}

// Create event handlers 
button.on("click", runEnter);
// form.on("Filter Table", runEnter);