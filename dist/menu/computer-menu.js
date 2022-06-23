"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerMenu = void 0;
const computerManager_1 = require("../manager/computer/computerManager");
const rl = __importStar(require("readline-sync"));
const computer_1 = require("../model/computer");
var List;
(function (List) {
    List[List["SHOWLIST"] = 1] = "SHOWLIST";
    List[List["ADDNEWCOMPUTER"] = 2] = "ADDNEWCOMPUTER";
    List[List["UPDATE"] = 3] = "UPDATE";
    List[List["DELETE"] = 4] = "DELETE";
    List[List["ADDNEWSERVICE"] = 5] = "ADDNEWSERVICE";
})(List || (List = {}));
class ComputerMenu {
    constructor() {
        this.computerManager = new computerManager_1.ComputerManager();
    }
    run() {
        let choice = -1;
        do {
            console.log('---Quản lý phòng máy---');
            console.log('1.Hiển thị danh sách máy');
            console.log('2.Thêm một máy mới vào dánh sách');
            console.log('3.Sửa thông tin của máy');
            console.log('4.Xoá một máy khỏi danh sách');
            console.log('5.Thêm dịch vụ');
            console.log('6.Chỉnh sửa tính tiền theo giờ');
            console.log('7.Tính tiền');
            console.log('8.Quản lý tài khoản đăng nhập');
            console.log('9.Doanh thu');
            console.log('0.Quay lại ');
            choice = +rl.question('Nhập lựa chọn...');
            switch (choice) {
                case List.SHOWLIST: {
                    this.showListComputer();
                    break;
                }
                case List.ADDNEWCOMPUTER: {
                    let computer = this.inputComputer();
                    this.computerManager.createNew(computer);
                    break;
                }
                case List.UPDATE: {
                    console.log('---Sửa thông tin máy---');
                    let index = +rl.question('Nhập id máy muốn sửa: ');
                    let computer = this.inputComputer();
                    this.computerManager.updateBuId(+index, computer);
                    break;
                }
                case List.DELETE: {
                    console.log('---Xoá thông tin máy---');
                    let index = +rl.question('Nhập id máy muốn xoá: ');
                    this.computerManager.deleteById(+index);
                    break;
                }
                case List.ADDNEWSERVICE: {
                    console.log('---Thêm dịch vụ khác---');
                    break;
                }
            }
        } while (choice != 0);
    }
    inputComputer() {
        console.log('---Thêm máy vào danh sách---');
        let name = rl.question('Nhập tên máy: ');
        let status = rl.question('Nhập trạng thái của máy: ');
        return new computer_1.Computer(name, status);
    }
    showListComputer() {
        console.log('---Hiển thị danh sách máy---');
        let computers = this.computerManager.display();
        for (const computer of computers) {
            console.log(`STT: ${computer.id}\tTên máy: ${computer.name}\tTrạng thái: ${computer.status}`);
        }
    }
}
exports.ComputerMenu = ComputerMenu;
