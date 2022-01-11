/*
const computerScore = 0;
const playerScore = 0;


function CPUchoice() {
    let option = ['rock', 'paper', 'scissors']
    return (option[Math.floor(Math.random() *option.length)])
}


function game() {
    const selectionButton = document.querySelectorAll('.selection')

    selectionButton.forEach(option => option.addEventListener('click', () => {
        const CPU = CPUchoice();
        const player = option.id;
        
    }))
}


game()





//
//selectionButton.forEach(selectionButton => {
//    selectionButton.addEventListener('click', e => {
//        const selctionName = selectionButton.dataset.selection
//        makeSelection(selctionName)
//    })
//})
//function makeSelection(selection) {
//    console.log(selection)
//}
//


*/

let score = 0
let option = ['rock', 'paper', 'scissors']
//-----------------------------------------------------------------//
const selectionButtons = document.querySelectorAll('[data-selection]')
const myText = document.getElementById('textOne')

//-----------------------------------------------------------------//
function CPUchoice() {
    const randomChoice = Math.floor(Math.random() * option.length)
    return option[randomChoice]
}


function check(selectionName, CPUchoice) {
    if (selectionName == 'rock' && CPUchoice == 'scissors' || selectionName == 'scissors' && CPUchoice == 'paper' || selectionName == 'paper' && CPUchoice == 'rock') {
        const msg = `Player WON! Player Chose: ${selectionName} and CPU Chose: ${CPUchoice}`
    
        return myText.innerText = msg
        //return console.log("Winner")
    }
    else if (selectionName == 'rock' && CPUchoice == 'paper' || selectionName == 'scissors' && CPUchoice == 'rock' || selectionName == 'paper' && CPUchoice == 'scissors') {
        const msg = `Player LOSE! Player Chose: ${selectionName} and CPU Chose: ${CPUchoice}`
    
        return myText.innerText = msg
        //return console.log("Loser")
    }
    else if (selectionName === CPUchoice) {
        const msg = `It Was A TIE! Player Chose: ${selectionName} and CPU Chose: ${CPUchoice}`
    
        return myText.innerText = msg
        //return console.log("TIE")
    
    }
  
  
}
  
//---------------------------------------------------------------------/


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        let cumputer = CPUchoice();
        console.log("------------------------------------------------------")
        console.log(selectionName);
        check(selectionName, cumputer);
        console.log(cumputer);
        console.log("------------------------------------------------------")
      
      
      /*
      if (selectionName == CPUchoice) {
        console.log(`Player chose: ${player} AND Computer chose: ${computer}`)
      }
      */
      
    })
})





























