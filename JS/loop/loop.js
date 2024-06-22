function btn1(){
    var t1=txt1.value;
    lbl1.innerHTML = ""
   for (let i=1; i<=t1;i++){
    lbl1.innerHTML += i;
   }
}
function btn2(){
    var a = parseInt(txt1.value);
    lbl1.innerHTML="even number"
    lbl2.innerHTML= ""
    lbl3.innerHTML="odd number"
    lbl4.innerHTML= ""
    for (let i=0; i <= a; i++){
        var b = i%2;
        if(b == 0){
            lbl2.innerHTML += i + "&nbsp;"
        }
        else if(b != 0){
            lbl4.innerHTML += i + "&nbsp"
        }
    }
}
function btn3(){
    var a = parseInt(txt1.value);
    var sum=0;
    lbl1.innerHTML="sum ="
    lbl2.innerHTML = ""
    for(let i = 1; i <= a; i++){
         lbl1.innerHTML += i +" + ";
        sum = sum + i ;
    }
    lbl1.innerHTML += "="+ sum;
}
function btn4(){
    var a = parseInt(txt1.value);
    var mul=1;
    lbl1.innerHTML="sum ="
    lbl2.innerHTML = ""
    for(let i = 1; i <= a; i++){
         lbl1.innerHTML += i +" X ";
        mul = mul * i ;
    }
    lbl1.innerHTML += "="+ mul;
}
function btn5(){
    lbl1.innerHTML=""
    lbl2.innerHTML=""
    var a = parseInt(txt1.value);
    var sum = 0 ;
    for(let i = 1; i < a; i++){
        var b = a % i ;
        if(b == 0){
            lbl1.innerHTML += i +" + ";
            sum = sum + i ;
        }
    }
    lbl1.innerHTML += "="+ sum;
    if(sum == a){
        lbl2.innerHTML = "perfect number"
    }
    else{
        lbl2.innerHTML = "not-perfect number"
    }
   
}
function btn6(){
    var a = parseInt(txt1.value);
    lbl1.innerHTML="prime number"
    lbl2.innerHTML= ""
    lbl3.innerHTML="notprime number"
    lbl4.innerHTML= ""
    for (let i=0; i <= a; i++){
        var b = i%2;
        if(b == 0){
            lbl2.innerHTML += i + "&nbsp;"
        }
        else if(b != 0){
            lbl4.innerHTML += i + "&nbsp"
        }
    }
}
function btn7(){
    var a = parseInt(txt1.value);
    var sum=0;
    lbl1.innerHTML = ""
    for(let i=0; i < a ; i++){
          lbl1.innerHTML += (1/(1+i*1) ) + " + "
          sum = sum + (1/i);
    }
    lbl1.innerHTML += "=" + sum;
}
function btn8(){
    lbl1.innerHTML = " "
    var a = parseInt(txt1.value);
    for (let i=1; i < a; i++){
        var b = (a % 10);
            a = parseInt(a / 10);
            lbl1.innerHTML += b ;
    }
}