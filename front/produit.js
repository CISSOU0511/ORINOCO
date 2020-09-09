const url = window.location.search;
const urlObject = new URLSearchParams(url);
const id = urlObject.get("id");
console.log(id)



fetch("http://localhost:3000/api/teddies/" + id)
.then(reponse => reponse.json())
.then(reponse => {
    teddy(reponse)
})

function teddy(element){    
    const teddyDiv = document.getElementById("ours")
    const article = document.createElement("article")
    const paragraphe = document.createElement("p")
    const image = document.createElement("img")
    image.classList.add("image")                   
    const prix = document.createElement("p") 
    paragraphe.textContent = element.name
    image.src = element.imageUrl
    prix.textContent = element.price              
    article.appendChild(paragraphe)
    article.appendChild(image)
    article.appendChild(prix)         
    teddyDiv.appendChild(article)

}