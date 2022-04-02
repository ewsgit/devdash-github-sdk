import fetch from './fetchur';
import GithubUser from "./githubUser";

export default class Github {
  token: string = '';

  constructor( token: string ) {
    this.token = token;
    return this;
  }

  getUser( username: string ): Promise<GithubUser> {
    return new Promise( async ( resolve, reject ) => {
      const response = await fetch( `https://api.github.com/users/${ username }`, {
        headers: {
          Authorization: `token ${ this.token }`
        }
      } );
      const data = await response.json();
      if ( response.status !== 200 ) {
        console.error( data )
        reject( data );
      } else {
        resolve( new GithubUser( data ) );
      }
    } )
  }
}