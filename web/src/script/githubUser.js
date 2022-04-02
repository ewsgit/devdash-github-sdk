"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GithubUser {
    constructor(userData) {
        this.userData = userData;
    }
    getRawString() {
        return JSON.stringify(this.userData);
    }
    getRawJson() {
        return this.userData;
    }
    getUsername() {
        return this.userData.login;
    }
    getName() {
        return this.userData.name;
    }
    getEmail() {
        return this.userData.email;
    }
    getLocation() {
        return this.userData.location;
    }
    getBio() {
        return this.userData.bio;
    }
    getBlogUrl() {
        return this.userData.blog;
    }
    getPublicRepos() {
        return new Promise(async (resolve, reject) => {
            // undici.request()
        });
    }
}
exports.default = GithubUser;
