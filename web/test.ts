import Github from "./github.js"
import GithubUser from "./githubUser.js"

function run_tests( github: Github ) {
  TEST( "", () => {
    github.getUser( "ewsgit" ).then( ( user: GithubUser ) => {
      console.log( user.getLocation() )
    } )
  } )

}

function TEST( expectation: any, methodToRun: () => any ) {
  if ( typeof expectation === "string" ) {
    if ( typeof methodToRun() === "string" ) {
      console.log( "[UNCHECKABLE] String passed." )
    } else {
      console.error( "[ERROR] String Does Not Match." )
      debugger
      return
    }
  }
  if ( typeof expectation === "object" ) {
    if ( typeof methodToRun() === "object" ) {
      let pass = true;
      for ( let i = 0; i < Object.keys( methodToRun ).length; i++ ) {
        if ( typeof Object.keys( methodToRun )[ i ] === Object.keys( expectation )[ i ] ) {

        } else {
          pass = false;
        }
      }
      if ( pass !== true ) {
        console.error( "[ERROR] Object does not match" )
        debugger
        return
      } else {
        console.log( "[SUCCESS] Object matches expectation" )
      }
    }
  }
}


run_tests( new Github( "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" ) )