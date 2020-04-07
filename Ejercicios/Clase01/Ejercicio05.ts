function showEntireName(name : string, lastName : string){

    console.log(lastName.toUpperCase() + ", " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()); 
}
var myName : string = "lUcIa";
var myLastName : string = "mOrEl";

showEntireName(myName, myLastName);