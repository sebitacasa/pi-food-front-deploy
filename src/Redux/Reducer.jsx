
import * as Action from './Actions'

const initialState = {

    allRecipes: [],
    recipes: [],
    diets:[],
    details: [], // probablemente se mejor manejarlo en forma de arreglo ya que asi va a ser mas facil el renderizado
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case Action.GET_ALL_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allRecipes:action.payload,
             
            }
        case  Action.ORDER_BY_TYPEDIET:
            const recip = state.allRecipes // nos guardamos en una const todas las recetas usando el estado
            
            //const dietFilter = action.payload === 'All' ? recip : recip?.filter(d => d.diets.find(e => e.name === action.payload))
            const dietFilter = action.payload === 'All' ? recip : recip?.filter(d => d.diets.find(e => e.name === action.payload))

            return {
                ...state,
                recipes: dietFilter,
                
               
            }
        case Action.GET_BY_ID:
                return {
                    ...state,
                    details:action.payload
                }
        case Action.ORDER_BY_SCORE:  
             let sortRec = action.payload === 'asc'? state.recipes.sort((a,b)=>{
                 if(a.healthScore > b.healthScore){
                     return 1;
                 }
                 if(b.healthScore > a.healthScore)
                 return -1;

                 return 0;
             }) : 
              state.recipes.sort((a,b)=>{
                if(a.healthScore > b.healthScore){
                    return - 1;
                }
                if(b.healthScore > a.healthScore)
                return 1;

                return 0; 
            })
            return {
                ...state,
                recipes: sortRec 
            }

        case Action.ORDER_BY_ALPHABETIC:
            let sortAlp = action.payload === 'asc' ? state.recipes.sort((a,b) => {
                if (a.title > b.title) return 1
                
                if(b.title > a.title) return -1

                return 0
            }) : 
            state.recipes.sort((a,b) => {
                if (a.title > b.title) return -1
                if (b.title > a.title) return 1

                return 0
            })
            return {
                ...state,
                recipes: sortAlp
            }
        

        case Action.GET_BY_NAME:
            return{
                ...state,
                recipes : action.payload
            }
        
        case Action.GET_TYPE_DIET:
            return{
                ...state,
                diets: action.payload
            }    
        
      
            
            
        case Action.CREATE_RECIPE:
            return{
                ...state
            }  

        case Action.CLEAN_DETAIL:
            return{
                ...state,
                details: []
            }
            
       
       


        default:
           return state;
    }
}

       


             
            