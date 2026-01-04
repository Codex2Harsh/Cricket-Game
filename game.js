let scoreStr= localStorage.getItem('Score') ;
let score;
resetScore(scoreStr);
//based on truthy/falsy concept.
function resetScore(scoreStr){
 score= scoreStr ? JSON.parse(scoreStr) : 
    {   win:0, 
        lost:0,
        tie:0,
    };
    score.display=function(){
        return ` Final Scores: 
        Win: ${score.win} 
        Lost: ${score.lost}
        Tie: ${score.tie}`;
    };

}
//a much robust code is implied above
// if(scoreStr !== null){
//     score= 
// }else{
//     score = ;
// }

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
            score.win++;
            return 'User won.';
        } else if (compChoice === 'Bat') {
            score.tie++;
            return `it's a tie`;
        } else {
            score.lost++;
            return `User lost`;
        }
    } else if (userchoice === 'Ball') {
        if (compChoice === 'Ball') {
            score.tie++;
            return `it's a tie`;
        } else if (compChoice === 'Bat') {
            score.lost++;
            return `User lost`;
        } else {
            score.win++;
            return 'User won.';
        }
    } else {
        if (compChoice === 'Ball') {
            score.lost++;
            return `User lost`;
        } else if (compChoice === 'Bat') {
            score.win++;
            return 'User won.';
        } else {
            score.tie++;
            return `it's a tie`;
        }
    }
}
function show ( userchoice, computerMove, result){
    localStorage.setItem('Score', JSON.stringify(score));

    alert(`
    You have chosen ${userchoice}. 
    Computer choice is ${computerMove}.
    ${result}
    ${score.display()}
    `);
}
