import {IComputerManager} from "./i-computer-Manager";
import {Computer} from "../../model/computer";

export class ComputerManager implements IComputerManager {
    private static id : number = 0;
    private static computerList : Computer[] = [];
    createNew(t: Computer): void {
        ComputerManager.id++
        t.id = ComputerManager.id;
        ComputerManager.computerList.push(t);
    }

    deleteById(id: number) {
        let index = this.findById(id);
        if (index !== -1) {
            ComputerManager.computerList.splice(index,1);
            return ComputerManager.id--;
        }

    }

    display(): Computer[] {
        return ComputerManager.computerList;
    }

    findById(id: number): number {
        let index = -1;
        for (let i = 0;i < ComputerManager.computerList.length;i++) {
            if (id == ComputerManager.computerList[i].id) {
                index = i;
                break;
            }
        }
        return index;

    }

    updateBuId(id: number, t: Computer) {
        let index = this.findById(id);
        if (index !== -1) {
            ComputerManager.computerList[index] = t;
            return ComputerManager.id--;
        }
        return false;

    }

}