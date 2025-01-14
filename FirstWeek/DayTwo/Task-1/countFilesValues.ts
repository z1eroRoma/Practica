const countFilledValues = (obj:Record<string, unknown>): number => {
    return Object.values(obj).filter(value => value !== null && value !== undefined && value !== "").length;
};

const data = {
    name: "Alice",
    age: 25,
    address: "",
    phone: undefined,
    email: "[alice@example.com](<mailto:alice@example.com>)",
    notes: null,
};

console.log(countFilledValues(data));