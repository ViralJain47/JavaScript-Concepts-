// promises - An object that manages asynchronous operations.Wrap a promise object around {asynchronous code} i promise to return  value
// PENDING -> RESOLVED or  REJECTED
// new Promise((resolve,reject) => {asynchronous code})

function doGyming(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const gym = true;
            if(gym){
                resolve("you have done the gym.");
            }
            else{
                reject("how dare you not completed it.")
            }
            
        },3000);
    })
}

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const isWalk = false;
            if(isWalk){
                resolve("you walk the dog.");
            }
            else{
                reject("common man walk the dog.")
            }
        },3000);
    })
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("you clean the kitchen.");
        },3000);
    })
}


doGyming().then(value =>{console.log(value); return walkDog()}).then(value =>{console.log(value); return cleanKitchen()}).then(value=>{
    console.log(value); console.log("you have finished all the tasks.")
}).catch(error=>{console.error(error)});