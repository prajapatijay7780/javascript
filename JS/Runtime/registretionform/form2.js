var count = 1;
window.onload = function () {
    //   tabledata.style.display = "none";
    // btn1.style.display = "block";
    btn2.style.display = "none";

}

function btn1() {
    //    tabledata.style.display = "block";


    var name = txt1.value;
    var email = txt2.value;
    var city = txt3.value;

    var gender = " ";
    if (rdo1.checked == true) {
        gender += rdo1.value;
    }
    else if (rdo2.checked == true) {
        gender += rdo2.value;
    }

    var address = txt4.value;

    var date = txt5.value;


    CreateRow(count, name, email, city, gender, address, date);
    count++;

    txt1.value = "  ";
    txt2.value = "  ";
    txt3.value = "  ";
    txt4.value = " ";
    txt5.value = " ";
}
function btn2() {
    var name = txt1.value;
    var email = txt2.value;
    var city = txt3.value;

    var gender = " ";
    if (rdo1.checked == true) {
        gender += rdo1.value;
    }
    else if (rdo2.checked == true) {
        gender += rdo2.value;
    }

    var address = txt4.value;

    var date = txt5.value;

    var RowPos = document.getElementById("btn2").getAttribute("data-pos");
    var ColsOfRow = document.querySelectorAll("#tbdTag>tr:nth-child("+RowPos+")>td");
    ColsOfRow[1].innerHTML = name;
    ColsOfRow[2].innerHTML = email;
    ColsOfRow[3].innerHTML = city;
    ColsOfRow[4].innerHTML = gender;
    ColsOfRow[5].innerHTML = address;
    ColsOfRow[6].innerHTML = date;

 
    txt1.value = "  ";
    txt2.value = "  ";
    txt3.value = "  ";
    txt4.value = " ";
    txt5.value = " ";
    console.log(ColsOfRow)

}

function CreateRow(count,name, email, city, gender, address, date){

    var tr1 = document.createElement("tr");
    document.getElementById("box").appendChild(tr1);

    var SrNoclm = document.createElement("td");
    SrNoclm.innerHTML = count++;
    tr1.appendChild(SrNoclm);

    var nameclm = document.createElement("td");
    nameclm.innerHTML = name;
    tr1.appendChild(nameclm);

    var emailclm = document.createElement("td");
    emailclm.innerHTML = email;
    tr1.appendChild(emailclm);

    var cityclm = document.createElement("td");
    cityclm.innerHTML = city;
    tr1.appendChild(cityclm);

    var genderclm = document.createElement("td");
    if (rdo1.checked == true) {
        genderclm.innerHTML += gender;
    }
    else if (rdo2.checked == true) {
        genderclm.innerHTML += gender;
    }
    tr1.appendChild(genderclm);

    var addressclm = document.createElement("td");
    addressclm.innerHTML = address;
    tr1.appendChild(addressclm);

    var dateclm = document.createElement("td");
    dateclm.innerHTML = date;
    tr1.appendChild(dateclm);

    var edit = document.createElement("td");
    tr1.appendChild(edit);

    var dlt = document.createElement("td");
    tr1.appendChild(dlt);

    var editbtn = document.createElement("input");
    editbtn.type = "button";
    editbtn.value = "Edit";
    editbtn.id = "editbtn"
    edit.appendChild(editbtn);

    editbtn.onclick = function () {

        txt1.value = nameclm.innerHTML;
        txt2.value = emailclm.innerHTML;
        txt3.value = cityclm.innerHTML;
        if (rdo1.checked == true) {
            rdo1.value = genderclm.innerHTML;
        }
        else if (rdo2.checked == true) {
            rdo2.value = genderclm.innerHTML;
        }
        txt4.value = addressclm.innerHTML;
        txt5.value = dateclm.innerHTML;

        document.getElementById("btn2").setAttribute("data-pos",No);
    }

    var dltbtn = document.createElement("input");
    dltbtn.type = "button";
    dltbtn.value = "Delete";
    dlt.appendChild(dltbtn);
    dlt.appendChild(dltbtn);
    dltbtn.onclick = function () {
        document.getElementById("box").removeChild(tr1);
        var Totalvalue = document.querySelectorAll("#box>tr>td:nth-child(1)");
        count = 1;
        for (let i = 0; i < Totalvalue.length; i++) {
            var FirstTdCol = Totalvalue[i];
            FirstTdCol.innerHTML = i + 1;
            count++;
        }
    }
   




}


