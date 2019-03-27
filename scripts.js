//create class Die representing a single die
//Die must have property named value and method named roll
//roll must generate a random integer between 1-6, set the value property and update the div on the page with the new value
//When new die is created it should automatically create a div, call it's roll method and put the div on the screen.
//can use either DOM or Jquery
const dice = [];//global array for each die stored in so rolling is easier
class Die {
    constructor() {
        this.div = document.createElement("div"); //when object is created a div is also created
        document.getElementById("container")
        container.appendChild(this.div); //the div is added to body
        this.div.style.backgroundColor = "black"
        this.roll(); //call the roll on all the divs
        this.div.textContent = this.value //giving the div text content to display the random number rolled value
        this.div.classList.add("square");
        this.div.addEventListener("click", () => { //arrow functions bind context 
            this.roll(); //calls the roll on just the div that was clicked
        })
        this.div.addEventListener("dblclick",()=>{
            container.removeChild(this.div)
        })

    }
    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);//math.random generates a random # between 0 and up to but not including 1
        this.div.textContent = this.value

    }
}
const insertDie = () => {
    let die = new Die();
    dice.push(die);
}
let dieButton = document.getElementById("die");
dieButton.addEventListener("click", insertDie)

let rollButton = document.getElementById("rolldice")
rollButton.addEventListener("click", () => {
    for (let i = 0; i < dice.length; i++) {
        dice[i].roll(); //call the roll function on each dice
        dice[i].textContent = dice[i].value// lets value update with each click
       
    } 
})

let sumButton = document.getElementById("sum"); // created button that when clicked alerts the sum of the array values
sumButton.addEventListener("click", () => {
    let sumDice = dice.reduce((acc, die) =>(acc + die.value), 0); //acc= running tally(accumulator) and val is the value property of die class
    alert(sumDice);
})




