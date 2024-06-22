var count = 1 ;
window.onload  = function(){
      // btn1.style.display = "block";
       btn2.style.display = "none";
      
}
//debugger

function btn1(){

   var tr1 = document.createElement("tr");
   document.getElementById("box").appendChild(tr1);

   var SrNo = document.createElement("td");
   SrNo.innerHTML = count++ ;
   tr1.appendChild(SrNo);

   var name = document.createElement("td");
   name.innerHTML = txt1.value;
   tr1.appendChild(name);

   var email = document.createElement("td");
   email.innerHTML = txt2.value;
   tr1.appendChild(email);

   var city = document.createElement("td");
   city.innerHTML = txt3.value ;
   tr1.appendChild(city);

   var gender = document.createElement("td");
   if(rdo1.checked==true){
      gender.innerHTML += rdo1.value ;
   }
   else if(rdo2.checked==true){
      gender.innerHTML += rdo2.value ;
   }
   tr1.appendChild(gender);

   var address = document.createElement("td");
   address.innerHTML = txt4.value ;
   tr1.appendChild(address);

   var date = document.createElement("td");
   date.innerHTML = txt5.value ;
   tr1.appendChild(date);

   var edit = document.createElement("td");
   tr1.appendChild(edit);

   var dlt = document.createElement("td");
   tr1.appendChild(dlt);

   var editbtn = document.createElement("input");
   editbtn.type = "button";
   editbtn.value = "Edit";
   editbtn.id = "editbtn"
   edit.appendChild(editbtn);
   editbtn.onclick = function(){
       btn2.style.display = "block";
   
      txt1.value = name.innerHTML ;
      txt2.value = email.innerHTML ;
      txt3.value = city.innerHTML ;
      if(rdo1.checked==true){
           rdo1.value = gender.innerHTML;
      }
      else if(rdo2.checked==true){
         rdo2.value = gender.innerHTML;
      }
      txt4.value = address.innerHTML ;
      txt5.value = date.innerHTML ;
   }



    

    var dltbtn = document.createElement("input");
   dltbtn.type = "button";
   dltbtn.value = "Delete";
    dlt.appendChild(dltbtn);
    dlt.appendChild(dltbtn);
    dltbtn.onclick = function () {
        document.getElementById("box").removeChild(tr1);
       var Totalvalue = document.querySelectorAll("#box>tr>td:nth-child(1)");
       count = 1;
        for (let i = 0; i < Totalvalue.length; i++) {
           var FirstTdCol = Totalvalue[i];
           FirstTdCol.innerHTML = i + 1;
            count++;
        }
   }
   txt1.value = "  ";
   txt2.value = "  ";
   txt3.value = "  ";
   txt4.value = " ";
   txt5.value = " ";


   
   
  
}
    var name = txt1.value ;
    var email = txt2.value;
    var city = txt3.value ;
    var address = txt3.value;
    var date = txt4.value;

   name.innerHTML += document.getElementById("txt1").value;
   email.innerHTML += document.getElementById("txt2").value;
  city.innerHTML += document.getElementById("txt3").value;

   var genderValue = document.querySelector('input[name="rdoGen"]:checked');
   if (genderValue) {
      genderValue.innerHTML = genderValue.value;
   }

  address.innerHTML += document.getElementById("txt4").value;
  date.innerHTML += document.getElementById("txt5").value;

   // Hide update button after updating
   document.getElementById("btn2").style.display = "none";

   // Clear input fields after update
   document.getElementById("txt1").value = "";
   document.getElementById("txt2").value = "";
   document.getElementById("txt3").value = "";
   document.getElementById("txt4").value = "";
   document.getElementById("txt5").value = "";


