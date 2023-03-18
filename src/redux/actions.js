// http://www.omdbapi.com/?i=tt3896198&apikey=a07e1730
// http://www.omdbapi.com/?apikey=a07e1730&s=batman

export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const GET_DETAILS = 'GET_DETAILS'

export const searchMovies = (text) => (dispatch) => {
    fetch('http://www.omdbapi.com/?apikey=a07e1730&s='+text)
    .then( res => res.json())
    .then(data => {
        dispatch({
            type : SEARCH_MOVIES,
            payload : data.Search
        })   
    })
    .catch(err => {
        console.log(err);
    })
}

export const getDetails = (id) => (dispatch) => {
    console.log('action:',id)
    fetch('http://www.omdbapi.com/?apikey=a07e1730&i='+id)
    .then( res => res.json())
    .then(data => {
        dispatch({
            type : GET_DETAILS,
            payload : data
        })   
    })
    .catch(err => {
        console.log(err);
    })
}