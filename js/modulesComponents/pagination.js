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

//launchpads
import { 
    getAllLaunchpads,
    getAllLaunchpadsId
 } from "../modules/launchpads.js";
import { 
    informationLaunchpads,
    information2Launchpads
 } from "./information.js";

const getLaunchpadsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)))
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

    let Launchpads = await getAllLaunchpadsId(e.target.id)

    await nameRockets("Launchpads")
    await imagen("data:image/jpeg;base64,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")
    await informationLaunchpads(Launchpads.name, Launchpads.full_name, Launchpads.locality, Launchpads.details)
    await information2Launchpads(Launchpads.id, Launchpads.status, Launchpads.region)
}

export const paginationLaunchpads = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunchpads(page, limit)
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchpadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchpadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchpadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}

//dragons
import { 
    getAllDragons,
    getAllDragonsId
 } from "../modules/dragons.js";
import { 
    informationDragons,
    information2Dragons
 } from "./information.js";

const getDragonsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationDragons(Number(e.target.dataset.page)))
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

    let Dragons = await getAllDragonsId(e.target.id)

    await nameRockets("Dragons")
    await imagen("https://media.es.wired.com/photos/64f76b704886e9e59be44b06/master/w_2560%2Cc_limit/Dragon%2520SpaceX%2520crew-6.jpg")
    await informationDragons(Dragons.heat_shield, Dragons.description)
    await information2Dragons(Dragons.name, Dragons.type, Dragons.first_flight, Dragons.active)
}

export const paginationDragons = async(page=1, limit=10)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getDragonsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getDragonsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getDragonsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    return div;
}