export default function fetchur( url: string, options?: RequestInit ): Promise<Response> {
  return new Promise( ( resolve, reject ) => {
    import("./cpc/fetchur" + typeof window === 'undefined' ? 'Node' : 'Web' + ".js").then( fetchurTMP => {
      // @ts-ignore
      fetchurTMP( url, options ).then( res => resolve( res ) )
    } );
  } )
}