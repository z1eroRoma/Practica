type Banknotes = {
    100: number;
    50: number;
    10: number;
    5: number;
    2: number;
    1: number;
};

function splitIntoBanknotes(amount: number): Banknotes {
    const denominations: number[] = [100, 50, 10, 5, 2, 1];
    const result: Banknotes = {
        100: 0,
        50: 0,
        10: 0,
        5: 0,
        2: 0,
        1: 0,
    };

    let remainingAmount = amount;

    for (const denomination of denominations) {
        if (remainingAmount >= denomination) {
            const count = Math.floor(remainingAmount / denomination);
            result[denomination as keyof Banknotes] = count;

            remainingAmount -= count * denomination;
        }
    }

    return result;
}

const amount = 368;
const banknotes = splitIntoBanknotes(amount);
console.log(`Сумма: ${amount}`);
console.log(`Купюры:`, banknotes);