import { getCreatures} from "./services/API.js";
import { afficherCreatures } from "./ui.js";
 export let grid = document.getElementById("grid")
 const allbutton = document.querySelectorAll(".callquery")

    grid.innerHTML="<p> chargement ... </p>"
let creatures =  await getCreatures("/creatures")
console.log(creatures)
afficherCreatures(creatures,grid)


  let type = document.getElementById("filters")
  type.addEventListener('click', async event=> {
    const typechosen = event.target.closest("button");
    if(!typechosen){
        return
    }
    const datatype = typechosen.dataset.type
    console.log(datatype)
     creatures =  await getCreatures(`/creatures?type=${datatype}`)
     console.log(creatures)
     afficherCreatures( creatures, grid);
         allbutton.forEach(elm=> {
          elm.classList.remove("border-ink","text-white","bg-ink");
     })
     typechosen.classList.add("border-ink","text-white","bg-ink")

     
   


  } )


