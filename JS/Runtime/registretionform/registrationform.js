var count = 1;
var currentRow = null;

window.onload = function() {
    document.getElementById("btn2").style.display = "none";
}

function register() {
    var tr1 = document.createElement("tr");
    document.getElementById("box").appendChild(tr1);

    var SrNo = document.createElement("td");
    SrNo.innerHTML = count++;
    tr1.appendChild(SrNo);

    var name = document.createElement("td");
    name.innerHTML = document.getElementById("txt1").value;
    tr1.appendChild(name);

    var email = document.createElement("td");
    email.innerHTML = document.getElementById("txt2").value;
    tr1.appendChild(email);

    var city = document.createElement("td");
    city.innerHTML = document.getElementById("txt3").value;
    tr1.appendChild(city);

    var gender = document.createElement("td");
    if (document.getElementById("rdo1").checked) {
        gender.innerHTML = document.getElementById("rdo1").value;
    } else if (document.getElementById("rdo2").checked) {
        gender.innerHTML = document.getElementById("rdo2").value;
    }
    tr1.appendChild(gender);

    var address = document.createElement("td");
    address.innerHTML = document.getElementById("txt4").value;
    tr1.appendChild(address);

    var date = document.createElement("td");
    date.innerHTML = document.getElementById("txt5").value;
    tr1.appendChild(date);

    var edit = document.createElement("td");
    tr1.appendChild(edit);

    var dlt = document.createElement("td");
    tr1.appendChild(dlt);

    var editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    edit.appendChild(editbtn);
    editbtn.onclick = function() {
        currentRow = tr1;
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "block";

        document.getElementById("txt1").value = name.innerHTML;
        document.getElementById("txt2").value = email.innerHTML;
        document.getElementById("txt3").value = city.innerHTML;
        if (gender.innerHTML == "Male") {
            document.getElementById("rdo1").checked = true;
        } else if (gender.innerHTML == "Female") {
            document.getElementById("rdo2").checked = true;
        }
        document.getElementById("txt4").value = address.innerHTML;
        document.getElementById("txt5").value = date.innerHTML;
    }

    var dltbtn = document.createElement("input");
    dltbtn.type = "button";
    dltbtn.value = "Delete";
    dlt.appendChild(dltbtn);
    dltbtn.onclick = function() {
        document.getElementById("box").removeChild(tr1);
        var totalvalue = document.querySelectorAll("#box>tr>td:nth-child(1)");
        count = 1;
        for (let i = 0; i < totalvalue.length; i++) {
            totalvalue[i].innerHTML = i + 1;
            count++;
        }
    }

    clearinput();
}

function update() {
    if (currentRow) {
        currentRow.cells[1].innerHTML = document.getElementById("txt1").value;
        currentRow.cells[2].innerHTML = document.getElementById("txt2").value;
        currentRow.cells[3].innerHTML = document.getElementById("txt3").value;
        currentRow.cells[4].innerHTML = "";
        if (document.getElementById("rdo1").checked) {
            currentRow.cells[4].innerHTML = document.getElementById("rdo1").value;
        } else if (document.getElementById("rdo2").checked) {
            currentRow.cells[4].innerHTML = document.getElementById("rdo2").value;
        }
        currentRow.cells[5].innerHTML = document.getElementById("txt4").value;
        currentRow.cells[6].innerHTML = document.getElementById("txt5").value;

        document.getElementById("btn1").style.display = "block";
        document.getElementById("btn2").style.display = "none";
        currentRow = null;
        clearinput();
    }
}

function clearinput() {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("txt3").value = "";
    document.getElementById("txt4").value = "";
    document.getElementById("txt5").value = "";
    document.getElementById("rdo1").checked = false;
    document.getElementById("rdo2").checked = false;
}
