export const getAllCompany = async ()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({})
    }
    let res = await fetch("https://api.spacexdata.com/v4/company")
    let data = await res.json();
    return data;
}

export const getAllCompanyId = async(id) =>{
    let res = await fetch(`https://api.spacexdata.com/v4/company/${id}`)
    let data = await res.json()
    console.log(data)
    return data;
}