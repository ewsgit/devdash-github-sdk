import GithubRepository from "./githubRepository";
import GithubGist from "./githubGist";
export default class GithubUser {
    userData;
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
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${this.userData.login}/repos`)
                .then(res => res.json())
                .then(res => {
                resolve([...res.map((repo) => new GithubRepository(repo))]);
            });
        });
    }
    getPublicGists() {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${this.userData.login}/gists`)
                .then(res => res.json())
                .then(res => {
                resolve([...res.map((gist) => new GithubGist(gist))]);
            });
        });
    }
}
