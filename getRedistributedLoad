
function getRedistributedLoad(serverCapacity,serverLoad){
    let sortedCapacity = [...serverCapacity].sort((a,b)=>a-b);

    let sortedLoad = [...serverLoad].sort((a,b)=>b-a);

    let loadMap = new Map();
    for(let i=0; i<sortedCapacity.length;i++){
        if(!loadMap.has(sortedCapacity[i])){
            loadMap.set(sortedCapacity[i],[]);
        }
        loadMap.get(sortedCapacity[i]).push(sortedLoad[i])
    }
    let results =[];
    for(let capacity of sortedCapacity){
        let smallestLoad = loadMap.get(capacity).pop();
        results.push(smallestLoad)
    }
    return results;
}




let serverCapacity = [4,5,6];
let serverLoad = [1,2,3];
console.log(getRedistributedLoad(serverCapacity,serverLoad))
