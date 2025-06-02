const mybtn = document.getElementById("mybtn");
const myImg = document.getElementById("myImg");

mybtn.addEventListener("click",event=>{

    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        mybtn.textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        mybtn.textContent = "Show";
    }
    
})