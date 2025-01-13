function indexOf (mainString: string, subString: string): number
{
    if (subString === '') return 0;

    for (let i = 0; i <= mainString.length - subString.length; i++)
    {
        let isMath = true;
        for (let j = 0; j < subString.length; j++)
        {
            if (mainString[i + j] !== subString[j])
            {
                isMath = false;
                break;
            }
        }
        if (isMath) return i;
    }
    return -1;
}

console.log(indexOf("Я в своем познании настолько преисполнился, что я как будто бы уже", "познании"));
console.log(indexOf("я здесь ищу только одного - покоя, умиротворения и вот этой гармонии", "познание"))