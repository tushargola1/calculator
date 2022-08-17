
//we have created a string for the input bar 
let string = "";

let btn = document.querySelectorAll('.button');

// buttons ka ek array bane jisme for each loop chale 
Array.from(btn).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 

//target use hota he ek particular locaiton ko hit krne ke liye
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})