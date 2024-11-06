let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let number = Math.floor(Math.random() * 100);

    if (number <= 33) {
        return `Pedra`;
    } else if (number > 33 && number <= 66) {
        return `Papel`
    } else {
        return `Tesoura`;
    }

}

function getHumanChoice () {
    return prompt("Escolha entre Pedra, Papel ou Tesoura: ")
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log(`Empate. \nSeus pontos: ${humanScore}\nPontos do computador: ${computerScore}.`) ;
    }

    if (
        (humanChoice === 'Pedra' && computerChoice === 'Tesoura') ||
        (humanChoice === 'Papel' && computerChoice === 'Pedra') ||
        (humanChoice === 'Tesoura' && computerChoice === 'Papel')
    ) {
        humanScore = humanScore + 1;
        return console.log(`Você ganhou! ${humanChoice} ganha de ${computerChoice}.\nSeus pontos: ${humanScore}\nPontos do computador: ${computerScore}.`) ;
    }

    computerScore = computerScore + 1;
    return console.log(`Você perdeu! ${computerChoice} ganha de ${humanChoice}.\nSeus pontos: ${humanScore}\nPontos do computador: ${computerScore}.`) ;
}

function displayResults () {
    if (humanScore > computerScore) {
        console.log(`Parabéns, você ganhou!\nSeus pontos: ${humanScore}\nPontos do computador: ${computerScore}.`)
    } else if (humanScore < computerScore) {
        console.log(`Que pena, você perdeu...\nSeus pontos: ${humanScore}\nPontos do computador: ${computerScore}.`)
    } else  {
        console.log(`Vocês empataram!\nSeus pontos: ${humanScore}\nPontos do computador: ${computerScore}.`)
    }
}

function playGame (rounds) {
    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice)
    }
    displayResults()
}

playGame(5);
