import axios from 'axios'
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES'
export const ORDER_BY_TYPEDIET = 'ORDER_BY_TYPEDIET'
export const ORDER_BY_SCORE = 'ORDER_BY_SCORE'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_BY_ID = 'GET_BY-ID'
export const GET_TYPE_DIET = 'GET_TYPE_DIET'
export const CREATE_RECIPE = 'CREATE_RECIPE'
export const ORDER_BY_ALPHABETIC = "ORDER_BY_ALPHABETIC"
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const CLEAN_DETAIL = "CLEAN_DETAIL"

const apiUrl = "https://app-food-deploy.herokuapp.com"

export function getAllRecipes(){
    return async (dispatch) => {
        let json = await axios.get(`${apiUrl}/recipes/getAll`)
       
        return dispatch({ // atraves del dispatch vamos a mandar toda la info hacia el reducer 
            type: GET_ALL_RECIPES, 
            payload: json.data
        })
    }
}

export function orderByTypeDiet(payload){
    return {
        type: ORDER_BY_TYPEDIET,
        payload
    } // le pasa payload por parametro
}


export function orderByScore(payload){
    return {
        type: ORDER_BY_SCORE,
        payload
    }
}

export function orderByAlphabetic(payload){
    return{
        type: ORDER_BY_ALPHABETIC,
        payload
    }
}

export function getByName(title){
    return async (dispatch)=>{
        let jsonName = await axios.get(`${apiUrl}/recipes?title=${title}`)
        return dispatch({
            type: GET_BY_NAME,
            payload: jsonName.data
        })
    }
}

export function getById(id){
    return async(dispatch)=>{
        let jsonId = await axios.get(`${apiUrl}/recipes/${id}`) 
        return dispatch({
            type: GET_BY_ID,
            payload: jsonId.data
        })
    }
}

export function getTypeDiet(){
    return async(dispatch)=>{
        let jsonTypeDiet = await axios.get(`${apiUrl}/diets/`)
        return dispatch({
            type: GET_TYPE_DIET,
            payload: jsonTypeDiet.data
        })
    }
}


export function postRecipe (payload){
    return async () => {
        const recip = await axios.post(`${apiUrl}/recipes/post`, payload) 
        return {
            type: CREATE_RECIPE,
            payload: recip.data
        }
    } 
   
}

export function detailClean (){
    return{
        type:CLEAN_DETAIL
    }
}







