import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
import { 
    nameRockets 
} from "./title.js";
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket
} from "./information.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./inform.js";
import { 
    imageRockets 
} from "./card.js";
import { imagen } from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "../modulesComponents/progressBar.js";


const getRocketsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";

    let Rocket = await getAllRocketsId(e.target.id);
    console.log(Rocket);

    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    let [a1,a2,a3,a4] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

//capsule
import {
    getAllCapsulesId,
    getAllCapsules
 } from "../modules/capsule.js";
import { 
    informationCapsule,
    information2Capsule
 } from "./information.js";

const getCapsulesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Capsule = await getAllCapsulesId(e.target.id)

    await nameRockets("Capsule")
    await imagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbt7vhhz3j_19auW2HorH1zwfVpfmaQx2IjoKDlbWf7kLqfVSjOpwwf_OWyzXNCSnJKo&usqp=CAU")
    await informationCapsule(Capsule.id, Capsule.type, Capsule.last_update)
    await information2Capsule(Capsule.serial, Capsule.water_landings, Capsule.status)
}

export const paginationCapsules = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

//cores
import { 
    getAllCores,
    getAllCoresId
} from "../modules/cores.js";
import { 
    informationCores,
    information2Cores
 } from "./information.js";

const getCoresId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCores(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Cores = await getAllCoresId(e.target.id)

    await nameRockets("Cores")
    await imagen("https://www.infoespacial.com/images/showid2/5224144?w=400&mh=300")
    await informationCores(Cores.id, Cores.last_update)
    await information2Cores(Cores.serial, Cores.status)
}

export const paginationCores = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCoresId)
    div.appendChild(start);
    docs.forEach((val,) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCoresId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}


//Ships
import { 
    getAllShips,
    getAllShipsId
 } from "../modules/ships.js";
import { 
    informationShips,
    information2Ships
 } from "./information.js";

const getShipsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationShips(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Ships = await getAllShipsId(e.target.id)

    await nameRockets("Ships")
    await imagen("https://space-offshore.com/wp-content/uploads/2020/05/ocisly-768x543.jpg")
    await informationShips(Ships.id, Ships.type, Ships.roles)
    await information2Ships(Ships.legacy_id, Ships.imo, Ships.home_port)
}

export const paginationShips = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllShips(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getShipsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getShipsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getShipsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

//starlink
import { 
    getAllStarlink,
    getAllStarlinkId
 } from "../modules/starlink.js";
import { 
    informationStarlink,
    information2Starlink
 } from "./information.js";

const getStarlinkId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationStarlink(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Starlink = await getAllStarlinkId(e.target.id)
    console.log(typeof Starlink)
    // for (let key in Starlink){
    //     await informationStarlink(Starlink.OBJECT_ID, Starlink.CCSDS_OMM_VERS, Starlink.COMMENT, Starlink.CREATION_DATE)
    //     await information2Starlink(Starlink.OBJECT_NAME, Starlink.CENTER_NAM, Starlink.MEAN_ELEMENT_THEORY)
    // }

    await nameRockets("Starlink")
    await imagen("https://upload.wikimedia.org/wikipedia/commons/9/91/Starlink_Mission_%2847926144123%29.jpg")
}

export const paginationStarlink = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllStarlink(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getStarlinkId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getStarlinkId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getStarlinkId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

//crew
import { 
    getAllCrew,
    getAllCrewId
 } from "../modules/crew.js";
import { 
    informationCrew,
    information2Crew
 } from "./information.js";

const getCrewId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrew(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Crew = await getAllCrewId(e.target.id)

    await nameRockets("Crew")
    await imagen("https://i.insider.com/5fac51bd144744001858141b?width=700")
    await informationCrew(Crew.id, Crew.agency, [Crew.launches])
    await information2Crew(Crew.name, Crew.status)
}

export const paginationCrew = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrew(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCrewId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

//company
import { 
    getAllCompany,
    getAllCompanyId
 } from "../modules/compan_info.js";
import { 
    informationCompany,
    information2Company
 } from "./information.js";

const getCompanyId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCompany(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Company = await getAllCompany()

    await nameRockets("Company")
    await imagen("https://www.spacex.com/static/images/locations/kennedy.jpg")
    await informationCompany(Company.headquarters, Company.links, Company.summary)
    await information2Company(Company.name, Company.founder, Company.founded, Company.employees, Company.vehicles, Company.coo, Company.cto_propulsion)
}

export const paginationCompany = async(page=1, limit=1)=>{  
     
    let docs= await getAllCompany()
    console.log(typeof docs)
    let pagingCounter = 1
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    let a = document.createElement("a");
    a.setAttribute("href","#");
    a.textContent = pagingCounter;
    a.addEventListener("click", getCompanyId)
    div.appendChild(a);
    console.log(div);
    let [a1] = div.children
    a1.click();
    return div;
}

//roadster
import { 
    getAllRoadster,
    getAllRoadsterId
 } from "../modules/roadster.js";
import { 
    informationRoadster,
    information2Roadster
 } from "./information.js";

const getRoadsterId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationRoadster(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Capsule = await getAllRoadsterId()

    await nameRockets("Roadster")
    await imageRockets([Capsule.flickr_images])
    await informationRoadster(Capsule.name, Capsule.details, Capsule.launch_date_utc, Capsule.launch_date_unix)
    await information2Roadster(Capsule.id, Capsule.wikipedia, Capsule.video)
}

export const paginationRoadster = async(page=1, limit=1)=>{    
    let docs= await getAllRoadster()
    console.log(typeof docs)
    let pagingCounter = 1
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    let a = document.createElement("a");
    a.setAttribute("href","#");
    a.textContent = pagingCounter;
    a.addEventListener("click", getRoadsterId)
    div.appendChild(a);
    console.log(div);
    let [a1] = div.children
    a1.click();
    return div;
}

//payloads
import { 
    getAllPayloads,
    getAllPayloadsId
 } from "../modules/payloads.js";
import { 
    informationPayloads,
    information2Payloads
 } from "./information.js";

const getPayloadsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationPayloads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__1 = document.querySelector(".section__information__1")
    section__information__1.innerHTML = ""
    let section__information__2 = document.querySelector(".section__information__2")
    section__information__2.innerHTML = ""
    let section__information__3 = document.querySelector(".section__information__3")
    section__information__3.innerHTML = ""

    let Payloads = await getAllPayloadsId(e.target.id)

    await nameRockets("Payloads")
    await imagen("https://www.nasaspaceflight.com/wp-content/uploads/2023/04/T7-labeled-watermarked.jpg")
    await informationPayloads(Payloads.name, Payloads.type, Payloads.reused)
    await information2Payloads(Payloads.id, Payloads.reference_system, Payloads.regime)
}

export const paginationPayloads = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllPayloads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getPayloadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getPayloadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getPayloadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}