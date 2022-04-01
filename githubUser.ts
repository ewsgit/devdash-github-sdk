import Github from './index';

export default class GithubUser {
  github: Github;
  constructor(github: Github) {
    this.github = github;
  }
}