export const getAllRoadster = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config)
    let data = await res.json();
    return data;
}

export const getAllRoadsterId = async() =>{
    let res = await fetch(`https://api.spacexdata.com/v4/roadster/`)
    let data = await res.json()
    console.log(data)
    return data;
}