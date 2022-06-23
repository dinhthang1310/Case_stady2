"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerManager = void 0;
class ComputerManager {
    showList() {
        return ComputerManager.computerList;
    }
    addNewComputer(computer) {
        ComputerManager.computerList.push(computer);
    }
}
exports.ComputerManager = ComputerManager;
ComputerManager.computerList = [];
