export const getAllPayloads = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/payloads/query", config)
    let data = await res.json();
    return data;
}

export const getAllPayloadsId = async(id) =>{
    let res = await fetch(`https://api.spacexdata.com/v4/payloads/${id}`)
    let data = await res.json()
    console.log(data)
    return data;
}