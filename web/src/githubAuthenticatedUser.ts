import GithubUser from "./githubUser";

export default class GithubAuthenticatedUser extends GithubUser {
  getAllRepos(): Promise<GithubRespoitory[]> {
    return new Promise( ( resolve, reject ) => {
      return resolve( [
        {
          author: "author"
        }
      ] )
    } )
  }
}