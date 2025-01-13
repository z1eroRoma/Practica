function longestWord(sentence: string): string
{
    const words = sentence.split(' ');

    let longest = '';

    for (const word of words)
    {
        if (word.length > longest.length)
        {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("Привет мир!"));
console.log(longestWord("Я в своем познании настолько преисполнился..."))