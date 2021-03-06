import GithubRepository from "./githubRepository";
import GithubGist from "./githubGist"

export default class GithubUser {
  userData: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: "User";
    site_admin: false;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  };

  constructor(userData: any) {
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

  getPublicRepos(): Promise<GithubRepository[]> {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${this.userData.login}/repos`)
        .then(res => res.json())
        .then(res => {
          resolve([...res.map((repo: object) => new GithubRepository(repo))]);
        });
    });
  }

  getPublicGists(): Promise<GithubGist[]> {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${this.userData.login}/gists`)
        .then(res => res.json())
        .then(res => {
          resolve([...res.map((gist: object) => new GithubGist(gist))]);
        });
    });
  }
}
