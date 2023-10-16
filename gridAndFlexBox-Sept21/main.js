const myForm = document.getElementById("form")


myForm.addEventListener("submit", (eve)=>{
    eve.preventDefault()
    console.log(eve.target.children)
})

