const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1 resolved")
    },2000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise3 resolved")
    },2000)
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise3 rejected")
    },1000)
})

Promise.all[promise1,promise2,promise3].then((res)=>{console.log(res)})
.catch((error)=>{console.log(error)})

//In Success case it will return array of 3 promises results after 2 seconds(max time by any promise)

//In failure case the failed promise will return after its delay
