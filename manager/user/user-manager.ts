import {IManager} from "../i-manager";
import {User} from "../../model/user";
import {IUserManager} from "./i-user-manager";
import {Role} from "../../model/role";

export class UserManager implements IUserManager {
    private static userList: User[] = [];
    private static id: number = 2;

    constructor() {
        let admin = new User('admin', '12345678', 'admin@gmail.com', 'ADMIN','0999999999',20);
        admin.id = UserManager.id;
        admin.role = Role.ADMIN;
        UserManager.userList.push(admin);
    }

    createNew(t: User): void {
        UserManager.id++;
        // neu ma getId thi bi loi
        t.id = UserManager.id
        t.role = Role.USER;
        UserManager.userList.push(t)
    }

    deleteById(id: number): void {
        let index = this.findById(id);
        if (index != -1) {
            UserManager.userList.splice(index, 1);
        }
    }

    display(): User[] {
        return UserManager.userList;
    }

    updateBuId(id: number, t: User): void {
        let index = this.findById(id);
        if (index != -1) {
            UserManager.userList[index] = t;

        }
    }

    findByUserName(userName: string): User | null {
        for (let user of UserManager.userList) {
            if (userName == user.userName) {
                return user;
            }
        }
        return null;
    }


    findById(id: number): number {
        let index = -1;
        for (let i = 0; i < UserManager.userList.length; i++) {
            if (UserManager.userList[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }

    finByEmail(email: string): User | null {
        for (let user of UserManager.userList) {
            if (email == user.email) {
                return user;
            }
        }
        return null;
    }

    Login(userName: string, password: string): User | null {
        for (let user of UserManager.userList) {
            if (userName == user.userName && password == user.password) {
                return user;
            }
        }
        return null;
    }

    finByPhoneNumber(phoneNumber: string): User | null {
        for (let user of UserManager.userList) {
            if (phoneNumber == user.phoneNumber) {
                return user;
            }
        }
        return null;
    }

    // checkAge(age: number): User | null {
    //     return this.
    // }
}

