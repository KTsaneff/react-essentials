export default class User {
    name: string;
    age: number;
    email: string;
    avatarImgUrl: string;

    constructor(name: string, age: number, email: string, avatarImgUrl: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.avatarImgUrl = avatarImgUrl;
    }

    getProfileSummary(): string {
        return `${this.name}, ${this.age} years old - ${this.email}`;
    }
}