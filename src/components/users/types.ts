export interface User {
    name: {
        first: number
        last: string
    }
    phone: string
    email: string
    gender: string
    registered: {
        age: number
    }
}

export enum Headings {
    first = 'first',
    last = 'last',
    phone = 'phone',
    email = 'email',
    gender = 'gender',
    age = 'age',
}

export const headings: Headings[] = [
    Headings.first,
    Headings.last,
    Headings.phone,
    Headings.email,
    Headings.gender,
    Headings.age,
]