import { getCreatures} from "./services/API.js";
import { afficherCreatures, show,setcreatures } from "./ui.js";
 export let grid = document.getElementById("grid")
    grid.innerHTML="<p> chargement ... </p>"
const creatures =  await getCreatures("/creatures")
console.log(creatures)
afficherCreatures(creatures,grid)
const creatures =  await getCreatures("/creatures/?type=")



