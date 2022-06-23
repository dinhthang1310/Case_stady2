"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const user_1 = require("../../model/user");
const role_1 = require("../../model/role");
class UserManager {
    constructor() {
        let admin = new user_1.User('admin', '12345678', 'admin@gmail.com', 'ADMIN', '0999999999', 20);
        admin.id = UserManager.id;
        admin.role = role_1.Role.ADMIN;
        UserManager.userList.push(admin);
    }
    createNew(t) {
        UserManager.id++;
        // neu ma getId thi bi loi
        t.id = UserManager.id;
        t.role = role_1.Role.USER;
        UserManager.userList.push(t);
    }
    deleteById(id) {
        let index = this.findById(id);
        if (index != -1) {
            UserManager.userList.splice(index, 1);
        }
    }
    display() {
        return UserManager.userList;
    }
    updateBuId(id, t) {
        let index = this.findById(id);
        if (index != -1) {
            UserManager.userList[index] = t;
        }
    }
    findByUserName(userName) {
        for (let user of UserManager.userList) {
            if (userName == user.userName) {
                return user;
            }
        }
        return null;
    }
    findById(id) {
        let index = -1;
        for (let i = 0; i < UserManager.userList.length; i++) {
            if (UserManager.userList[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }
    finByEmail(email) {
        for (let user of UserManager.userList) {
            if (email == user.email) {
                return user;
            }
        }
        return null;
    }
    Login(userName, password) {
        for (let user of UserManager.userList) {
            if (userName == user.userName && password == user.password) {
                return user;
            }
        }
        return null;
    }
    finByPhoneNumber(phoneNumber) {
        for (let user of UserManager.userList) {
            if (phoneNumber == user.phoneNumber) {
                return user;
            }
        }
        return null;
    }
}
exports.UserManager = UserManager;
UserManager.userList = [];
UserManager.id = 2;
