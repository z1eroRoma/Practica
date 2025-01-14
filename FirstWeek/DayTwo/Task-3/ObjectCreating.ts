type sourceData = {
    title: string;
    year: number;
    author: string;
};

type targetData = {
    title: string;
    year: number;
    author: string;
    preview: string;
    url: string;
}

const createBook = (source:sourceData): targetData => {
    return {
        title: source.title,
        year: source.year,
        author: source.author,
        preview: `Название: ${source.title}, Автор: ${source.author}, Год: ${source.year}`,
        url: `www.someurl.com/preview?title=${source.title.trim().replace(/\s+/g, "")}&year=${source.year}&author=${source.author}`,
    };
};

const source:sourceData = {
    title: "Harry Potter",
    year: 1997,
    author: "J.K.Rowling",
};

console.log(createBook(source));