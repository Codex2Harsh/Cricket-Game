let choice;

function generateChoice() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';

    } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';

    } else {
        return 'Stump';

    }
}

function computerMove(userchoice, compChoice) {
    if (userchoice === 'Bat') {
        if (compChoice === 'Ball') {
            return 'User won.';
        } else if (compChoice === 'Bat') {
            return `it's a tie`;
        } else {
            return `User lost`;
        }
    } else if (userchoice === 'Ball') {
        if (compChoice === 'Ball') {
            return `it's a tie`;
        } else if (compChoice === 'Bat') {
            return `User lost`;
        } else {
            return 'User won.';
        }
    } else {
        if (compChoice === 'Ball') {
            return `User lost`;
        } else if (compChoice === 'Bat') {
            return 'User won.';
        } else {
            return `it's a tie`;
        }
    }
}
function show ( userchoice, computerMove, result){
    alert(`
    You have chosen ${userchoice}. 
    Computer choice is ${computerMove}.
    ${result}`);
}
