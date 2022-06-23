export class User {
    private _id : number = 0;
    private _userName : string;
    private _password : string;
    private _role : number = 0;
    private _email : string;
    private _name : string;
    private _phoneNumber : string;
    private _age : number


    constructor( userName: string, password: string, email: string, name: string,phoneNUmber : string,age : number) {
        this._userName = userName;
        this._password = password;
        this._email = email;
        this._name = name;
        this._phoneNumber = phoneNUmber;
        this._age  = age;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}