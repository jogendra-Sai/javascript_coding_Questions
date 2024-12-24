let person = {
    name:"Jogendra",
    age:25,
    village:"Koduru",
    district:"Krishna",
    state:"Andhra Pradesh",
    sleep:function(){
        console.log(`Hello ${this.name} sleep well`)
    },
    wakeUp:()=>{
       console.log(`Hello ${this.name} Wakeup`)
    }
}

person.sleep();

person.wakeUp();

//Find Keys

console.log(person.hasOwnProperty("name"))

//Adding new values(keys) to objects
person.currentLocation = "Hyderabad";

console.log(person)

//Deleting keys from the object
delete person.currentLocation;

console.log(person)

//Freeze
//By freezing the object we are not allowed to add, update and delete properties
// Object.freeze(person);
person.name = "Pavan";
console.log(person)

//Seal
//By using Object Seal method we can only update the properties
Object.seal(person);
person.name = "Sai";
person.school = "Bala Bhanu";
console.log(person)

//Looping through the objects
for(let key in person){
    console.log(`${key}:${person[key]}`)
}

let p={
    name:"Sai",
    age:24,
    village:"koduru"
}

let p2={
    name:"Sai",
    age:24,
    village:"koduru"
}

let isFlag = true;

for(let key in p){
    if(p[key] !== p2[key]){
        isFlag = false
    }
}
if(isFlag){
 console.log("Same")
}
else{
    console.log("Not Same")
}

//Problem to count the players
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
};

const playerCount = (data) =>{
    if(data === null){
        return {}
    }
    let countPlayers = {};
    for(let player of data.name){
     countPlayers[player] = (countPlayers[player] || 0) + 1
    }
    const nextPlayerCount = playerCount(data.next)
    console.log(nextPlayerCount)
    for(let key in nextPlayerCount){
        countPlayers[key] = (countPlayers[key] ||  0) + nextPlayerCount[key]
    }
    return countPlayers
}

console.log(playerCount(data))
