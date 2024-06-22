window.onload = function(){
  var t1 = document.createElement("input");
  t1.type = "number" ;
  document.getElementById("box").appendChild(t1);

  var t2 = document.createElement("input");
  t2.type = "number" ;
  document.getElementById("box").appendChild(t2);

  for (let i= 0; i < 3; i++){
    var br1 = document.createElement("br");
    document.getElementById("box").appendChild(br1);
  }

  var btn1 = document.createElement("input");
  btn1.type = "button"
  btn1.value = " + "
  document.getElementById("box").appendChild(btn1);
  

  var btn2 = document.createElement("input");
  btn2.type = "button"
  btn2.value = " - "
  document.getElementById("box").appendChild(btn2);
 
   

  var btn3 = document.createElement("input");
  btn3.type = "button"
  btn3.value = " X "
  document.getElementById("box").appendChild(btn3);
 

  var btn4 = document.createElement("input");
  btn4.type = "button"
  btn4.value = " % "
  document.getElementById("box").appendChild(btn4);
  

  var lbl1 = document.createElement("label")
  lbl1.innerHTML = " "
  document.getElementById("box").appendChild(lbl1);

  btn1.onclick = function(){
    lbl1.innerHTML += parseInt(t1.value) + parseInt(t2.value)
   }
   btn2.onclick = function(){
    lbl1.innerHTML += parseInt(t1.value) - parseInt(t2.value)
   }
   btn3.onclick = function(){
    lbl1.innerHTML += parseInt(t1.value) * parseInt(t2.value)
   }
   btn4.onclick = function(){
    lbl1.innerHTML += parseInt(t1.value) / parseInt(t2.value);
   }
}