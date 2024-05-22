export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

//capsule
export const informationCapsule = async(id, info1, info2) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Id: ${id}</h3>
        </div>
        <p> <span>Type: </span> ${info1}</p>
        <p><span>Last Update: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Capsule = async(info0, info1, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Serial: ${info0}</h3>
        </div>
        <p> <span>Water Landings: </span> ${info1}</p>
        <p><span>Status: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//cores
export const informationCores = async(id, info2) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Id: ${id}</h3>
        </div>
        <p><span>Last Update: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Cores = async(info0, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Serial: ${info0}</h3>
        </div>
        <p><span>Status: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//Ships
export const informationShips = async(id, info1, info2) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
    <div class="subtittle">
        <h3>Id: ${id}</h3>
    </div>
    <p><span>Type: </span> ${info1}</p>
    <p><span>Roles: </span> ${[info2]}</p>
</div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Ships = async(info0, info1, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Legacy Id: ${info0}</h3>
        </div>
        <p><span>Imo: </span> ${info1}</p>
        <p><span>Home Port: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//Starlink
export const informationStarlink = async(dic1) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>CCSDS OMM VERS: ${dic1.CCSDS_OMM_VERS}</h3>
        </div>
        <p> <span>Comment: </span> ${dic1.COMMENT}</p>
        <p><span>Creation Date: </span> ${dic1.CREATION_DATE}</p>
        <p><span>Object Id: </span> ${dic1.OBJECT_ID}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Starlink = async(info0, info1, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>id: ${info0}</h3>
        </div>
        <p><span>Version: </span>${info1}</p>
        <p><span>Launch: </span>${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}


//crew
export const informationCrew = async(id, info1, info2) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Id: ${id}</h3>
        </div>
        <p><span>Agency: </span> ${info1}</p>
        <p><span>Launches: </span>${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}
export const information2Crew = async(info0, info1,) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Name: ${info0}</h3>
        </div>
        <p><span>Status: </span> ${info1}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//capsule
export const informationCompany = async(dic1, dic2, summary) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>${summary}</h3>
        </div>
        <p> <span>city: </span> ${dic1.city}</p>
        <p><span>State: </span> ${dic1.state}</p>
        <p><span>Address: </span> ${dic1.address}</p>
        <br>
        <p> <span>Website: </span><a href= ${dic2.website}>Website</a></p>
        <p><span>Flickr: </span> <a href="${dic2.flickr}">Flickr</a></p>
        <p><span>Twitter: </span><a href="${dic2.twitter}">Twitter</a></p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Company = async(info0, info1, info2, info3, info4, info5, info6) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>${info0}</h3>
        </div>
        <p> <span>founder: </span> ${info1}</p>
        <p><span>founded: </span> ${info2}</p>
        <p> <span>employees: </span> ${info3}</p>
        <p><span>vehicles: </span> ${info4}</p>
        <p><span>coo: </span> ${info5}</p>
        <p><span>cto_propulsion: </span> ${info6}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//roadster
export const informationRoadster = async(id, details, info1, info2) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Name: ${id}</h3>
        </div>
        <p> <span>${details}</span> </p>
        <p> <span>launch_date_utc: </span> ${info1}</p>
        <p><span>launch_date_unix: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Roadster = async(info0, info1, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Id: ${info0}</h3>
        </div>
        <p> <span>Wikipedia: </span> <a href= ${info1}>wikipedia</a></p>
        <p><span>Video: </span> <a href= ${info2}>youtube</a></p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}


//Payloads
export const informationPayloads = async(id, info1, info2) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Name: ${id}</h3>
        </div>
        <p> <span>Type: </span> ${info1}</p>
        <p><span>Reused: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Payloads = async(info0, info1, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="snameubtittle">
            <h3>Id: ${info0}</h3>
        </div>
        <p> <span>Reference System: </span> ${info1}</p>
        <p><span>Regime: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//Launchpads
export const informationLaunchpads = async(id, info1, info2, info3) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3> ${id}</h3>
        </div>
        <p> <span>Full Name: </span> ${info1}</p>
        <p><span>Locality: </span> ${info2}</p>
        <p><span>Details: </span> ${info3}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Launchpads = async(info0, info1, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="snameubtittle">
            <h3>Id: ${info0}</h3>
        </div>
        <p> <span>Status: </span> ${info1}</p>
        <p><span>Region: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}



//Dragons
export const informationDragons = async(dic1, description) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>Material: ${dic1.material}</h3>
        </div>
        <p> <span>Size Meters: </span> ${dic1.size_meters}</p>
        <p><span>Dev Partner: </span> ${dic1.dev_partner}</p>
        <p><span>Description: </span> ${description}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Dragons = async(info0, info1, info2, info3) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="snameubtittle">
            <h3>Name: ${info0}</h3>
        </div>
        <p> <span>Type: </span> ${info1}</p>
        <p><span>First Flight: </span> ${info2}</p>
        <p><span>Active: </span> ${info3}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//History
export const informationHistory = async(id, info1) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3> ${id}</h3>
        </div>
        <p> <span>Details: </span> ${info1}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2History = async(info0, info1) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="snameubtittle">
            <h3>Id: ${info0}</h3>
        </div>
        <p> <span>Article: </span><a href= ${info1.article}>Pagina Web</a></p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

//Landingpads
export const informationLandingpads = async(id, info1) =>{
    let description__item = document.querySelector("#description__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="subtittle">
            <h3>${id}</h3>
        </div>
        <p> <span>Details: </span> ${info1}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}

export const information2Landingpads = async(info0, info1, info2) =>{
    let description__item = document.querySelector(".information__item")
    let div = document.createElement("div")
    const style = `<link rel="stylesheet" href="../css/report.css">`;
    let content = `${style}`;
    content +=`
    <div class="containerComponente">
        <div class="snameubtittle">
            <h3>Id: ${info0}</h3>
        </div>
        <p> <span>Name: </span> ${info1}</p>
        <p> <span>Status: </span> ${info2}</p>
    </div>
`
    div.innerHTML =content
    description__item.append(div)
}