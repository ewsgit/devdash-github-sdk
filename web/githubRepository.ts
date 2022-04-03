export default class GithubRepository {
  repoData: {
    author: string
  }
  constructor(repoData: any) {
    this.repoData = repoData
  }
}