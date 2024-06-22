window.onload = function() {
    var t1 = document.createElement("select");
    document.getElementById("box").appendChild(t1);
    for (let i = 1; i < 32; i++) {
        var date = document.createElement("option");
        date.text = i;
        date.value = i;
        t1.appendChild(date);
    }


    var t2 = document.createElement("select");
    document.getElementById("box").appendChild(t2);
    for (let i = 1; i < 13; i++) {
        var month = document.createElement("option");
        month.text = i;
        month.value = i;
        t2.appendChild(month);
    }

    var t3=document.createElement("select");
    document.getElementById("box").appendChild(t3)
    for(let i = 1995; i < 2025; i++){
        var year = document.createElement("option");
         year.text = i;
         year.value = i ;
         t3.appendChild(year);
    }

    var btn1 = document.createElement("input");
    btn1.type = "button";
    btn1.value = "click-here"
    document.getElementById("box").appendChild(btn1);

    var lbl1 = document.createElement("label");
    lbl1.type = "label";
    lbl1.innerHTML = "<br><br><br>click-here"
    document.getElementById("box").appendChild(lbl1);

    btn1.onclick = function(){
        lbl1.innerHTML += "<br><br>Select date :- &nbsp;" + t1.value + "/" + t2.value + "/" + t3.value ;
    }
}
