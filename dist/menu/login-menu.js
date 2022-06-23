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
exports.LoginMenu = void 0;
const user_1 = require("../model/user");
const user_manager_1 = require("../manager/user/user-manager");
const rl = __importStar(require("readline-sync"));
const role_1 = require("../model/role");
const admin_menu_1 = require("./admin-menu");
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["LOGIN"] = 1] = "LOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
class LoginMenu {
    constructor() {
        this.choice = -1;
        this.userManager = new user_manager_1.UserManager();
        this.adminMenu = new admin_menu_1.AdminMenu();
    }
    inputPassword() {
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
        let password = '';
        let isValidPassword = true;
        do {
            password = rl.question('Nhập password: ');
            if (!regexPassword.test(password)) {
                isValidPassword = false;
                console.log('Mật khẩu phải có ít nhất 1 chữ cái in hoa,1 chữ số và 1 kí tự đặc biệt');
            }
            else {
                isValidPassword = true;
            }
        } while (!isValidPassword);
        return password;
    }
    inputUser() {
        let userName = this.inputUsername();
        let password = this.inputPassword();
        let confirmPassword = this.inputConfirmPassword(password);
        let name = rl.question('Nhập tên nguời dùng: ');
        let email = this.inputEmail();
        let phoneNumber = this.inputPhoneNumber();
        let age = this.inputAge();
        if (age < 18) {
            console.log('Bạn chưa đủ tuổi để đăng kí');
            return null;
        }
        return new user_1.User(userName, password, email, name, phoneNumber, age);
    }
    inputAge() {
        let age;
        age = +rl.question('Nhập tuổi: ');
        return age;
    }
    inputPhoneNumber() {
        let phoneNumber = '';
        let isValidPhoneNumber = true;
        do {
            phoneNumber = rl.question('Nhập số điện thoại: ');
            let regexPhoneNumber = /^(0?[1-9]{9})$/g;
            if (!regexPhoneNumber.test(phoneNumber)) {
                isValidPhoneNumber = false;
                console.log('Đây không phải là số điện thoại');
            }
            else {
                let currPhoneNumber = this.userManager.finByPhoneNumber(phoneNumber);
                if (currPhoneNumber) {
                    isValidPhoneNumber = false;
                    console.log('Số điện thoại bạn nhập đã tồn tại');
                }
                else {
                    isValidPhoneNumber = true;
                }
            }
        } while (!isValidPhoneNumber);
        return phoneNumber;
    }
    inputEmail() {
        let email = '';
        let isValidEmail = true;
        do {
            email = rl.question('Nhâp email: ');
            let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexEmail.test(email)) {
                isValidEmail = false;
                console.log('phai nhap dung email cua ban');
            }
            else {
                let currEmail = this.userManager.finByEmail(email);
                if (currEmail) {
                    isValidEmail = false;
                    console.log('email da ton tai');
                }
                else {
                    isValidEmail = true;
                }
            }
        } while (!isValidEmail);
        return email;
    }
    inputConfirmPassword(password) {
        let confirmPassword = '';
        do {
            confirmPassword = rl.question('Nhập lại password: ');
            if (password != confirmPassword) {
                console.log('mat khau khong khop');
            }
        } while (password != confirmPassword);
        return confirmPassword;
    }
    inputUsername() {
        let userName = '';
        let isValidUserName = true;
        do {
            userName = rl.question('Nhập userName: ');
            let currUser = this.userManager.findByUserName(userName);
            if (currUser) {
                isValidUserName = false;
                console.log('Tên tài khoản đã tồn tại');
            }
            else {
                isValidUserName = true;
            }
        } while (!isValidUserName);
        return userName;
    }
    run() {
        let choice = -1;
        do {
            console.log('1.Đăng nhâp');
            console.log('2.Đăng kí');
            console.log('0.Thoát');
            choice = +rl.question('Nhập lựa chọn...');
            switch (choice) {
                case LoginChoice.LOGIN: {
                    console.log('---Đăng nhập---');
                    this.loginForm();
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log('---Đăng kí---');
                    let user = this.inputUser();
                    if (user == null) {
                        console.log('Đăng kí không thành công');
                        break;
                    }
                    else {
                        this.userManager.createNew(user);
                        console.log('---Đăng kí thành công---');
                        break;
                    }
                }
            }
        } while (choice != 0);
    }
    // private registerForm() {
    //
    //
    // }
    loginForm() {
        let userName = rl.question('Nhập tài khoản: ');
        let password = rl.question('Nhập mật khẩu: ');
        let currUser = this.userManager.Login(userName, password);
        if (currUser) {
            if (currUser.role == role_1.Role.ADMIN) {
                this.adminMenu.run();
            }
            else {
            }
        }
        else {
            console.log('Tài khoản hoặc mật khẩu không đúng');
        }
    }
}
exports.LoginMenu = LoginMenu;
