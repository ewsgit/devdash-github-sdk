import GithubUser from "./githubUser.js";
import GithubRepository from "./githubRepository.js";

export default class GithubAuthenticatedUser extends GithubUser {
  getAllRepos(): Promise<GithubRepository[]> {
    return new Promise( ( resolve, reject ) => {
      return resolve( [
        new GithubRepository("")
      ] )
    } )
  }
}