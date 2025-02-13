//Promise All example
const func1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = [1,2,3,4,5]
            resolve(data)
        },3000)
    })
};

const func2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data1 = [6,7,8,9,10]
            resolve(data1)
        },3000)
    })
}

const func3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data3 = [11,12,13,14,15]
            resolve(data3)
        },3000)
    })
}

Promise.all([func1(),func2(),func3()]).then(dataArrayValues=>{
    console.log("All data values", dataArrayValues)
}).catch(error=>{
    console.log("Error",error)
})

//Promise AllSettled Example

//Promise All example
const func1 = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = [1,2,3,4,5]
            resolve(data)
        },3000)
    })
};

const func2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data1 = [6,7,8,9,10]
            reject("Function 2 rejected")
        },3000)
    })
}

const func3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data3 = [11,12,13,14,15]
            resolve(data3)
        },3000)
    })
}

Promise.allSettled([func1(),func2(),func3()]).then(dataArrayValues=>dataArrayValues.forEach(result=>{
    if(result.status === "fulfilled"){
        console.log("Value", result.value)
    }else{
        console.error("Error for rejection",result.reason)
    }
}))
