// Console api
console.log("Hello world");
console.warn("This is a warning");
console.error("This is an error");
console.assert(4==2)

// datatypes in javascript
// primitive
var und;
var var1 = null;
var var2 = 12;
var var3 = "strings";
var var4 = true;
console.log(und,var1,var2,var3,var4);

// reference
var arr = [1,2,3,"she",5]
var obj = {1:"saurav",
           2:"hitakshi"}
console.log(arr,obj);


// let variable
{
    let a = 1;
    let a = "hello"
    console.log(a)
}

// const variable
const a = 1;
a = "hello"
console.log(a)

// for loop
a = [1,2,3,4,5];
for(i=0;i<a.length;i++)
{
    console.log(a[i]);
}

// foreach
a = [1,2,3,4,5];
a.forEach(function(element)
{
    console.log(element)
})

// do while and while

a = [1,2,3,4,5];
i=0
console.log('while loop')
while(i<a.length)
{
    console.log(a[i]);
    i++;

}
b = [1,2,3,4,5];
j=0;
console.log("do while loop")
do{
    console.log(a[j]);
    j++;
} while(j<a.length);

// array methods 
let arr = [1,2,3,4,5];
console.log(arr) //print the array
console.log(arr.length) //give length of array
arr.pop() //remove element from last
console.log(arr) 
arr.push("saurav") //add element to last
console.log(arr) 
arr.shift() //remove first element 
console.log(arr)
arr.unshift("saurav") //add element to first
console.log(arr)
a = arr.toString() //convert array to string
console.log(a)
arr.sort() //sort
console.log(arr) //it sorts alphabetically by key 

// string methods
mystr = "hello guys I'm saurav. hello"
console.log(mystr.length) //gives length of string
console.log(mystr.indexOf("hello")) //gives index of first hello 
console.log(mystr.lastIndexOf("hello")) //gives index of last hello 
a = mystr.replace('hello','hey') //replace saurav with gaurav
console.log(a) //replace also replaces only first element

// string slicing
b = mystr.slice(1,4)
console.log(b)

// DOM  Manipulation

elem = document.getElementById("firstcontainer")
console.log(elem)

elem2 = document.getElementsByClassName("container")
console.log(elem2)

a = elem2[1]
console.log(a)

console.log(elem2[0].innerHTML) //get html code of that class
console.log(elem2[0].innerText) //get text of that class

// adding a class that is defined in html file
elem2[0].classList.add("add-class")
// removing the class 
elem2[0].classList.remove("add-class")

// adding child element 
tn =  document.getElementsByTagName("div")
console.log(tn)

createdElement = document.createElement("p")
createdElement.innerText = "Hello I'm a created child"
createdElement.style.backgroundColor = "green"
tn[1].appendChild(createdElement)

// replacing child element
createdElement2 = document.createElement("b")
createdElement2.innerText = "Hi I'm bold"
tn[1].replaceChild(createdElement2,createdElement)

// removing child element 
tn[1].removeChild(createdElement2)

// query selector
sel = document.querySelector('.container')
console.log(sel)

sel = document.querySelectorAll('.container')
console.log(sel)


// events
function clicked(){
    console.log(" the button was clicked")
}
window.onload=function(){
    console.log('the document is loaded')
}
// adding events to particulars
clickme.addEventListener('click',function(){           //on clickin
    console.log("button clicked")
})
firstcontainer.addEventListener('mouseover',function(){ //when mouse on
    console.log("mouse on")
})
firstcontainer.addEventListener('mouseout',function(){ //when mouse out
    console.log("mouse out")
})
previous = document.querySelectorAll(".container")[0].innerHTML
firstcontainer.addEventListener('mouseup',function(){ //when click
    document.querySelectorAll(".container")[0].innerHTML = previous
    console.log("mouse up")

})
firstcontainer.addEventListener('mousedown',function(){ //after click
    document.querySelectorAll(".container")[0].innerHTML = "<b> i'm changed</b>"
    console.log("mouse down")
})

// arrow functions
function summ(a,b){
    return (a+b);
}

summ = (a,b)=>{
    return(a+b)
}

console.log(summ(2,3));

// settimeout and setinterval
func = ()=>{
    console.log("I'm a function")
}
clr = setTimeout(func,2000)

clr2 = setInterval(func,2000)

// localStorage
localStorage.setItem('name','saurav')
console.log(localStorage)
console.log(localStorage.getItem('name'))

// JSON
obj = {1: 'saurav',2: 'hitakshi'}
console.log(obj)
console.log(typeof obj)

str = JSON.stringify(obj) //object to JSON string
console.log(str)
console.log(typeof str)

a = JSON.parse(str) //JSON string to object
console.log(a)
console.log(typeof a)

// backtick
naam = 'saurav'
umar = 19
a = `my name is ${naam} and my age is ${umar}`
console.log(a)