const promise1 = new Promise(function(resolve, reject
){
    // Do an async task
    // Db calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promise1.then(function(){
     console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two')
        resolve()
    },1000)
}).then(function(){
    console.log("Async two resolved")
})

const Promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai", email : "chai@example.com"})
    },1000)
})

Promise3.then(function(user){
    console.log(user)
})


const promisefour = new Promise( function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "hitesh" , password : "123"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})

promisefour
.then((user) => {
    console.log(user)
    return user.username
})
.then( (username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("the promise is either resolved or rejected")
})

const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript" , password : "123"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try{
        const response = await promisefive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

//consumePromiseFive()

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("E :", error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})



