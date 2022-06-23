// export enum Status {
//     AVAIABLE = 1,
//     DISABLE
// }
export class Computer {
    private _id : number = 0
    private _name : string;
    private _status : String;

    constructor(name: string, status: String) {
        this._name = name;
        this._status = status;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get status(): String {
        return this._status;
    }

    set status(value: String) {
        this._status = value;
    }
}