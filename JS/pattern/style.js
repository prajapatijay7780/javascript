function btn1() {
    lbl1.innerHTML = ""
    for (let i = 1; i <= 5; i++) {
        
        for(let j=1; j <=5; j++){
            lbl1.innerHTML += "*"+"&nbsp;&nbsp&nbsp";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn2() {
    lbl1.innerHTML = ""
    for (let i = 1; i <= 5; i++) {
        for(let j=1; j <=5; j++){
            lbl1.innerHTML += i +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn3() {
    lbl1.innerHTML = ""
    for (let i = 1; i <= 5; i++) {
        for(let j=1; j <=5; j++){
            lbl1.innerHTML += j +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn4() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let j=1; j <5; j++){
            lbl1.innerHTML += i*j +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn5() {
    lbl1.innerHTML = ""
    for (let i = 4; i>0; i--) {
        for(let j=1; j <5; j++){
            lbl1.innerHTML += i*j +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn6() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let j=1; j <i+1; j++){
            lbl1.innerHTML += "*" +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn7() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let j=1; j <i+1; j++){
            lbl1.innerHTML += i +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn8() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let j=1; j <i+1; j++){
            lbl1.innerHTML += j +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn9() {
    lbl1.innerHTML = ""
    for (let i = 1; i <5; i++) {
        for(let j=1; j <i+1; j++){
            lbl1.innerHTML += i*j +"&nbsp&nbsp&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn10() {
    lbl1.innerHTML = ""
    var a=1
    for (let i = 1; i < 5; i++) {
        for(let j=1; j <i+1; j++){
            lbl1.innerHTML += a +"&nbsp&nbsp&nbsp;";
            a+=1
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn11() {
    lbl2.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        for(let j = i ; j > 0; j--){
            lbl2.innerHTML += j + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}

function btn12() {
    lbl2.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        for(let j = 4; j > 4 - i; j--){
            lbl2.innerHTML += j + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn13() {
    lbl2.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let j=5-i; j < 5; j++){
            lbl2.innerHTML += j +"&nbsp&nbsp&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn14() {
    lbl2.innerHTML = ""
    for (let i = 5; i > 0; i--) {
        for(let j = 0; j < i - 1; j++){
            lbl2.innerHTML += "*" +"&nbsp&nbsp&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn15() {
    lbl2.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        for(let j = 5 - i; j > 0; j--){
            lbl2.innerHTML += i + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn16() {
    lbl2.innerHTML = "";
    for (let i = 5; i > 1 ; i--) {
        for(let j = 1; j < i; j++){
            lbl2.innerHTML += j + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn17() {
    lbl2.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        for(let j = 1; j < 6 - i ; j++){
            lbl2.innerHTML += i*j + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn18() {
    lbl2.innerHTML = "";
    for (let i = 4; i > 0; i--) {
        for(let j = 0 ; j < i; j++){
            lbl2.innerHTML += i + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn19() {
    lbl2.innerHTML = "";
    for (let i = 5; i > 0; i--) {
        for(let j = 0; j < i-1; j--){
            lbl2.innerHTML += i-1*j-1 + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn20() {
    lbl2.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        for(let j = 0 ; j < 5-i ; j++){
            lbl2.innerHTML += i+j + "&nbsp;&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn21() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        
        for(let s=1; s < 5-i; s++){
           lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        for(let j=1; j < i + 1; j++){
            lbl1.innerHTML += "*"+"&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn22() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let s=1; s < 5-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j=1; j <i+1; j++){
            lbl1.innerHTML += i +"&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn23() {
    lbl1.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        for(let s=1; s < 5-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 5-i ; j < 5; j++){
            lbl1.innerHTML += j + "&nbsp;&nbsp;";
        }
       
        lbl1.innerHTML += "<br>";
    }
}
function btn24() {
    lbl1.innerHTML = "";
    for (let i = 1; i < 5; i++) {
        for(let s=1; s < 5-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 4; j > 4 - i; j--){
            lbl1.innerHTML += j + "&nbsp;&nbsp;";
        }
       
        lbl1.innerHTML += "<br>";
    }
}
function btn25() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let s=1; s < 5-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j=i ; j > 0; j--){
            lbl1.innerHTML += j +"&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn26() {
    lbl1.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let s=1; s < 5-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j=1; j <i+1; j++){
            lbl1.innerHTML += j +"&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn27() {
    lbl1.innerHTML = ""
    for (let i = 5; i > 0; i--) {
        for(let s=1; s < 6-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 0; j < i - 1; j++){
            lbl1.innerHTML += "*" +"&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn28() {
    lbl1.innerHTML = "";
for (let i = 4; i > 0; i--) {
    for (let s = 1; s < 6-i; s++) {
        lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    for (let j = 5 - i; j < 5; j++) {
        lbl1.innerHTML += j  + "&nbsp;&nbsp;";
    }
    lbl1.innerHTML += "<br>";
}

}
function btn29() {
    lbl1.innerHTML = ""
    for (let i = 4; i > 0; i--) {
        for(let s=1; s < 6-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1 ; j < i+1; j++){
            lbl1.innerHTML += i +"&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn30() {
    lbl1.innerHTML = ""
    for (let i = 5; i > 1; i--) {
        for(let s=1; s < 6-i; s++){
            lbl1.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i ; j++){
            lbl1.innerHTML += j +"&nbsp;&nbsp;";
        }
        lbl1.innerHTML +="<br>";
    }
}
function btn31() {
    lbl2.innerHTML = "";
    for (let i = 4 ; i > 0; i--) {
        for(let s=1; s < 6-i; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = i ; j > 0; j--){
            lbl2.innerHTML += j + "&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}

function btn32() {
    lbl2.innerHTML = "";
    var a=1;
    for (let i = 4; i > 0; i--) {
        for(let s=1; s < 6-i; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = i; j > 0 ; j--){
            lbl2.innerHTML += a + "&nbsp;&nbsp;";
            a+=1
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn33() {
    lbl2.innerHTML = "";
    for (let i = 4; i > 0; i--) {
        for(let s=1; s < 6-i; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 4; j > 4 - i; j--){
            lbl2.innerHTML += j + "&nbsp;&nbsp;";
        }
        lbl2.innerHTML += "<br>";
    }
}
function btn34() {
    lbl2.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp*" +"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn35() {
    lbl2.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp;"+i +"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn36() {
    lbl2.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp;"+ j +"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn37() {
    lbl2.innerHTML = ""
    for (let i = 4; i > 0 ; i--) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp;*"+"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn38() {
    lbl2.innerHTML = ""
    for (let i = 4; i > 0 ; i--) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp;"+i+"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn39() {
    lbl2.innerHTML = ""
    for (let i = 4; i > 0 ; i--) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp;"+j+"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
function btn40() {
    lbl2.innerHTML = ""
    for (let i = 1; i < 5; i++) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp*" +"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
    for (let i = 3; i > 0 ; i--) {
        for(let s= i; s < 4; s++){
            lbl2.innerHTML +="&nbsp;&nbsp;&nbsp;"
         }
        for(let j = 1; j < i + 1; j++){
            lbl2.innerHTML += "&nbsp;*"+"&nbsp;&nbsp;";
        }
        lbl2.innerHTML +="<br>";
    }
}
