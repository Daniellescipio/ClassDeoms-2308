//get all of the elements you need from the html document...
//calling in the form will give you access to the input and button. But you can also call them in individually
//number bank where user input will be displayed
//sort one number
//sort all the numbers
//the holder for odd numbers
//the holder for even numbers


//programming our buttons, there are three, we'll write the functions later
//whateverINamedMyForm.addeventlistener("", addContent)
//whateverINamedSortOne.addeventlistener("", sortOne)
//whateverINamedSortAll.addeventlistener("", sortAll)

//pretend state, something to track our numbers so we don't have to keep reference html doc
const numbers = []
const sortedNumbers = []

displayNums()
//lets write some functions!!
function displayNums (){
    //map through the array you created to hold state
    //inside this map ...
    //create a new element
    //give it an id for sorting later
    //give it the appropriate content
    //return it

    //outside the map...
    //target the correct output, there are three!!
    //const output = whateverIcalled mynumberbank.querySelector("output")
    // replace all the children of the correct output with the new array

    //do the above twice, once for all te numbers and once for the numbers that are sorted into odds and evens( a little more login in odds and evens)
}

const addContent = ()=>{
    //create a variable and assign it with the users input
    //add that new value into our state array
    //clear the input box
    displayNums()
}

const sortOne = ()=>{
    //you have some choices to make, 
    //do you want to always sort the first index?
    //const sortedNum = statearray[0]
    // the last? 
    //const sortedNum = statearray[arraylength-1]
    //let the user choose?
    //const sortedNum = prompt("Enter the number you want to sort")
    
}

const sortAll = ()=>{
   //If you already wrote the logic to put sorted numbs in a seperate array, you can just pass all the numbers into that array and call the render function
    numbers.splice(0, array.length, ...sortedArray)
}
