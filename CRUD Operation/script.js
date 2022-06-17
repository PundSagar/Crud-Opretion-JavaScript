var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);

    }
    else{
       updateRecord(formData);
    }
    resetForm();

}
function readFormData(){
    var formData={};
    formData["roll"] = document.getElementById("roll").value;
    formData["name"] = document.getElementById("name").value;
    formData["div"] = document.getElementById("div").value;
    formData["mark"] = document.getElementById("mark").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);

    var cell1 = newrow.insertCell(0);
        cell1.innerHTML = data.roll;

    var cell2 = newrow.insertCell(1);
        cell2.innerHTML = data.name;

    var cell3 = newrow.insertCell(2);
        cell3.innerHTML = data.div;

    var cell4 = newrow.insertCell(3);
        cell4.innerHTML = data.mark;

    var cell5 = newrow.insertCell(4);
        cell5 .innerHTML ="<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>"

}

// edit data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("roll").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("div").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mark").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.roll;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.div;
    selectedRow.cells[3].innerHTML = formData.mark;

}

// Delete Records
function onDelete(td){
    if(confirm("Do you want to Delete this Record")){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);

        resetForm();
    }
}

// Reset the Data

function resetForm(){
    document.getElementById('roll').value='';
    document.getElementById('name').value='';
    document.getElementById('div').value='';
    document.getElementById('mark').value='';
}