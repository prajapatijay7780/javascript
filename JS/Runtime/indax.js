 window.onload = function () {
     var t1 = document.createElement("input");
     t1.type = "text";
     document.getElementById("box").appendChild(t1);

     var b1 = document.createElement("input");
     b1.type = "button"
     b1.value = "clic-khere";


     b1.onclick = function() {
         lbl1.innerHTML = t1.value ;
     };


     document.getElementById("box").appendChild(b1);
     
     var br1 =document.createElement("br");
     document.getElementById("box").appendChild(br1);
    
     var lbl1 = document.createElement("label");
     lbl1.innerHTML = "label";
     document.getElementById("box").appendChild(lbl1);

// join multiple box




    var t2 = document.createElement("input");
    t2.type = "text";
    document.getElementById("joinbox").appendChild(t2);

    var t3 = document.createElement("input");
    t3.type = "text";
    document.getElementById("joinbox").appendChild(t3);

    var t4 = document.createElement("input");
    t4.type = "text";
    document.getElementById("joinbox").appendChild(t4);

    var b2 = document.createElement("input");
    b2.type = "button"
    b2.value = "clic-khere";

    
    b2.onclick = function() {
        lbl2.innerHTML = t2.value + " " + t3.value + " " +t4.value;
    };


    document.getElementById("joinbox").appendChild(b2);
     
    var br1 =document.createElement("br");
    document.getElementById("joinbox").appendChild(br1);
    
    var lbl1 = document.createElement("label");
    lbl2.innerHTML = "label";
    document.getElementById("joinbox").appendChild(lbl1);

  /// radio box

  

}
