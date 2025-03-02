//Call is used to borrow the method from one function to another function
let person1 = {
    name:"Sai Jogendra",
    village:"Koduru",
    printDetails : function(district,state){
        console.log(this.name +" from "+ this.village+" , "+district+ " , "+state)
    }
}
person1.printDetails("Krishna","AndhraPradesh");

let person2 = {
    name:"Pavan Sai Ram S",
    village:"Yanam",
}

person1.printDetails.call(person2,"Rajahmandry","AndhraPradesh");

//Apply: The main difference b/w call and apply lies in passing the parameters
person1.printDetails.apply(person2,["Rajahmandry","AndhraPradesh"]);

//Bind will return an function which means it will give a copy which will be executed or returned later

const res = person1.printDetails.bind(person2,"Rajahmandry","AndhraPradesh")
res()
