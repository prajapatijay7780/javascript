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
    