let bt= document.querySelectorAll(".bt");
let op=document.querySelectorAll(".op");
let display= document.querySelector(".display");
let result= document.querySelector(".eval");
let special=document.querySelectorAll(".special");
let val1;
let val2;
let trg=0;
let operator,toperator,res;
let temp;


bt.forEach(bt=>{

bt.addEventListener('click',()=>{

    display.innerText+=bt.innerText;
   
})

})

op.forEach(op=>{
    op.addEventListener('click',()=>{
        if(trg==0){
            operator=op.innerText;
            val1=parseFloat(display.innerText);
            display.innerText='';
            trg=1;
        }

    else{
        val2 = parseFloat(display.innerText);
        calc(val2);
        operator = op.innerText;  
        val1 = res;  
        display.innerText = '';  
        }
    })
   
})

result.addEventListener('click',()=>{
    val2=parseFloat(display.innerText);
    calc(val2);
    trg=0;
})
special.forEach(special=>{

special.addEventListener('click',()=>{
    let t=parseInt(display.innerText);
    if(special.innerText=="AC")
    {
        display.innerText = "";
        trg = 0;
        val1 = null;
        val2 = null;
        operator = null;
        res = null;
    }

    else if(special.innerText=="DEL"){
        let a=display.innerText;
        let b="";
        let n= a.length;
        for(let i=0;i<n-1;i++){
            b=b+a[i];
        }
        display.innerText=b;
    }
    else{
            display.innerText=-t;
    }

})

})

function calc(value2){
  
  if(operator=="+"){
    res= val1+value2;
  }
else if(operator=="-"){
    res= val1-value2;
  }
  else if(operator=="*"){
    res= val1*value2;
  }
  else{
    res= val1/value2;
  }
  
  display.innerText=res;
}
