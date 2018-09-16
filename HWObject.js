
//******************** */
// example of an object: ARG Game Character Aurors
// have class creat the aurao object

const aurora ={
    name: "Aurora",
    health: 150,
    strength: 25
};

console.log(`${aurora.name} has ${aurora.health} Health points and ${aurora.strength} as strength`);
// auros is harmed by an arrow reduced health by 20
aurora.health -= 20;
// aurora equips a strenth necklace - increase strenght by 10
aurora.strength += 10;
//console.log(`${aurora.name} has ${aurora.health} health points and ${} as strenght`);

// aurora learn a new skill
aurora.XP = "";
aurora.XP += 15;

function describe(Character){
    console.log(`${Character.name} has ${Character.health} health points and ${Character.strength} as strenght and ${Character.XP} XP points`);
}


describe(aurora);

const ryu ={
    name: "Ryu",
    health: 150, 
    strength: 25,
    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
    }
}
console.log(ryu.describe());

/********** DOG OBJECT */
const dog ={
    name: "Lima",
    species: "German Sheperd",
    size: "22 inches",
    describe(){
        return `${this.name} is a ${this.species} dog measuring ${this.size}`;
    }
}
console.log(dog.describe());
dog.bark = "Grrr! Grrr!";
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);

/********* BANK OBJECT */
const Bank ={
    name: "Alex",
    balance: "0",
    credit: "0",
    describe(){
        return `"owner: ${this.name}, balance ${this.balance}" `
    }

}
console.log(Bank.describe());

Bank.credit = 250;
Bank.balance = 250;
Bank.debit = 80;
Bank.balance -= 80;
console.log(Bank.describe());
