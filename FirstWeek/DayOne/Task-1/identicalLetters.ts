function identicalLetters(str1: string, str2: string): string
{
    const set1 = new Set(str1);
    const set2 = new Set(str2);

    const commonChars: string[] = [];

    for (const char of set1)
    {
        if (set2.has(char))
        {
            commonChars.push(char);
        }
    }

    return commonChars.join('');
}

console.log(identicalLetters("hello", "world"));