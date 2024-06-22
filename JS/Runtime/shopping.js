var count = 1;
window.onload = function(){

}
function btn1(){
    var tr1 = document.createElement("tr");
    document.getElementById("box").appendChild(tr1);

    var SrNo = document.createElement("td");
    SrNo.innerHTML = count++ ;
    tr1.appendChild(SrNo);

    var product = document.createElement("td");
    tr1.appendChild(product);

    var price = document.createElement("td");
    tr1.appendChild(price);

    var quentity = document.createElement("td");
    tr1.appendChild(quentity);

    var total = document.createElement("td");
    total.innerHTML = "0";
    tr1.appendChild(total);

    var remove = document.createElement("td");
    tr1.appendChild(remove);

    var productname = document.createElement("input");
    productname.type = "text" ;
    productname.id = "txt1";
    product.appendChild(productname);


    var productprice = document.createElement("input");
    productprice.type = "text" ;
    productprice.id = "txt2";
    price.appendChild(productprice);


    var productquentity = document.createElement("input");
    productquentity.type = "text" ;
    productquentity.id = "txt3";
    quentity.appendChild(productquentity);

    productquentity.onkeyup = function(){
        total.innerHTML = parseInt(productprice.value) * parseInt(productquentity.value);
        grandtotal();
    }
    
    var Removebtn = document.createElement("input");
    Removebtn.type = "button";
    Removebtn.value = "Remove";
    remove.appendChild(Removebtn);
     Removebtn.onclick = function () {
         document.getElementById("box").removeChild(tr1);
        var Totalvalue = document.querySelectorAll("#box>tr>td:nth-child(1)");
        count = 1;
         for (let i = 0; i < Totalvalue.length; i++) {
            var FirstTdCol = Totalvalue[i];
            FirstTdCol.innerHTML = i + 1;
             count++;
         }
        grandtotal();
    }






    function grandtotal() {
        var GrandTotalVar = 0;
        var discount = 0;

         var Totalvalue1 = document.querySelectorAll("#box>tr>td:nth-child(5)");
        for (let i = 0; i < Totalvalue1.length; i++) {
            var FirstTdCol1 = Totalvalue1[i];
            GrandTotalVar = GrandTotalVar + parseInt(FirstTdCol1.innerHTML);

        }  

        lbl1.innerHTML = GrandTotalVar;
        if (GrandTotalVar >= 15000) {
            discount = GrandTotalVar * 15 / 100;
        }
        else if (GrandTotalVar >= 10000) {
            discount = GrandTotalVar * 10 / 100;
        }
        else if ( GrandTotalVar >= 5000) {
            discount = GrandTotalVar * 5 / 100;
        }
        else if (GrandTotalVar < 5000) {
            discount = GrandTotalVar * 2 / 100;
        }
        lbl2.innerHTML = discount
        lbl3.innerHTML = GrandTotalVar - discount;



    }

}