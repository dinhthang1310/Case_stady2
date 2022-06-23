"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
// export enum Status {
//     AVAIABLE = 1,
//     DISABLE
// }
class Computer {
    constructor(name, status) {
        this._id = 0;
        this._name = name;
        this._status = status;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
}
exports.Computer = Computer;
