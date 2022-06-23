import {ComputerManager} from "../manager/computer/computerManager";
import * as rl from 'readline-sync';
import {Computer} from "../model/computer";
import {AdminMenu} from "./admin-menu";
enum List {
    SHOWLIST = 1,
    ADDNEWCOMPUTER ,
    UPDATE,
    DELETE ,
    ADDNEWSERVICE,
}
export class ComputerMenu{
    private computerManager = new ComputerManager();

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
            choice = +rl.question('Nhập lựa chọn...')
            switch (choice) {
                case List.SHOWLIST : {
                    this.showListComputer();
                    break;
                }
                case List.ADDNEWCOMPUTER : {
                    let computer =  this.inputComputer();
                    this.computerManager.createNew(computer);
                    break;
                }
                case List.UPDATE : {
                    console.log('---Sửa thông tin máy---');
                    let index = +rl.question('Nhập id máy muốn sửa: ');
                    let computer = this.inputComputer();
                    this.computerManager.updateBuId(+index,computer);
                    break;

                }
                case List.DELETE : {
                    console.log('---Xoá thông tin máy---');
                    let index = +rl.question('Nhập id máy muốn xoá: ');
                    this.computerManager.deleteById(+index);

                    break;
                }
                case List.ADDNEWSERVICE : {
                    console.log('---Thêm dịch vụ khác---');
                    break;
                }
            }
        }while (choice != 0 );
    }

     inputComputer():Computer {
        console.log('---Thêm máy vào danh sách---');
        let name = rl.question('Nhập tên máy: ');
        let status = rl.question('Nhập trạng thái của máy: ');
        return new Computer(name, status);
    }

     showListComputer() {
        console.log('---Hiển thị danh sách máy---');
        let computers = this.computerManager.display();
        for (const computer of computers) {
            console.log(`STT: ${computer.id}\tTên máy: ${computer.name}\tTrạng thái: ${computer.status}`);
        }
    }
}