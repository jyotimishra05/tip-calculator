let btn = document.getElementById("calculate");

btn.addEventListener("click" , ()=>{
    let billam = document.getElementById("bill-amount").value;
    let tipper= document.getElementById("tip-percentage").value;
    if(billam === '' || tipper === '')
    {
        alert("Please Enter Bill Amount");
        return;
    }
    
    document.getElementById("tip-amount").value=(billam /100 )*tipper;

   document.getElementById("total-bill").value= parseFloat(billam)+parseFloat(document.getElementById("tip-amount").value);
    


})