
let url = "http://omdbapi.com/?t=jaws&apikey=123456&page=5"


// const queryStingExtract = url => {
//     let queryStrValuePairs = {}
//     let urlQueryStr = url.substring(url.indexOf('?') + 1)

//     let queries = urlQueryStr.split('&')

//     queries.forEach( query => {
//         let querySplit = query.split('=')
//         obj[querySplit[0]] = queryKeysAndValues[1]
//     })
//     return queryKeysAndValues
// }


function parseQueryString(url) {
    let queryString = url.substring(url.indexOf('?')+1)
    console.log(new URLSearchParams(queryString))
}