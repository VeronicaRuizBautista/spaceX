import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets,
    paginationCapsules,
    paginationCores,
} from "./modulesComponents/pagination.js";



let paginacion = document.querySelector("#paginacion");
paginacion.innerHTML = ""
paginacion.append(await paginationRockets())

let rockets = document.querySelector("#rockets")
rockets.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
})

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

let cores = document.querySelector("#cores")
cores.addEventListener("click", async(e)=>{
    console.log("hi")
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})