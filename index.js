document.getElementById('forms').addEventListener('add',async function(event){
    event.preventDefault();
    let firstTask=document.getElementById('firstTask').value
    let secondTask=document.getElementById('secondTask').value
    let thirdTask=document.getElementById('thirdTask').value
    let fourthTask=document.getElementById('fourthTask').value
    let fifthTask=document.getElementById('fifthTask').value
    let sixthTask=document.getElementById('sixthTask').value

    
    let data={
        firstTask:firstTask,
        secondTask:secondTask,
        thirdTask:thirdTask,
        fourthTask:fourthTask,
        fifthTask:fifthTask,
        sixthTask:sixthTask

    }
    console.log({data});

   let result=await fetch('https://dummyjson.com/users/add',{ 
        method:'POST',
        headders:{
            "Content-Type":`application/json`
        },

body:JSON.stringify(data)
    
    })
    .then(response => response.json())
    .then(response => response)
    .catch(error => error.message)
    console.log(result)
   

    let success=document.getElementById('add');
    result.id? success.innerHTML="Activity added successfuly":success.innerHTML="No activity added"
})


document.getElementById('form').addEventListener('delete',async function(event){
    event.preventDefault();
    let firstTask=document.getElementById('firstTask').value
    let secondTask=document.getElementById('secondTask').value
    let thirdTask=document.getElementById('thirdTask').value

    let data={
        firstTask:firstTask,
        secondTask:secondTask,
        thirdTask:thirdTask
    }
    console.log(data)

    let result=await fetch('https://dummyjson.com/todos',{ 
        method:'POST',
        headders:{
            "Content-Type":`application/json`
        },

body:JSON.stringify(data)
})

.then(response => response.json())
    .then(response => response)
    .catch(error => error.message)
    console.log(result)
   

    let success=document.getElementById('delete');
    result.id? success.innerHTML="Activity deleted successfuly":success.innerHTML="No activity deleted"

})

document.getElementById('done').addEventListener('add',async function(event){
    event.preventDefault();
    let firstTask=document.getElementById('firstTask').value
    let secondTask=document.getElementById('secondTask').value

    let data={
        firstTask:firstTask,
        secondTask:secondTask,
    }
    console.log(data)

    let result=await fetch('https://dummyjson.com/users/add',{ 
        method:'POST',
        headders:{
            "Content-Type":`application/json`
        },

body:JSON.stringify(data)
})

.then(response => response.json())
    .then(response => response)
    .catch(error => error.message)
    console.log(result)
   

    let add=document.getElementById('add');
    result.id? add.innerHTML="Activity added successfuly":add.innerHTML="No activity addes"

    let success=document.getElementById('delete');
    result.id? success.innerHTML="Activity deleted successfuly":success.innerHTML="No activity deleted"

})
