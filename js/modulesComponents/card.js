export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let div
    flickr_images.forEach(val => {
        div = document.createElement("div");
        div.classList.add("carousel__item")
        const style = `<link rel="stylesheet" href="../css/report.css">`;
        let content = `${style}`;
        content +=`
        <img class="imgconsultas" src= ${val}>
    `
        div.innerHTML =content
    });
    section__image.append(div)
    // <div class="carousel__item">
    //     <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">
    // </div>
}

export const imagen = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", flickr_images)
    img.setAttribute("referrerpolicy", "no-referrer")
    div.append(img)
    section__image.append(div)
}