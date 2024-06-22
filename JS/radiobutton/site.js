// for single MCQ
function btn1(){
    if (rdo1.checked == true) {
        lbl1.innerHTML = rdo1.value + " &nbsp is Wrong answer" ;
    }
    else if(rdo2.checked==true){
        lbl1.innerHTML = rdo2.value + " &nbsp is Write answer";
    }
    else if(rdo3.checked==true){
        lbl1.innerHTML = rdo3.value+ " &nbsp is Wrong answer";
    }
    else if(rdo4.checked==true){
        lbl1.innerHTML = rdo4.value+ " &nbsp is Wrong answer";
    }
    else{
        lbl1.innerHTML="select any one answer."
    }
}
// ONLINE MCQ
function btn2(){
att=0
right=0
wrong=0
skip=0
//1
    if (rdo5.checked==false) {
        wrong++;
        att++;
    }
    else if(rdo6.checked==true){
         right++;
         att++;
    }
    else if(rdo7.checked==false){
        wrong++;
        att++
    }
    else if(rdo8.checked==false){
        wrong++;
        att++;
    }
    else{
        skip++;
    }
//2
     if (rdo9.checked==true) {
         right++;
         att++;
     }
     else if(rdo10.checked==false){
         wrong++;
          att++;
     }
     else if(rdo11.checked==false){
         wrong++;
         att++;
     }
     else if(rdo12.checked==false){
         wrong++;
         att++;
     }
     else{
         skip++
     }
//3    
     if (rdo13.checked==true) {
         right++;
         att++
     }
     else if(rdo14.checked==false){
        wrong++;
        att++;
     }
     else if(rdo15.checked==false){
        wrong++;
        att++;
     }
     else if(rdo16.checked==false){
        wrong++;
         att++;
     }
     else{
         skip++
     }
//4    
     if (rdo17.checked==false) {
        wrong++;
        att++;
     }
     else if(rdo18.checked==false){
        wrong++;
        att++;
     }
     else if(rdo19.checked==false){
        wrong++;
        att++;
     }
     else if(rdo20.checked==true){
         right++;
         att++;
     }
     else{
         skip++;
     }
//5    
     if (rdo21.checked==false) {
        wrong++;
        att++;
     }
     else if(rdo22.checked==true){
          right++;
          att++;
     }
     else if(rdo23.checked==false){
        wrong++;
        att++;
     }
     else if(rdo24.checked==false){
         wrong++;
         att++;
     }
     else{
         skip++;
     }
    lbl2.innerHTML = "Attend :" + parseInt(att);
    lbl3.innerHTML = "Unattend :" + parseInt(skip);
    lbl4.innerHTML = "Wrong :" + parseInt( wrong);
    lbl5.innerHTML = "Right :" + parseInt(right);
    lbl6.innerHTML = "Result Marks :" +parseInt( 2*right);
}
