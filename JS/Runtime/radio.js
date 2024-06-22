window.onload = function () {
    var t1 = document.createElement("input");
    t1.type = "radio";
    t1.value = "male";
    t1.id = "rdo1";
    t1.name = "rdogroup"
    document.getElementById("radiobox").appendChild(t1);
    var male=document.createElement("label")
    male.innerHTML="male"
    document.getElementById("radiobox").appendChild(male)


    var t2 = document.createElement("input");
    t2.type = "radio";
    t2.value = "female";
    t2.id = "rdo2"
    t2.name = "rdogroup"
    document.getElementById("radiobox").appendChild(t2);
    var female=document.createElement("label")
    female.innerHTML="female"
    document.getElementById("radiobox").appendChild(female)



    var br1 = document.createElement("br");
    document.getElementById("radiobox").appendChild(br1);

    var b1 = document.createElement("input");
    b1.type = "button"
    b1.value = "clic-khere";


    b1.onclick = function () {
        if(rdo1.checked == true){
            lbl1.innerHTML ="<br>" + t1.value ;
        }
        else if( rdo2.checked == true){
            lbl1.innerHTML = "<br>" + t2.value ;
        }
        else{
            lbl1.innerHTML = "<br>please select any 1 opction"
        }
    };


    document.getElementById("radiobox").appendChild(b1);

    var br1 = document.createElement("br");
    document.getElementById("radiobox").appendChild(br1);

    var lbl1 = document.createElement("label");
    lbl1.innerHTML = "label";
    document.getElementById("radiobox").appendChild(lbl1);



    var br1 = document.createElement("br");
    document.getElementById("radiobox").appendChild(br1);
}