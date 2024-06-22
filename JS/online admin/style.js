var check= document.getElementById("check")
var rdog=document.getElementById("rdog")

window.onload=function(){
   rdog.style.display="none"
   check.style.display="none"
}

function btn1(){  
   if(select1.value=="Single"){
      
      rdog.style.display="block"
      
      check.style.display="none"
   }
   else if(select1.value=="Multiple"){
      
      rdog.style.display="none"
      
      check.style.display="block"
   }
}

function btn2(){
     if( rdo1.checked==true){
        lbl1.innerHTML = rdo1.value
     }
    else if( rdo2.checked==true){
        lbl1.innerHTML = rdo2.value
     }
     else if( rdo3.checked==true){
        lbl1.innerHTML = rdo3.value
     }
     else if( rdo4.checked==true){
        lbl1.innerHTML = rdo4.value
     }
     else{
        lbl1.innerHTML = "Please select any option"
     }

}
function btn3(){
    if( chk1.checked==true && chk2.checked==true && chk3.checked==true && chk4.checked==true){
      lbl2.innerHTML = chk4.value + "||" +chk3.value +  "||" + chk2.value+"||"+ chk1.value;
   }
   else if( chk1.checked==true && chk2.checked==true && chk3.checked==true){
      lbl2.innerHTML = chk1.value +  "||" + chk2.value +"||"+ chk3.value;
   }
  else  if( chk1.checked==true && chk3.checked==true && chk4.checked==true){
      lbl2.innerHTML= chk1.value +  "||" + chk3.value +"||"+ chk4.value;
   }
   else if( chk1.checked==true && chk2.checked==true && chk4.checked==true){
      lbl2.innerHTML = chk1.value +  "||" + chk2.value +"||"+ chk3.value;
   }
   else if( chk2.checked==true && chk3.checked==true && chk4.checked==true){
      lbl2.innerHTML = chk2.value +  "||" + chk3.value +"||"+ chk3.value;
   }
   else if( chk1.checked==true && chk2.checked==true ){
      lbl2.innerHTML = chk1.value+"||"+ chk2.value;
   }
   else if( chk1.checked==true && chk3.checked==true ){
      lbl2.innerHTML = chk1.value+"||"+ chk3.value;
   }
   else if( chk1.checked==true && chk4.checked==true ){
      lbl2.innerHTML = chk1.value+"||"+ chk4.value;
   }
   else if( chk2.checked==true && chk3.checked==true ){
      lbl2.innerHTML = chk2.value+"||"+ chk3.value;
   }
  else  if( chk2.checked==true && chk4.checked==true ){
      lbl2.innerHTML = chk2.value+"||"+ chk4.value;
   }     
  else if( chk3.checked==true && chk4.checked==true ){
      lbl2.innerHTML = chk3.value+"||"+ chk4.value;
   }
    else if( chk1.checked==true){
        lbl2.innerHTML = chk1.value;
     }
    else if(chk2.checked==true){
        lbl2.innerHTML = chk2.value;
     }
    else if(chk3.checked==true){
        lbl2.innerHTML = chk3.value;
     }
    else if(chk4.checked==true){
        lbl2.innerHTML = chk4.value;
     }
   
    //  ok
     
     else{
        lbl2.innerHTML = "Please select any option"
     }

}