// event listener = listen for specific events to create interactive web pages events 
                    // MOUSE EVENTS 
                    // click , mouseover , mouseout 
                    // .addEventListener(event,callback)



// MOUSE EVENTS 
// const myid = document.getElementById("myid");

// // function changeColor(event){
// //     // console.log(event);
// //     event.target.style.backgroundColor = "orange";
// //     event.target.textContent = "Clicked 😎";
// // }
// // myid.addEventListener("click",changeColor)
// let flag = true;

// myid.addEventListener("click",(event)=>{
//     event.target.style.backgroundColor = "orange";
//     event.target.textContent = "Clicked 💁🏼"
//     flag = false

// })

// myid.addEventListener("mouseover", (event)=>{
//     if(flag){
//         event.target.style.backgroundColor = "yellow";
//         event.target.textContent = "dont Click it";
//     }
    
// })

// myid.addEventListener("mouseleave",(event) =>{
//     if(flag){
//         event.target.style.backgroundColor = "lightgreen"
//         event.target.textContent = "Click me 😊";
//     }
    
// })


// KEY EVENTS 
// keyup , keydown 

// random shit done by mr. vj
// document.addEventListener("keydown",(event)=>{
//     if(event.key=="q"){
//         const myh1 = document.createElement("h1");
//         myh1.textContent = "you have pressed the key q";
//         document.body.append(myh1);
//     }
//     console.log(event);
// })

// document.addEventListener("keyup",event =>{
//     console.log(event.key);
// })


const mybox = document.getElementById("mybox");
const movement = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown",event=>{
    if(event.key.startsWith = "Arrow"){
        switch(event.key){
            case "ArrowUp":
                y -= movement;
                break;
            
            case "ArrowDown":
                y += movement;
                break;

            case "ArrowLeft":
                x -= movement;
                break;

            case "ArrowRight":
                x += movement;
                break;
        }

        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;

    }
})