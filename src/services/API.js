import {errormess} from "../ui.js"
import {grid} from "../main.js"
const url = "http://localhost:3000";
 export async function request(method, route, body=null){
       const option= { 
        methode:method,
        headers : {"Content-Type": "application/json"}
        };
 if(body!=null){
  option.body = JSON.stringify(body);
 }

 try{
    const response = await fetch(`${url}${route}`,option);
     if(!response.ok){
      throw new Error ("data not found");
     }

  if(method==="DELETE"){
    return;
  }
  return response.json();
  
 }catch(error){ 
 errormess(grid)
 }
 }

 export async function getCreatures(params){
     const get = await request("GET",params);
     return Promise.all(get) ;
 }