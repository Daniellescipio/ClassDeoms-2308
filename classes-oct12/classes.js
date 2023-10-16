const playerA = {
    name:"marge",
    level:1,
}

const Player = class{
    constructor(name, level){
        this.name = name,
        this.level = level
    }
    greeting =  () => {
        return `Hello ${this.name}. `
    }
}

// class Player{
//     constructor(name, level){
//         this.name = name,
//         this.level = level
//     }
//     greeting =  () => {
//         return `Hello ${this.name}. `
//     }
// }
// const player = class newPlayer{
//     constructor(name, level){
//         this.name = name,
//         this.level = level
//     }
//     greeting =  () => {
//         return `Hello ${this.name}. `
//     }
// }

class newPlayer extends Player{
    constructor(name, level, newer){
        super(name,level)
        this.newer = newer
    }
    goodbye =  () => {
        return `Goodbye ${this.name}. `
    }
}
const players = [
    new Player("joe", 1), 
    new Player("abby", 1), 
    new Player("mark", 1), 
    new Player("tammy", 1), 
    new Player("keith", 1)
]
console.log(players)


const tony = new newPlayer("tony", 1, true)
console.log(tony.goodbye())
