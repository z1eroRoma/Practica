const fetchPokemonData = async (pokemonName: string): Promise<any> => {
    try {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {

        console.error("Ошибка при загрузке данных:", error);
        return null;
    }
};

(async () => {
    const pokemonName = "charizard";

    try {
        const pokemonData = await fetchPokemonData(pokemonName);

        if (pokemonData) {
            console.log(`Данные о покемоне: Имя ${pokemonData.name}, Тип: ${pokemonData.types[0].type.name}`);
        } else {
            console.log("Не удалось получить данные о покемоне.");
        }
    } catch (error) {
        console.error("Необработанная ошибка:", error);
    }
})();
