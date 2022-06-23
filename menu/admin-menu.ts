import * as rl from 'readline-sync';
import {ComputerMenu} from "./computer-menu";
export class AdminMenu {
    private computerMenu = new ComputerMenu()
    run() {
        let choice = -1;
        do {
            console.log('---Ứng dụng quản lý phòng máy---');
            console.log('1.Quản lý máy tính');
            console.log('0.Đăng xuất');
            choice = +rl.question('NHập lựa chọn...');
            switch (choice) {
                case 1 : {
                    this.computerMenu.run();
                    break;
                }
            }
        }while (choice != 0);
    }
}