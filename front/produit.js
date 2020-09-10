const url = window.location.search;
const urlObject = new URLSearchParams(url);
const id = urlObject.get("id");
if(!id){
    window.location.href = "index.html"
}
console.log(id)
if(!localStorage.getItem("panier")){
    localStorage.setItem("panier", JSON.stringify([]))
}



fetch("http://localhost:3000/api/teddies/" + id)
.then(reponse => reponse.json())
.then(reponse => {
    teddy(reponse)
})

function teddy(element){    
    const teddyDiv = document.getElementById("ours")
    const article = document.createElement("article")
    const paragraphe = document.createElement("p")
    const description = document.createElement("p")
    const image = document.createElement("img")
    const select = document.createElement("select")
    const button = document.createElement("button")
    image.classList.add("image")                   
    const prix = document.createElement("p") 
    paragraphe.textContent = element.name
    description.textContent = element.description
    image.src = element.imageUrl
    prix.textContent = element.price
    element.colors.forEach(element => {
    const option = document.createElement("option")
    option.textContent = element
    select.appendChild(option)    
    }); 
    button.addEventListener("click", function(){
        const panier = JSON.parse(localStorage.getItem("panier"))
        panier.push(element)
        localStorage.setItem("panier", JSON.stringify(panier))
        window.location.href = "panier.html"
    })
    button.textContent = "ajouter au panier"                 
    article.appendChild(paragraphe)
    article.appendChild(image)
    article.appendChild(description)
    article.appendChild(select)
    article.appendChild(prix)
    article.appendChild(button)         
    teddyDiv.appendChild(article)
}