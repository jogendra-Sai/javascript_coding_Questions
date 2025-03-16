//Polyfill for forEach

let data = ["Sai Nandyala",25]

Array.prototype.ourForEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i],i)
    }
}

function printData(x){
    console.log(x)
}

data.ourForEach(printData)

//polyfill for map
const numbers = [2,3,4,6,6,128]
function doubleData(x){
    return x*x
}
Array.prototype.ourMap=function(callback){
    let newArray = [];
    for(let i = 0; i < this.length;i++){
        newArray.push(callback(this[i]))
    }
    return newArray
}

console.log(numbers.ourMap(doubleData))

//filter polyfills
const logicAlbums = [
  {
    name: "Bobby Tarantino",
    rating: 5,
  },
  { name: "The Incredible True Story", rating: 4.5 },
  {
    name: "Supermarket",
    rating: 4.9,
  },
  {
    name: "Neon",
    rating: 4.2,
  },
  { name: "Under Pressure", rating: 5 },
];

function filterAlbums(x){
    return x.rating > 4.5
}

const response = logicAlbums.filter(filterAlbums)

Array.prototype.ourFilter = function(callback){
    let filteredData = [];
    for(let i = 0; i < this.length; i++){
    if(callback(this[i])){
        filteredData.push(this[i])
    }
    }
    return filteredData
}

const filterPolyfill = logicAlbums.ourFilter(filterAlbums)
console.log(filterPolyfill)