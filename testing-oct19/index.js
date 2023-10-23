
//multiply two nunmbers!!!
const firstNum = document.getElementById("fisrt")
const secondNum = document.getElementById("second")
const form = document.getElementById("form")

//How would we write a test to check...


console.log(firstNum, secondNum, form)


//functional aka ux(user experience) testing, does it work for the user?

//Can we do what we set out to do in the first place tie it all together. 
// does 
const multiply = (x,y)=>{
    //NaN - is a number
    try{
        const product = x * y
        if(typeof x === "number" && typeof y === "number"){
            console.log(product)
        }else{
            if(typeof x !== "number" ){
                throw new Error ("Your first number is not a number")
            }else{
                throw new Error ("Your second number is not a number")
            }
        }
//That do we want to happen in our function
    }catch(error){
       // console.log("something didn't work")
        console.log(error.message, error.name)
//what might go wrong and what do we want to happen when/if it does
    }finally{
       console.log( 'this will always happen')
//we always want this to happen.
    }
}
//const product = multiply(1,2)
const notAProduc = multiply(4, 22)





// //take a string and repeat each of it's letters once

// const repeat = (str)=>{
//     let newStr = ""
//     for(let i = 0; i < str.length; i++){
//         newStr = newStr + str[i] + str[i]
//     }
//     return newStr
// }

// //console.log(repeat("hey"))


// const repeatBetter = (str)=>{
//     return str.split("").reduce((final, letter, i)=>{
//         console.log(letter,i)
//         return final+ letter + letter
//     },"")
// }
// console.log(repeatBetter("hey"))