import { LOAD_CATEGORIES, CHANGE_CATEGORY } from "./types_act";
import * as ReadableAPI from '../utils/ReadableAPI';


export function fetchCategories() {
    return (dispatch) => {    
      ReadableAPI.getAllCategories().then(
        (resp) => dispatch(getAllCategories(resp.categories)
      ))
    }
}

export function loadCategories (categories){
    return{
        type: LOAD_CATEGORIES,
        categories
    }
}

export function changeCategory(category){
    return{
        type: CHANGE_CATEGORY,
        category
    }
}