export const getAllLandingpads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config)
    let data = await res.json();
    console.log("gii",data)
    return data;
}

export const getAllLandingpadsId = async(id) =>{
    let res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`)
    let data = await res.json()
    console.log(data)
    return data;
}