"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const githubUser_1 = __importDefault(require("./githubUser"));
const fetchur_1 = __importDefault(require("./cpc/fetchur"));
class Github {
    constructor(token) {
        this.token = '';
        this.token = token;
        return this;
    }
    getUser(username) {
        return new Promise(async (resolve, reject) => {
            const response = await (0, fetchur_1.default)(`https://api.github.com/users/${username}`, {
                headers: {
                    Authorization: `token ${this.token}`
                }
            });
            const data = await response.json();
            if (response.status !== 200) {
                console.error(data);
                reject(data);
            }
            else {
                resolve(new githubUser_1.default(data));
            }
        });
    }
}
exports.default = Github;
