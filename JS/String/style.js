function btn1(){
    
    var name = txt1.value ;
    lbl1.innerHTML = name.length ;
    lbl2.innerHTML = " "
    for( let i=0; i < name.length; i++){
        const  element = name[i] ;
        lbl2.innerHTML += element + " ";
    }

}
function btn2(){
    var name = txt1.value ;
    var wordcount = 1 ;
    lbl1.innerHTML = name.length ;
    lbl2.innerHTML = " ";
    for(let i=0; i<name.length; i++){
        if(name[i] == " "){
            wordcount += 1 ;
        }
    
    }
    lbl2.innerHTML ="Total-word = " + wordcount ;
}
function btn3(){
    var name = txt1.value ;
    var vovelcount = 0 ;
    lbl1.innerHTML = name.length ;
    lbl2.innerHTML = " ";
    for(let i=0; i<name.length; i++){
        if(name[i] == "a" || name[i] == "e" || name[i] == "i"||name[i] == "o"||name[i] == "u" ||name[i] == "A" || name[i] == "E" || name[i] == "I"||name[i] == "O"||name[i] == "U"){
          vovelcount += 1 ;
        }
    
    }
    lbl2.innerHTML ="vovel char = " + vovelcount ;
}
function btn4(){
    var name =txt1.value;
    var name2 =txt2.value;
    lbl1.innerHTML = name.length;
    lbl2.innerHTML = name2.length;
    for(let i=0; i<name.length; i++){
            var postcount = name[i];
            if(postcount == name2){
                lbl3.innerHTML  += name2 + " = " + i + "<br>";
            }
             }
}
function btn5() {
    var name = txt1.value;  
    var oldchar = txt2.value;
    var newchar = txt3.value;
    var replace = ""; 
    lbl1.innerHTML = name.length;
    for (let i = 0; i < name.length; i++) {
        var a = name[i];
        if (a == oldchar) {
            replace += newchar; 
        } else {
            replace += a; 
        }
    }
    lbl2.innerHTML = replace.length;
    lbl3.innerHTML = replace;
}
function btn6(){
    lbl1.innerHTML = "" ;
    lbl2.innerHTML = "" ;
    var name = txt1.value ;
    var char = txt2.value ;
    lbl1.innerHTML = name.length;
    for(let i = 0; i < name.length; i++){
        if(name[i] != char){
             lbl2.innerHTML += name[i] 
        }
        
    }
}
function btn7(){
        lbl1.innerHTML = "";
        lbl2.innerHTML = "";
        lbl3.innerHTML = "";
    
        var count = 0;
        var name = txt1.value;
        lbl1.innerHTML = "Original length = " + name.length;
        for(let i = 0; i < name.length; i++){
            if(name[i] === " "){
                count++;
            } else {
                break; 
            }
        }
    
        var trimName = name.substring(count); 
        lbl2.innerHTML = "Trimmed name: " + trimName;
    
        lbl3.innerHTML = "After trim length = " + trimName.length;
    }
    

function btn8(){
        lbl1.innerHTML = "";
        lbl2.innerHTML = "";
        lbl3.innerHTML = "";
    
        var count = 0;
        var name = txt1.value;
        lbl1.innerHTML = "Original length = " + name.length;
        for(let i = name.length-1; i >= 0; i--){
            if(name[i] === " "){
                count++;
            } else {
                break; 
            }
        }
    
        var trimName = name.substring(0,name.length-count); 
        lbl2.innerHTML = "Trimmed name: " + trimName;
    
        lbl3.innerHTML = "After trim length = " + trimName.length;
    }
function btn9(){
        lbl1.innerHTML = "";
        lbl2.innerHTML = "";
        lbl3.innerHTML = "";
    
        var count = 0;
        var name = txt1.value;
        lbl1.innerHTML = "Original length = " + name.length;
        for(let i = 0; i < name.length; i++){
            if(name[i] === " "){
                count++;
            } else {
                break; 
            }
        }
        var trimName = name.substring(count); 
        lbl2.innerHTML = "Trimmed name: " + trimName;
        for(let i = name.length-1; i >= 0; i--){
            if(name[i] === " "){
                count++;
            } else {
                break; 
            }
        }
    
        var trimName = name.substring(0,name.length-count); 

        lbl3.innerHTML = "After trim length = " + trimName.length;
    }
function btn10(){
    lbl1.innerHTML = " ";
    lbl2.innerHTML = " ";
    lbl3.innerHTML = " ";
    lbl4.innerHTML = " ";
    var name = txt1.value ;
    lbl1.innerHTML = name.length
    for(let i = 0; i < name.length; i++){
        lbl2.innerHTML += name[i] ;
    }
    var name = txt1.value ;
    for(let j = name.length-1; j >= 0; j--){
        lbl3.innerHTML += name[j] ;
    }
    if(lbl2.innerHTML == lbl3.innerHTML){
        lbl4.innerHTML = " given name &nbsp;" + name + " is palindrome";
    }
    else{
         lbl4.innerHTML = " given name &nbsp;'" + name + "' is not palindrome"
    }
}