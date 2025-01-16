type user = {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
};

async function cleanUserData(users: user[]): Promise<user[]> {
    try {
        if (Math.random() < 0.1) {
            throw new Error("Случайная ошибка");
        }

        const activeUsers = users.filter(user => user.isActive);
        const cleanedUsers = activeUsers.map(user => ({
            ...user,
            name: user.name.trim().toLowerCase(),
            email: user.email.toLowerCase()
        }));

        return cleanedUsers;
    } catch (error) {
        console.error("Ошибка:", error instanceof Error ? error.message : "Неизвестная ошибка");
        return [];
    }
}

const users: user[] = [
    {id: "1", name: "   Иванов Иван ", email: "IVAnOV@example.com", isActive: true },
    {id: "2", name: "Сергеев Сергей    ", email: "SERGEEV@example.com", isActive: false },
    {id: "3", name: "        Николаев Николай ", email: "NIKOLAEV@example.COM", isActive: true },
    {id: "4", name: "  Петров Петр          ", email: "PETROOV@example.COM", isActive: false },
];

cleanUserData(users).then(cleanUsers => {
    console.log(cleanUsers);
})