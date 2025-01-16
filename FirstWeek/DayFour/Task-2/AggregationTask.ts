type userWithGadget = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
};

type userWithGadgets = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
};

function groupGadgetUser(users: userWithGadget[]): userWithGadgets[] {
    const userMap: Record<string, userWithGadgets> = {};

    for (const user of users) {
        if (!userMap[user.id]) {
            userMap[user.id] = {
                id: user.id,
                name: user.name,
                gadget: []
            };
        }
        userMap[user.id].gadget.push(user.gadget);
    }
    return Object.values(userMap);
}

const input: userWithGadget[] = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: {id: "101", name: "Phone", price: "1000"},
    },
    {
        id: "2",
        name: "Khidir Karaiwita",
        gadget: {id: "102", name: "Tablet", price: undefined},
    },
    {
        id: "1",
        name: "Khali Kashimiri",
        gadget: {id: "103", name: "Laptop", price: "1500"},
    },
    {
        id: "3",
        name: "Muhammad Sumbul",
        gadget: {id: "104", name: "Phone", price: "2000"},
    },
];

console.dir(groupGadgetUser(input), {depth: null});