export interface Permission {
    description: string;
    name: string;
    title: string;
    _id: string;
}

export interface Role {
    items: Item[]
    name: string;
    permissions: Permission[]
    title: string;
    _id: string;
}

interface Item {
    title: string;
    _id: string;
}