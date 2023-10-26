//pretend state
//this should be updated on add and delete as it is responsible for rendering the page
const words = ["apple", "pie", "cookie"];

const form = document.querySelector("form");
const output = document.querySelector("output");

// This function covers event bubbling - we attach the event listener to the
// parent so that we don't have to attach it to each child
output.addEventListener("click", onWordClick);

// Listening for `submit` is almost always better than the button `click`
form.addEventListener("submit", addWord);


render();

/**
 * Update the output to reflect `words`
 */
function render() {
  // Note: this is different from using `append` like in the previous block!
//map through the words array and...
  const wordElements = words.map((word, i) => {
    const newEl = document.createElement("p")
    //give it an id for deletion later, this is good practice for future work with APIs
    newEl.setAttribute("id",i)
    //assign the element the text of the word
    newEl.textContent = word
    //return the new element
    return newEl
  });
  //SPREAD VS REST

  //Which is this/ Why use it?
  output.replaceChildren(...wordElements);
}

/**
 * If the user clicks on a word, remove it from the sentence.
 * @param {Event} event the deepest element that was clicked
 */
//should remove the word from the aray
function onWordClick(event) {
    const clickedWord = event.target
    const parentOfClickedWord = output
    const siblingsOfClickedWord = event.target.parentElement.children
    console.log("The element is: ", clickedWord , "\n" , "The parent container: " ,parentOfClickedWord,"\n" , "The array of children, aka event.target and it's siblings: " , siblingsOfClickedWord)
    //keep in mind we need a way to update the WORDS array in "state"
    const index = clickedWord.getAttribute("id")
    words.splice(index, 1)
    //why would we need to call this again?
    render()
}

/**
 * Add the submitted word into `words`, clear the form, and rerender.
 */
function addWord(event) {
  // Show students what happens if we omit the `preventDefault`
  event.preventDefault();
  const word = event.target.word.value
  words.push(word);
  //clear the input so a user knows they can type again
  event.target.word.value = ""
//why are we doing this?
  render();
}






//spread v rest parameter
// const oneToFive = [1,2,3,4,5]
// const oneToTen = [...oneToFive, 6, 7,8,9,10]

//console.log(...oneToTen)
// const restFunction = (...params) => "rested: " + "\n" + "the params are: " + params +" with a length of: " +params.length
// const awakeFunction = (params)=> "awake: " + "\n" + "the params are: " + params +" with a length of: " +params.lengths 

// console.log(restFunction(oneToTen))
// console.log(restFunction(...oneToTen))//spread


// console.log(awakeFunction(oneToTen))
// console.log(awakeFunction(...oneToTen))//spread


//Other events to test...


const listener = document.getElementById("listener")

listener.addEventListener("click", ()=>changeColor("red"))
listener.addEventListener("contextmenu", ()=>changeColor("blue"))
listener.addEventListener("dblclick", ()=>changeColor("yellow"))
listener.addEventListener("mousedown", ()=>changeColor("green"))
listener.addEventListener("mouseup", ()=>changeColor("brown"))
listener.addEventListener("mouseenter", ()=>changeColor("purple"))
listener.addEventListener("mouseleave", ()=>changeColor("orange"))
//listener.addEventListener("mousemove", ()=>changeColor("purple"))

//keyboard events work best on the window and input forms, 
//you CAN put keyboard event on an element, butyou need tabindex="-1" on the element to "focus" on it

listener.addEventListener("keyup",(e)=>{
  let color 
  console.log(e)
  if(e.key=== "r"){
    color = "red"
  }else if(e.key=== "b"){
    color = "blue"
  }else if(e.key=== "y"){
    color = "yellow"
  }else if(e.key=== "g"){
    color = "green"
  }else if(e.key=== "p"){
    color = "purple"
  }else if(e.key=== "o"){
    color = "orange"
  }
  //only call the function if our color has been defined
  if(color){
    changeColor(color)
  //otherwise prompt the user to define it
  }else {
    alert("That's not the first letter of a color you can chose")
  }
})


const changeColor = (color)=>{
  listener.style.backgroundColor = color
}
