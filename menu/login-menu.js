"use strict";
exports.__esModule = true;
exports.LoginMenu = void 0;
var user_1 = require("../model/user");
var user_manager_1 = require("../manager/user-manager");
var rl = require("readline-sync");
var LoginChoice;
(function (LoginChoice) {
    LoginChoice[LoginChoice["LOGIN"] = 1] = "LOGIN";
    LoginChoice[LoginChoice["REGISTER"] = 2] = "REGISTER";
})(LoginChoice || (LoginChoice = {}));
var LoginMenu = /** @class */ (function () {
    function LoginMenu() {
        this.choice = -1;
        this.userManager = new user_manager_1.UserManager();
    }
    LoginMenu.prototype.inputPassword = function () {
        var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
        var password = '';
        var isValidPassword = true;
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
    };
    LoginMenu.prototype.inputUser = function () {
        var userName = this.inputUsername();
        var password = this.inputPassword();
        var confirmPassword = this.inputConfirmPassword(password);
        var name = rl.question('Nhập tên nguời dùng: ');
        var email = this.inputEmail();
        var phoneNumber = this.inputPhoneNumber();
        var age = +rl.question('Nhập tuổi: ');
        return new user_1.User(userName, password, email, name, phoneNumber, age);
    };
    LoginMenu.prototype.inputPhoneNumber = function () {
        var email = this.inputEmail();
        var phoneNumber = '';
        var isValidPhoneNumber = true;
        do {
            phoneNumber = rl.question('Nhập số điện thoại: ');
            var regexPhoneNumber = /^(0?[1-9]{9})$/g;
            if (!regexPhoneNumber.test(phoneNumber)) {
                isValidPhoneNumber = false;
                console.log('Đây không phải là số điện thoại');
            }
            else {
                var currPhoneNumber = this.userManager.finByPhoneNumber(phoneNumber);
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
    };
    LoginMenu.prototype.inputEmail = function () {
        var email = '';
        var isValidEmail = true;
        do {
            email = rl.question('Nhâp email: ');
            var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (!regexEmail.test(email)) {
                isValidEmail = false;
                console.log('phai nhap dung email cua ban');
            }
            else {
                var currEmail = this.userManager.finByEmail(email);
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
    };
    LoginMenu.prototype.inputConfirmPassword = function (password) {
        var confirmPassword = '';
        do {
            confirmPassword = rl.question('Nhập lại password: ');
            if (password != confirmPassword) {
                console.log('mat khau khong khop');
            }
        } while (password != confirmPassword);
        return confirmPassword;
    };
    LoginMenu.prototype.inputUsername = function () {
        var userName = '';
        var isValidUserName = true;
        do {
            userName = rl.question('Nhập userName: ');
            var currUser = this.userManager.findByUserName(userName);
            if (currUser) {
                isValidUserName = false;
                console.log('Tên tài khoản đã tồn tại');
            }
            else {
                isValidUserName = true;
            }
        } while (!isValidUserName);
        return userName;
    };
    LoginMenu.prototype.run = function () {
        var choice = -1;
        do {
            console.log('1.Đăng nhâp');
            console.log('2.Đăng kí');
            console.log('0.Thoát');
            choice = +rl.question('Nhập lựa chọn...');
            switch (choice) {
                case LoginChoice.LOGIN: {
                    console.log('---Đăng nhập---');
                    var userName = rl.question('Nhập tài khoản: ');
                    var password = rl.question('Nhập mật khẩu: ');
                    var currUser = this.userManager.Login(userName, password);
                    break;
                }
                case LoginChoice.REGISTER: {
                    console.log('---Đăng kí---');
                    var user = this.inputUser();
                    this.userManager.createNew(user);
                    console.log('---Đăng kí thành công---');
                    break;
                }
            }
        } while (choice != 0);
    };
    return LoginMenu;
}());
exports.LoginMenu = LoginMenu;
