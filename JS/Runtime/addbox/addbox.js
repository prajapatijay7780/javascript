var count = 1;
function btn1(){
      var lbl1 = document.createElement("label");
      lbl1.innerHTML=count++;
      lbl1.value = "0";
      document.getElementById("box").appendChild(lbl1);

       var t1 = document.createElement("input");
       t1.type = "text";
       document.getElementById("box").appendChild(t1);

       var t2 = document.createElement("input");
       t2.type = "text";
       document.getElementById("box").appendChild(t2);

       var btn1 = document.createElement("input");
       btn1.type = "button";
       btn1.value = "remove"
       document.getElementById("box").appendChild(btn1)

         for (let i= 0; i < 2; i++){
    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);
    }

    btn1.onclick = function(){  
        t1.remove();
        t2.remove();
        btn1.remove();
        lbl1.innerHTML= " ";

}
}