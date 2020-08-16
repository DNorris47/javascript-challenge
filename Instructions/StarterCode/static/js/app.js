// from data.js
var tableData = data;

// YOUR CODE HERE!

//select the form 
var tbody = d3.select('tbody');

//add data
function displayTdata(data) {
    tbody.text("")
    data.forEach(function(ufos) {
    new_tr = tbody.append("tr")
    Object.entries(ufos).forEach(function([key,value]){
        new_td = new_tr.append("td").text(value)
    })
        

})}

displayTdata(tableData)


//EventListener for filtered data
