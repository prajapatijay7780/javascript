function btn1Click()
{
    lbl1.innerHTML = txt1.value;
}
function btn2Click()
{
    lbl2.innerHTML = txt2.value + " " + txt3.value
}
function btn3Click()
{
    lbl3.innerHTML = txt4.value + " " + txt5.value + " " + txt6.value
}
function btn4Click()
{
lbl4.innerHTML = parseInt(num1.value) + parseInt(num2.value) ;
}
function btn5Click()
{
    lbl4.innerHTML = parseInt(num1.value) - parseInt(num2.value) ;
}
function btn6Click()
{
    lbl4.innerHTML = parseInt(num1.value) * parseInt(num2.value) ;
}
function btn7Click()
{
    lbl4.innerHTML = parseInt(num1.value) / parseInt(num2.value) ;
}
function btn8Click(){
    var a = parseInt(num3.value) * parseInt(num4.value) ;
    var b =(a/10) ;
    var c = a - b;
   
    lbl5.innerHTML = "Total :-" +  a ;
    lbl6.innerHTML = "Discount :-" + b ; 
    lbl7.innerHTML = "NET AMOUNT :-" + c ;
    lbl8.innerHTML="thanks "+txt7.value+" for shoping "+txt8.value;
    
}
function btn9Click(){
    var a = parseInt(num5.value) + parseInt(num6.value) + parseInt(num7.value) + parseInt(num8.value) ;
    var b = a/4 ;
    lbl9.innerHTML = "Total :-" + a;
    lbl10.innerHTML = "Per :-" + b ;
    lbl11.innerHTML = "See your result"
}