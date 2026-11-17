import { getcharacters} from "./services/API.js";
import { afficherCreatures, show,setcreatures } from "../ui.js";

const btncharger = document.getElementById("charger-plus");
let offset =0;
btncharger.addEventListener("click",async()=>{
    offset +=20;
    const nouvellecartes = await getcharacters(offset);
    console.log(nouvellecartes);
data = [...data,...nouvellecartes];

setcreatures(data);
afficherCreatures(data)

});


try{

let data = await getcharacters();
setcreatures(data);
afficherCreatures(data);
show();

}catch(error){
    console.error(error);
}