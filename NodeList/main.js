// NodeList - Static collection of HTML elements by (id,classes,element) can be created by using querySelectorAll(), it is similar to an array ,but no (map,fliter,reduce) ,it wont update to automatically reflect changes

let buttons = document.querySelectorAll(".myButton");

buttons.forEach(button =>{
    button.style.backgroundColor = "red";
})

buttons.forEach(button =>{
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor = "hsla(129, 64%, 54%, 0.75)";
    })
})


// to add an element 

let newButton = document.createElement("button");
newButton.textContent = "B4";
newButton.classList = "myButton";

document.body.appendChild(newButton);
console.log(buttons);
// you have to reassign to the newButton as nodelist doesnt update automatically

buttons = document.querySelectorAll(".myButton");
console.log(buttons);

