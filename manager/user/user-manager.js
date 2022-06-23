"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var user_1 = require("../../model/user");
var role_1 = require("../../model/role");
var UserManager = /** @class */ (function () {
    function UserManager() {
        var admin = new user_1.User('admin', '12345678', 'admin@gmail.com', 'ADMIN', '0999999999', 20);
        admin.id = UserManager.id;
        admin.role = role_1.Role.ADMIN;
        UserManager.userList.push(admin);
    }
    UserManager.prototype.createNew = function (t) {
        UserManager.id++;
        // neu ma getId thi bi loi
        t.id = UserManager.id;
        t.role = role_1.Role.USER;
        UserManager.userList.push(t);
    };
    UserManager.prototype.deleteById = function (id) {
        var index = this.findById(id);
        if (index != -1) {
            UserManager.userList.splice(index, 1);
        }
    };
    UserManager.prototype.display = function () {
        return UserManager.userList;
    };
    UserManager.prototype.updateBuId = function (id, t) {
        var index = this.findById(id);
        if (index != -1) {
            UserManager.userList[index] = t;
        }
    };
    UserManager.prototype.findByUserName = function (userName) {
        for (var _i = 0, _a = UserManager.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (userName == user.userName) {
                return user;
            }
        }
        return null;
    };
    UserManager.prototype.findById = function (id) {
        var index = -1;
        for (var i = 0; i < UserManager.userList.length; i++) {
            if (UserManager.userList[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    };
    UserManager.prototype.finByEmail = function (email) {
        for (var _i = 0, _a = UserManager.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (email == user.email) {
                return user;
            }
        }
        return null;
    };
    UserManager.prototype.Login = function (userName, password) {
        for (var _i = 0, _a = UserManager.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (userName == user.userName && password == user.password) {
                return user;
            }
        }
        return null;
    };
    UserManager.prototype.finByPhoneNumber = function (phoneNumber) {
        for (var _i = 0, _a = UserManager.userList; _i < _a.length; _i++) {
            var user = _a[_i];
            if (phoneNumber == user.phoneNumber) {
                return user;
            }
        }
        return null;
    };
    UserManager.userList = [];
    UserManager.id = 2;
    return UserManager;
}());
exports.UserManager = UserManager;
