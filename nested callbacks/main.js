// a Situation in a js where callbacks are nested within other callbacks , it is an old pattern to handle asynchronus code but in todays js we use promises + async/await.

function task1(callback){
    setTimeout(()=>{
        console.log("task 1 is completed.");
        callback();
    },2000)
}

function task2(callback){
    setTimeout(()=>{
        console.log("task 2 is completed.");
        callback();
    },1000)
    
}

function task3(callback){
    setTimeout(()=>{
        console.log("task 3 is completed.");
        callback();
    },3000)
    
}

function task4(callback){
    setTimeout(()=>{
        console.log("task 4 is completed.");
        callback();
    },1500)
    
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("all tasks are completed...");
            })
        })
    });
});


