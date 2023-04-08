function addRows() {
    // get the table element by ID
    let table = document.getElementById("myTable");
  
    // create two new rows
    let newRow1 = table.insertRow();
    let newRow2 = table.insertRow();
  
    // create two new cells in each row
    let newCell1_1 = newRow1.insertCell();
    let newCell1_2 = newRow1.insertCell();
    let newCell2_1 = newRow2.insertCell();
    let newCell2_2 = newRow2.insertCell();
  
    // set the text content of each cell
    newCell1_1.textContent = "Row 3, Cell 1";
    newCell1_2.textContent = "Row 3, Cell 2";
    newCell2_1.textContent = "Row 4, Cell 1";
    newCell2_2.textContent = "Row 4, Cell 2";
  }

  addRows();
  