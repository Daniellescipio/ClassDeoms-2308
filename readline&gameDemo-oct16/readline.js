//install readline-sync
//require readline-sync
const readline = require("readline-sync")



// ask a question and get user response - .question("your question")
// const userName = readline.question("What's your name")
// console.log(userName)
//ask a yes or no question - .keyInYN("Your question ("optionally add instructions")
// const happy = readline.keyInYN("Are you happy [y]es or [n]o")
// console.log(happy)
//give user options from an array and gt beack the index .keyInSelect(array, "question")
// const seasons =["fall", "summer", "spring", "winter"]
// const favoriteSeason = readline.keyInSelect(seasons, "What's your favorite season?")
// console.log(favoriteSeason, seasons[favoriteSeason])

//as a user a question and get the first key they prss - .keyIn(question, {limit: any keys th user is limitd to, this is optional.})

// const favoriteSeason = readline.keyIn("What's your favorite Season? [S]ummer, [F]all, [W]inter, [X] for Spring", {limit:'sfwx'})
// console.log(favoriteSeason==="s" && "summer")




















//Lets make a game!!

//Requirements
//A player object with *at least* a name retrieved from the user and life set to a numerical value
//at least three 'bad guys' 
// a while loop that runs as long as your players life is greater than 0 or they beat all the bad guys.
//When the game commences, your player will have a 50/50 chance to encouter a bad guy (you can play with odds to make game easier/harder)
//your player will have the option to fight or run
//if they choose fight they will have a 2/3 chance of winning / 1/3 losing life points (you can play with odds to make game easier/harder)
//lost life points can be a fixed value or a random amount
//if they choose to run they will have a 2/3 odds of getting away (you can play with odds to make game easier/harder)

const player = {
    name:"",
    life:100
}

const monsters = ["bad guy 1", "bad guy 2", "bad guy 3"]
const runOrFight = ()=>{
    const randomMonster = monsters[monsters.length-1]
    const runOrFight = readline.keyIn(`Oh no! ${randomMonster} is in your way! Would you like to [r]un or [f]ight?`, {limit:'rf'})
    if(runOrFight === "r"){
        if(Math.floor(Math.random() * 3)<2){
            console.log("Wow your fast you go away")
        }else{
            console.log("Wow your Slow you fell")
        }
    }else{
        if( Math.floor(Math.random() * 3<2) ){
            console.log(`You punch ${randomMonster} in the face and they die. Congratulations!`)
            monsters.pop()
        }else{
            console.log(` ${randomMonster} punches you in the face and you lose 20 life points. Bummer!`)
            player.life = player.life - 20
        }
    }
}

const playerName = readline.question("What's your name?-->")
player.name = playerName
console.log(`Welcome, ${player.name}, there are monsters for you to fight!`)

while (player.life >=0 && monsters.length>0){
    console.log(monsters,  monsters.length>0, monsters.length)
    // if(Math.floor(Math.random() * 2)<1){
    //     console.log("Nothing here!")
    // }else{
      
    // }
    runOrFight()
}

if(player.life<=0){
    console.log("You died")
}else{
    console.log("You won")
}