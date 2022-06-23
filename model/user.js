"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userName, password, email, name, phoneNUmber, age) {
        this._id = 0;
        this._role = 0;
        this._userName = userName;
        this._password = password;
        this._email = email;
        this._name = name;
        this._phoneNumber = phoneNUmber;
        this._age = age;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (value) {
            this._phoneNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
