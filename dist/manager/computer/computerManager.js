"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerManager = void 0;
class ComputerManager {
    createNew(t) {
        ComputerManager.id++;
        t.id = ComputerManager.id;
        ComputerManager.computerList.push(t);
    }
    deleteById(id) {
        let index = this.findById(id);
        if (index !== -1) {
            ComputerManager.computerList.splice(index, 1);
            return ComputerManager.id--;
        }
    }
    display() {
        return ComputerManager.computerList;
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < ComputerManager.computerList.length; i++) {
            if (id == ComputerManager.computerList[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
    updateBuId(id, t) {
        let index = this.findById(id);
        if (index !== -1) {
            ComputerManager.computerList[index] = t;
            return ComputerManager.id--;
        }
        return false;
    }
}
exports.ComputerManager = ComputerManager;
ComputerManager.id = 0;
ComputerManager.computerList = [];
