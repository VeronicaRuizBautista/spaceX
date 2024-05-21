import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets,
    paginationCapsules
} from "./modulesComponents/pagination.js";



let paginacion = document.querySelector("#paginacion");
paginacion.innerHTML = ""
paginacion.append(await paginationRockets())


let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    e.preventDefault()
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})