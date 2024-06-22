function btn1() {
    var  t1 = txt1.value;

    if (t1 != "") {

        var selectList = document.getElementById("myList");

        var option = document.createElement("option");

        option.text = t1;
        option.value = t1; 

        selectList.appendChild(option);

        txt1.value = "";
    } 
}



function btn2() {
    
    var t2 = myList.value;

    if (t2 != "") {
        var listvalue = document.getElementById("newList");

        var opc = document.createElement("option");
        opc.text = t2;
        opc.value = t2;

        listvalue.appendChild(opc);

        myList.value = "";
    }
}




function btn3() {
    var selectList = document.getElementById("myList");
    var newList = document.getElementById("newList");


    var options = selectList.options;
    for (var i = 0; i < options.length; i++) {
        var text = options[i].text;
        var value = options[i].value;

        var newoption = document.createElement("option");
        newoption.text = text;
        newoption.value = value;

        newList.appendChild(newoption);
    }

     selectList.innerHTML = "";
}
  

function btn4(){
    var newList = document.getElementById("newList");

    var selectList = document.getElementById("myList");
    

    var options = newList.options;
    for (var i = 0; i < options.length; i++) {
        var text = options[i].text;
        var value = options[i].value;

        var newoption = document.createElement("option");
        newoption.text = text;
        newoption.value = value;

        selectList.appendChild(newoption);
    }

    newList.innerHTML = "";

}
function btn5(){
     var t5 = newList.value ;
     if(t5 !=""){
        var newlistvalue = document.getElementById("myList");
        var opcreturn = document.createElement("option");
        opcreturn.text = t5;
        opcreturn.value = t5;

        newlistvalue.appendChild(opcreturn);
        newList.value = " ";
     }

}
