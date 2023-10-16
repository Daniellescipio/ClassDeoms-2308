const user= {
    name:"joe",
    age:30,
    funds: 300,
    licence: true,
    PTO:false,
    vacation:false
}


//can Joe drive?
const canDrive = (age, lic)=>{
    if(age> 16 && lic){
        console.log("you are old enough to drive" + "Get on the road!")
    }else{
        console.log("you can't drive")
    }
}
//canDrive(user.age,user.licence)

//can Joe rent a car

const canRent = (lic, funds, age)=>{
    if(age >=25){
        if(funds <=500 ){
            console.log("not enough")
        }else{
            if(lic){
                console.log("Have fun")
            }else{
                console.log("No license")
            }
        }
    }else{
        console.log("not old enough")
    }
}

canRent(user.licence, user.funds, user.age)


//can joe go on vacation