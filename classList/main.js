// classList - Element property in JavaScript used to interact with an element's list of classes (css classes) allow you to make reusable classes for many elements across our webpage


const mybtn = document.getElementById("mybtn");

mybtn.classList.add("enabled");
// mybtn.classList.remove("enabled");



// mybtn.addEventListener("mouseover",event=>{
//     event.target.classList.add("hover");
// })

// mybtn.addEventListener("mouseout",event=>{
//     event.target.classList.remove("hover");
// })

// toggle(remove if present,add if not)
mybtn.addEventListener("mouseover",event=>{
    event.target.classList.toggle("hover");
})

mybtn.addEventListener("mouseout",event=>{
    event.target.classList.toggle("hover");
})


// replace
mybtn.addEventListener("click",event=>{
    event.target.classList.replace("enabled","disabled");
})


// contains

console.log(mybtn.classList.contains("enabled"));