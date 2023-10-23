//bring in elements from html
const greeting = document.querySelector("#greeting")
const buttons = document.querySelectorAll("button")
const userName = document.getElementById("username")
const feelingsMessage = document.getElementsByClassName("feeling")
const parent = document.getElementById("parent")


//for fruit demo
const fruitContainer= document.getElementById("listContainer")
const total = document.getElementById("total")
console.log(feelingsMessage[0])

//On click, 
//display the user name to the document 
//tell them how they are feeling
//change the color of the div green for happy, blue for sad.

const displayFeelings = (e)=>{
    greeting.textContent = "Welcome" + " " + userName.value
    feelingsMessage[0].textContent = userName.value + " is feeling " +e.target.getAttribute("feeling")
    //manipulate html class/id
//manipulate the css.
    if(e.target.getAttribute("feeling")==="happy"){
        // parent.classList.add("green")
        // parent.classList.remove("blue")
        parent.style.backgroundColor = "green"
    }else{
        // parent.classList.add("blue")
        // parent.classList.remove("green")
        parent.style.backgroundColor = "blue"
    }
}


//you don't have to do this part, fullstack provides an array of freelancers for you on the workshpo page. 
const Fruit = class{
    constructor(name, qnty){
        this.name = name,
        this.qnty = qnty
    }
}
const fruits = [
    new Fruit("banana", 7), 
    new Fruit("orange", 6), 
    new Fruit("apple", 4), 
    new Fruit("peach", 11),
    new Fruit("lemon", 42)
]

//there might already be an unordered list in your html, check first. If it is, use getElement instead of create Element for this step to get the list that laready exist. 
const list = document.createElement("ul")
//append the list
fruitContainer.append(list)
//Assign setInterval to a variable so we can stop it and so we can do everything without user Input.
const clearIntervalId = setInterval(()=>{
    //if there are still fruits
    if(fruits.length>0){
        //create a list item for the fruit
        const listItem = document.createElement("li")
        //give the list item some text
        listItem.textContent = fruits[0].name + " : " + fruits[0].qnty 
        //append th list item to the unordered list we created(or that already on our html)
        list.append(listItem)
        //update the total number of fruits
        total.textContent = Number(total.textContent) + Number(fruits[0].qnty)
        //remove one fruit so our program knows when to stop.
        fruits.shift()
    }else{
        //stop our program if there are no more fruits. 
        clearInterval(clearIntervalId)
    }
}, 1000)



































