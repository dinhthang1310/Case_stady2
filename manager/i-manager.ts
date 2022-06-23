export interface IManager<T> {
    display() : T[];

    createNew(t : T) :void;

    updateBuId(id : number,t : T):void;

    deleteById(id : number):void;

    findById(id : number):number;
}