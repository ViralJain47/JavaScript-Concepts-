// async/await - async = makes a function return a promise ,  await = makes an async function wait for a promise


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


async function doWork(){

    try{
        const gymResult = await doGyming();
        console.log(gymResult);

        const dogResult = await walkDog();
        console.log(dogResult);

        const kitchenResult = await cleanKitchen();
        console.log(kitchenResult);
    }
    
    catch(error){
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded",doWork());