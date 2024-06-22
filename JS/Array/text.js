function btn1(){
    lbl1.innerHTML=""
    var a=[];

    a[0]=txt1.value;
    a[1]=txt2.value;
    a[2]=txt3.value;
    a[3]=txt4.value;
    a[4]=txt5.value;
    a[5]=txt6.value;
    for (let i = 0; i < a.length; i++) {
        lbl1.innerHTML+=a[i]+",";
    }

}
function btn2(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=txt1.value;
    a[1]=txt2.value;
    a[2]=txt3.value;
    a[3]=txt4.value;
    a[4]=txt5.value;
    a[5]=txt6.value;
    var sum=0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + parseInt(a[i]);
        lbl1.innerHTML += a[i];
        if(i < a.length - 1

        )
        {
            lbl1.innerHTML += "+";
        }
    }
    lbl1.innerHTML += "=" + sum;
}
function btn3(){
    lbl1.innerHTML=""
    var a=[]
    var max=0;
    a[0]=parseInt(txt1.value);
    a[1]=parseInt(txt2.value);
    a[2]=parseInt(txt3.value);
    a[3]=parseInt(txt4.value);
    a[4]=parseInt(txt5.value);
    a[5]=parseInt(txt6.value);
   min=a[0]
    for (let i = 0; i < a.length; i++) {
        lbl1.innerHTML += a[i]+",";
        if(a[i] > max)
        { 
            max = a[i];
        }
        if(a[i] < min)
            { 
                min = a[i]
            }
    }
         
    lbl1.innerHTML += "<br>Maximum number =" + max + "<br>minimum number =" + min ;
}
function btn4(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=txt1.value;
    a[1]=txt2.value;
    a[2]=txt3.value;
    a[3]=txt4.value;
    a[4]=txt5.value;
    a[5]=txt6.value;
    var evennumber = []
    var oddnumber = []
    for(let i=0; i < a.length; i++){
        
        lbl1.innerHTML +=a[i]+",";
        var x=a[i]
        if(x % 2 == 0){
            evennumber.push(a[i]);
        }
        else{
            oddnumber.push(a[i]);
        }
    }
    lbl1.innerHTML += "<br>Evennumber =" + evennumber.join(",") +"<br>Oddnumber =" + oddnumber.join(",")
}
function btn5(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=parseInt(txt1.value);
    a[1]=parseInt(txt2.value);
    a[2]=parseInt(txt3.value);
    a[3]=parseInt(txt4.value);
    a[4]=parseInt(txt5.value);
    a[5]=parseInt(txt6.value);
    for(let i=0; i < a.length; i++){
        for(let j=0; j < a.length - 1 - i; j++){
            if(a[j]>a[j+1]){
                 var num = a[j];
                      a[j] = a[j+1];
                      a[j+1] = num;
               }
        }
    }
    lbl1.innerHTML += "<br>Assendingnumber =" + a.join(",");
}
function btn6(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=parseInt(txt1.value);
    a[1]=parseInt(txt2.value);
    a[2]=parseInt(txt3.value);
    a[3]=parseInt(txt4.value);
    a[4]=parseInt(txt5.value);
    a[5]=parseInt(txt6.value);
    for(let i=0; i < a.length; i++){
        for(let j=0; j < a.length - 1 - i; j++){
            if(a[j]<a[j+1]){
                 var num = a[j];
                      a[j] = a[j+1];
                      a[j+1] = num;
               }
        }
    }
    lbl1.innerHTML += "<br>Descedingnumber =" + a.join(",");
}
function btn7(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=parseInt(txt1.value);
    a[1]=parseInt(txt2.value);
    a[2]=parseInt(txt3.value);
    a[3]=parseInt(txt4.value);
    a[4]=parseInt(txt5.value);
    a[5]=parseInt(txt6.value);
    for(let i=0; i < a.length; i++){
              for (let j=i; j < a.length; j++){
                if(a[i]==0){
                  var  num=a[i]
                     a[i]=a[j]
                     a[j]=num
                }
              }

    }
    lbl1.innerHTML += "<br>Supress zero =" + a.join(",");
}
function btn8(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=parseInt(txt1.value);
    a[1]=parseInt(txt2.value);
    a[2]=parseInt(txt3.value);
    a[3]=parseInt(txt4.value);
    a[4]=parseInt(txt5.value);
    a[5]=parseInt(txt6.value);
    for(let i=0; i < a.length; i++){
              for (let j=i; j < a.length; j++){
                if(a[i] > 0){
                  var  num=a[i]
                     a[i]=a[j]
                     a[j]=num
                }
              }

    }
    lbl1.innerHTML += "<br>Supress positive =" + a.join(",");
}
function btn9(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=parseInt(txt1.value);
    a[1]=parseInt(txt2.value);
    a[2]=parseInt(txt3.value);
    a[3]=parseInt(txt4.value);
    a[4]=parseInt(txt5.value);
    a[5]=parseInt(txt6.value);
    for(let i=0; i < a.length; i++){
              for (let j=i; j < a.length; j++){
                if(a[i] < 0){
                  var  num=a[i]
                     a[i]=a[j]
                     a[j]=num
                }
              }

    }
    lbl1.innerHTML += "<br>Supress positive =" + a.join(",");
}
function btn10(){
    lbl1.innerHTML=""
    var a=[]
    a[0]=parseInt(txt1.value);
    a[1]=parseInt(txt2.value);
    a[2]=parseInt(txt3.value);
    a[3]=parseInt(txt4.value);
    a[4]=parseInt(txt5.value);
    a[5]=parseInt(txt6.value);
    var newAr = []
    var l=0
    for(let i=0; i < a.length; i++){
        var k=0
              for (let j = 0; j < newAr.length; j++){
                if(newAr[j] == a[i]){
                  k=1
                  break;
                } 
                
             }
             if(k==0){
                newAr[l]=a[i]
                l = l + 1 ;
            }
    }
    lbl1.innerHTML += "<br> main array =" + a.join(",") + "<br> new array =" + newAr.join(",");
}