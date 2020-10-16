// from data.js
let tableData = data;

// YOUR CODE HERE!

let tableInfo = d3.select("tbody");

function ufoTableData(data) { 
    tableInfo.text("");

    data.forEach(function(record) {

        let row = tableInfo.append("tr");
        Object.entries(record).forEach(function([key, value]) {
            let newTable = row.append("td").text(value)	
        });
    });
};

ufoTableData(tableData)

let inputValue = d3.select("#datetime")

function filterButton(){
    d3.event.preventDefault();
    console.log(inputValue.property("value"));
    let filteredTable = tableData.filter(record => record.datetime === inputValue.property("value"));

    ufoTableData(filteredTable);
};

inputValue.on("change", filterButton);