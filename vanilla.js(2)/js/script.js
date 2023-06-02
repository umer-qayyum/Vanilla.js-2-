//Count the distance in miles:-
const trips=[
    {
        to:"Brazil",
        distance:1000
    },
    {
        to:"China",
        distance:2500
    },
    {
        to:"India",
        distance:3000
    },
];
function miles(){
    var sum=trips.reduce((acc,curr)=>{
        return acc +curr.distance;
        
        
    },0);
    console.log(sum);
    result.innerHTML+=`<h4 style="border:1px solid black; padding:20px;">The user travelled ${sum} miles<h4> `;
}





//Count No. of Mac and Window computers
const computers = [
    {type:'Laptop',price:124, os:'Windows'},
    {type:'Desk',price:124, os:'Mac'},
    {type:'Desk',price:124, os:'Windows'},
    {type:'Laptop',price:124, os:'Mac'},
    {type:'Laptop',price:124, os:'Windows'},
 ];
 function laptops(){
    var sum=0;
    var total=0;
   computers.reduce((acc,curr)=>{
    if(curr.os=="Windows"){
         sum++;
    }
    else if(curr.os=="Mac"){
        total++;
    }
    
   },0);

   show.innerHTML+=`<h4 style="border:1px solid black; padding:20px;">Total ${sum} laptops with Windows<br>Total ${total} laptops with Mac<h4> `
 }






//Refactor them:-
//  var name = "James";
// var employeeId = 25;
// var eyes = "Blue";
// var age = 25
// var position = "Developer";
// var salary = 2500;
// var knowdlege = ['Javascript','PHP','REACT','Angular 4'];
// var married = false;

const name = "James";
const employeeId = 25;
const eyes = "Blue";
let age = 25
const position = "Developer";
let salary = 2500;
const knowdlege = ['Javascript','PHP','REACT','Angular 4'];
let married = false;






//Give random cupcakes:-

var cupcake = document.querySelector('.cupcake');
var container = document.querySelector('.orders')
 
var cupcakes = [
 {id:1,flavor:'Strawberry',Image:'S-cake.jpg'},
 {id:2,flavor:'Apple',Image:'A-cake.jpg'},
 {id:3,flavor:'Banana',Image:'B-cake.jpg'}
]
 
var randomCupcake;
var orderNumber = 0;
var baseAmount = 5;
var finalAmount;
var dicountID = 2;
var dicountAmount = 3;
var message
 
cupcake.addEventListener("click",function(){
 randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;
 orderNumber += 1;
 finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;
 message = '<div ><h4 style="background-color:whitesmoke;border:1px solid black;padding:20px;width:60%;">'+'<img style="height:100px;width:100px;" src="'+cupcakes[randomCupcake].Image+'"/>'+'- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</h4></div>'
 container.insertAdjacentHTML('beforeend',message)
 
});
