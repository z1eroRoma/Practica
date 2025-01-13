function runLengthEncoding(input: string): string
{
    if (input.length === 0) return "";

    let encoded = "";
    let count = 1;

    for (let i = 1; i < input.length; i++)
    {
        if (input[i] === input[i - 1])
        {
            count++;
        }
        else
        {
            encoded += input[i - 1] + count;
            count = 1;
        }
    }
    encoded += input[input.length - 1] + count;

    return encoded;
}

function runLengthDecoding(input: string): string
{
    let decoded ="";
    let i = 0;

    while (i < input.length)
    {
        const char = input[i];
        let count = "";

        i++;
        while (i < input.length && !isNaN(Number(input[i])))
        {
            count += input[i];
            i++;
        }
        decoded += char.repeat(Number(count));
    }
    return decoded;
}

const original = "телегаммааппарат";
const encoded = runLengthEncoding(original);
console.log(`Encoded: ${encoded}`);

const decoded = runLengthDecoding(encoded);
console.log(`Decoded: ${decoded}`);