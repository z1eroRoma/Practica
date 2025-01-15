const returnPromise = (delay: number , message: string): Promise<string> => {
    return new Promise((resolve) => {
       setTimeout(() => {
           resolve(message);
       }, delay);
    });
};

returnPromise(5000, "Не забудь выкинуть мусор")
    .then((result) => console.log(result))
    .catch((error) => console.error(error));