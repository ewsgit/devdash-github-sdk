import GithubUser from "./githubUser.js";
import GithubAuthenticatedUser from "./githubAuthenticatedUser.js";
export default class Github {
    token = '';
    constructor(token) {
        this.token = token;
        return this;
    }
    getUser(username) {
        return new Promise(async (resolve, reject) => {
            const response = await fetch(`https://api.github.com/users/${username}`, {
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
                resolve(new GithubUser(data));
            }
        });
    }
    getAuthenticatedUser() {
        return new Promise(async (resolve, reject) => {
            const response = await fetch(`https://api.github.com/user`, {
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
                resolve(new GithubAuthenticatedUser(data));
            }
        });
    }
}
