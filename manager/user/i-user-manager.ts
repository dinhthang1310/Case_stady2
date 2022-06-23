import {IManager} from "../i-manager";
import {User} from "../../model/user";

export interface IUserManager extends IManager<User>{
    findByUserName(userName : string) :User | null;

    finByEmail(email : string) : User | null;

    Login(userName : string,password : string):User| null;

    finByPhoneNumber(phoneNumber : string) : User | null;

    // checkAge(age : number) : User | null;
}