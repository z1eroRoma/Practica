import * as readline from 'readline';

type Choice = "Камень" | "Ножницы" | "Бумага";
type Result = "Игрок победил" | "Компьютер победил" | "Ничья";

interface GameResult {
    playerChoice: Choice;
    computerChoice: Choice;
    result: Result;
}

function playGame(playerChoice: Choice): GameResult {
    const choices: Choice[] = ["Камень", "Ножницы", "Бумага"];

    if (!choices.includes(playerChoice)) {
        throw new Error("Некорректный выбор. Выберите 'Камень', 'Ножницы' или 'Бумага'.");
    }

    const computerChoice: Choice = choices[Math.floor(Math.random() * choices.length)];
    let result: Result;

    if (playerChoice === computerChoice) {
        result = "Ничья";
    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Игрок победил";
    } else {
        result = "Компьютер победил";
    }

    return {
        playerChoice,
        computerChoice,
        result
    };
}

const playerInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

playerInput.question("Выберите: Камень, Ножницы или Бумага: ", (input: string) => {
    const playerChoice = input.trim() as Choice;

    try {
        const gameResult = playGame(playerChoice);
        console.log(`Игрок выбрал: ${gameResult.playerChoice}`);
        console.log(`Компьютер выбрал: ${gameResult.computerChoice}`);
        console.log(`Результат: ${gameResult.result}`);
    } catch (error) {
        console.error((error as Error).message);
    } finally {
        playerInput.close();
    }
});

