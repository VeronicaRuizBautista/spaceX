export class capsules extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.capsule();
    }
    async capsule(){
        const bdata = await fetch("https://api.spacexdata.com/v4/capsules")
        const data = await bdata.json();
        this.renderData(data);
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/report.css">
            <script src="./js/main.js"></script>`;
            let content = `${style}`;
            data.forEach(val =>{
                content += `
                <div class="containerComponente">
                    <div class="subtittle">
                        <h3>Id: ${val.id}</h3>
                    </div>
                    <p> <span>Reuse Cont: </span> ${val.reuse_count}</p>
                    <p><span>Water Landings: </span> ${val.water_landings}</p>
                    <p><span>Land Landings: </span> ${val.land_landings}</p>
                    <p><span>Last Update: </span>${val.last_update}</p>
                    <p><span>Launches: </span>${val.launches}</p>
                    <p><span>Serial: </span> ${val.serial}</p>
                    <p><span>Status: </span> ${val.status}</p>
                    <p><span>Type: </span> ${val.type}</p>
                </div>
            `
            })
        this.shadowRoot.innerHTML = content;
        }
        
}

export class titulocapsules extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        const style = `
        <link rel="stylesheet" href="../css/report.css">
        <script src="./js/main.js"></script>`;
        let content = `${style}`;
        content += `
        <h1>Capsules</h1>`
        this.shadowRoot.innerHTML = content;
    }
}

customElements.define("titulo-capsule" , titulocapsules)
customElements.define("my-capsule" , capsules)

//starlink
export class starlink extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        console.log(":(");
    }
    connectedCallback(){
        this.starlink();
    }
    async starlink(){
        const bdata = await fetch("https://api.spacexdata.com/v4/starlink")
        const data = await bdata.json();
        this.renderData(data);
        console.log("dii")
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/report.css">`;
            let content = `${style}`;
            data.forEach(val =>{
                let dic=val.spaceTrack
                for (let key in dic) {
                    content += `
                    <div class="containerComponente">
                        <div class="subtittle">
                            <h3>Id: ${dic.OBJECT_ID}</h3>
                        </div>
                        <p> <span>CCSDS OMM VERS: </span> ${dic.CCSDS_OMM_VERS}</p>
                        <p><span>Comment: </span> ${dic.COMMENT}</p>
                        <p><span>Creation Date: </span> ${dic.CREATION_DATE}</p>
                        <p><span>Object Name: </span>${dic.OBJECT_NAME}</p>
                        <p><span>Center Name: </span>${dic.CENTER_NAME}</p>
                        <p><span>Mean Element Theory: </span>${dic.MEAN_ELEMENT_THEORY}</p>
                    </div>
                    `;
                }
            })
            this.shadowRoot.innerHTML = content;
            console.log("lloro")
        }
}
customElements.define("my-starlink" , starlink)

export class tituloStarlink extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        const style = `
        <link rel="stylesheet" href="../css/report.css">
        <script src="./js/main.js"></script>`;
        let content = `${style}`;
        content += `
        <h1>Starlink</h1>`
        this.shadowRoot.innerHTML = content;
    }
}

customElements.define("titulo-starlink" , tituloStarlink)



//chips
export class chips extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.chips();
    }
    async chips(){
        const bdata = await fetch("https://api.spacexdata.com/v4/ships")
        const data = await bdata.json();
        this.renderData(data);
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/report.css">
            <script src="./js/main.js"></script>`;
            let content = `${style}`;
            data.forEach(val =>{
                content += `
                <div class="containerComponente">
                    <div class="subtittle">
                        <h3>Legacy Id: ${val.legacy_id}</h3>
                    </div>
                    <p><span>Type: </span> ${val.type}</p>
                    <p><span>Roles: </span> ${[val.roles]}</p>
                    <p><span>Imo: </span> ${val.imo}</p>
                    <p><span>Mass kg: </span>${val.mass_kg}</p>
                    <p><span>Mass lbs: </span>${val.mass_lbs}</p>
                    <p><span>Year built: </span> ${val.year_built}</p>
                    <p><span>Home Port: </span> ${val.home_port}</p>
                </div>
            `
            })
        this.shadowRoot.innerHTML = content;
        }
        
}

export class titulochips extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        const style = `
        <link rel="stylesheet" href="../css/report.css">
        <script src="./js/main.js"></script>`;
        let content = `${style}`;
        content += `
        <h1>Ships</h1>`
        this.shadowRoot.innerHTML = content;
    }
}

customElements.define("titulo-chips" , titulochips)
customElements.define("my-chips" , chips)


//Cores

export class cores extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.cores();
    }
    async cores(){
        const bdata = await fetch("https://api.spacexdata.com/v4/cores")
        const data = await bdata.json();
        this.renderData(data);
    }
        renderData(data){
            const style = `
            <link rel="stylesheet" href="../css/report.css">
            <script src="./js/main.js"></script>`;
            let content = `${style}`;
            data.forEach(val =>{
                content += `
                <div class="containerComponente">
                    <div class="subtittle">
                        <h3>Id: ${val.id}</h3>
                    </div>
                    <p><span>Last Update: </span>${val.last_update}</p>
                    <p><span>Launches: </span>${[val.launches]}</p>
                    <p><span>Serial: </span> ${val.serial}</p>
                    <p><span>Status: </span> ${val.status}</p>
                </div>
            `
            })
        this.shadowRoot.innerHTML = content;
        }
        
}

export class titulocores extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"});
        const style = `
        <link rel="stylesheet" href="../css/report.css">
        <script src="./js/main.js"></script>`;
        let content = `${style}`;
        content += `
        <h1>Cores</h1>`
        this.shadowRoot.innerHTML = content;
    }
}

customElements.define("titulo-cores" , titulocores)
customElements.define("my-cores" , cores)
