"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userName, password, email, name, phoneNUmber, age) {
        this._id = 0;
        this._role = 0;
        this._userName = userName;
        this._password = password;
        this._email = email;
        this._name = name;
        this._phoneNumber = phoneNUmber;
        this._age = age;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
exports.User = User;
