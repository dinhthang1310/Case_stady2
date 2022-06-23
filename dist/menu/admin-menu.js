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
exports.AdminMenu = void 0;
const rl = __importStar(require("readline-sync"));
const computer_menu_1 = require("./computer-menu");
class AdminMenu {
    constructor() {
        this.computerMenu = new computer_menu_1.ComputerMenu();
    }
    run() {
        let choice = -1;
        do {
            console.log('---Ứng dụng quản lý phòng máy---');
            console.log('1.Quản lý máy tính');
            console.log('0.Đăng xuất');
            choice = +rl.question('NHập lựa chọn...');
            switch (choice) {
                case 1: {
                    this.computerMenu.run();
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.AdminMenu = AdminMenu;
