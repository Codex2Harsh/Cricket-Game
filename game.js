let choice;
let sccore={
    win:0, 
    lost:0,
    tie:0,
    display: function(){
        return ` Final Scores: 
    Win: ${sccore.win}
    Lost: ${sccore.lost}
    Tie: ${sccore.tie}`;
    }
};

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
            sccore.win++;
            return 'User won.';
        } else if (compChoice === 'Bat') {
            sccore.tie++;
            return `it's a tie`;
        } else {
            sccore.lost++;
            return `User lost`;
        }
    } else if (userchoice === 'Ball') {
        if (compChoice === 'Ball') {
            sccore.tie++;
            return `it's a tie`;
        } else if (compChoice === 'Bat') {
            sccore.lost++;
            return `User lost`;
        } else {
            sccore.win++;
            return 'User won.';
        }
    } else {
        if (compChoice === 'Ball') {
            sccore.lost++;
            return `User lost`;
        } else if (compChoice === 'Bat') {
            sccore.win++;
            return 'User won.';
        } else {
            sccore.tie++;
            return `it's a tie`;
        }
    }
}
function show ( userchoice, computerMove, result){
    alert(`
    You have chosen ${userchoice}. 
    Computer choice is ${computerMove}.
    ${result}
    ${sccore.display()}
    `);
}
