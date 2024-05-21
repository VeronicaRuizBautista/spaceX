import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets,
    paginationCapsules,
    paginationCores,
    paginationShips,
    paginationStarlink,
    paginationCrew,
    paginationCompany,
    paginationRoadster,
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
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})

let ships = document.querySelector("#ships")
ships.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationShips())
})

//let starlink = document.querySelector("#starlink")
//starlink.addEventListener("click", async(e)=>{
//    e.preventDefault()
//    paginacion.innerHTML = ""
//    paginacion.append(await paginationStarlink())
//})


let crew = document.querySelector("#crew")
crew.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrew())
})

let company = document.querySelector("#company")
company.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationCompany())
})

let roadster= document.querySelector("#roadster")
roadster.addEventListener("click", async(e)=>{
    e.preventDefault()
    paginacion.innerHTML = ""
    paginacion.append(await paginationRoadster())
})

