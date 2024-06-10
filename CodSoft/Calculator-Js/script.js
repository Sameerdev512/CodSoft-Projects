// let string = "" ;
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
// button.addEventListener('click' , (e)=>{

//   if (e.target.innerHTML == "="){

//   string = eval(string);
//     document.querySelector('input').value = string;
//   }

//     else if (e.target.innerHTML == "C"){

//     string = "";
//     document.querySelector('input').value = string;
//   }

//       else if (e.target.innerHTML == "AC"){

//     string = "";
//     document.querySelector('input').value = string;
//   }

//   else{
//     console.log(e.target);
//   string = string + e.target.innerHTML;
//   document.querySelector('input').value = string;
//   }
//   })
// })


let string = ""
let buttons = document.querySelectorAll(".button")
// also we can use map instead of forEach loop
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('.input').innerHTML = string
        }
        else if (e.target.innerHTML == "C") {
            string = ""
            document.querySelector('.input').innerHTML = string
        }

        else if (e.target.innerHTML == "AC") {
            string = ""
            document.querySelector('.input').innerHTML = string
        }
        else {
            string = string + e.target.innerHTML
            document.querySelector('.input').innerHTML = string
        }
    })
})