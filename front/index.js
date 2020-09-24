const teddyDiv = document.getElementById("teddy")


fetch("http://localhost:3000/api/teddies")
.then(reponse => reponse.json())
.then(reponse => {
    teddy(reponse)
})
.catch(erreur=>{
    teddyDiv.innerHTML = "<h2>Oups le serveur ne répond pas veuillez réessayer plus tard</h2>"
})
function teddy(teddies){
    console.log(teddies)
    
    teddies.forEach(element => {
        const article = document.createElement("article")
        const paragraphe = document.createElement("p")
        const image = document.createElement("img")
        image.classList.add("image")        
        const prix = document.createElement("p")
        const bouton = document.createElement("button")
        const lien = document.createElement("a")
        lien.textContent = "voir le produit"
        lien.href = "produit.html?id="+element._id
        paragraphe.textContent = element.name
        image.src = element.imageUrl
        prix.textContent = element.price
        bouton.appendChild(lien)        
        article.appendChild(paragraphe)
        article.appendChild(image)
        article.appendChild(prix)
        article.appendChild(bouton) 
        teddyDiv.appendChild(article)
    });
}