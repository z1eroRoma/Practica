type user = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "active" | "delete";
};

const fackUser: user[] = [
    {
        id: "1",
        name: "Сергеев Сегрей",
        phone: "+123456789",
        email: "Sergei@example.com",
        location: "New York, USA",
        status: "active",
    },
    {
        id: "2",
        name: "Иванов Иван",
        phone: "+198765432",
        email: "Ivan@example.com",
        location: "Moscow, Russia",
        status: "delete",
    },
];

const fetchFakeUsers = (delay: number = 2000): Promise<user[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fackUser);
        }, delay);
    });
};

fetchFakeUsers()
    .then((users) => console.log("Плученные пользователи:", users))
    .catch((error) => console.log("Ошибка:", error));