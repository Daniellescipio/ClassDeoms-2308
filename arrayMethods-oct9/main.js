
const patients = [
    {
        name:"joe",
        age:61,
        newPatient:false,
        nextVisit: new Date(2023, 11, 5)
    },
    {
        name:"bob",
        age:12,
        newPatient:false,
        nextVisit: new Date(2021, 9, 25)
    },
    {
        name:"Anne",
        age:1,
        newPatient:true,
        nextVisit: new Date(2020, 4, 17)
    },
    {
        name:"Sam",
        age:35,
        newPatient:false,
        nextVisit: new Date(2023, 7, 30)
    },    {
        name:"alex",
        age:15,
        newPatient:true,
        nextVisit: new Date(2023, 10, 11)
    },    {
        name:"Marge",
        age:22,
        newPatient:true,
        nextVisit: new Date(2023, 8, 8)
    },
]

//filter
// console.log(patients.filter((patient)=>{
//     if(patient.age>18){
//         return patient
//     }
// }))



//map
// const nextAppt = patients.map((pat)=>{
//     return `${pat.name}, your next appointment is on ${pat.nextVisit.toDateString()}`
// })
// console.log(nextAppt)


// //forEach

// patients.forEach((patient)=>{
//     if(patient.newPatient){
//         patient.newPatient = false
//     }
// })
// console.log(patients)


//findIndex/find
const favoritePatient = patients.findIndex((patient)=>patient.age<18)

// console.log(patients[favoritePatient])



//slice

const newArray = patients.slice(2,5)
//console.log(newArray)



//reduce

const greeting = patients.reduce((final, patient)=>{
    return final + " "+ patient.name + ","
},"Hello")

const totalAge = patients.reduce((acc, patient)=>{
    return acc + patient.age
}, 0)

console.log(totalAge)

