import {
  GET_NEWS
 } from '../types';

 export default function(state={}, action){
   switch(action.type){
     case GET_NEWS:
     return {...state, articles: action.payload }
     break;
     default:
       return state;
    }

 }