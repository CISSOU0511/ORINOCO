const url = window.location.search;
const urlObject = new URLSearchParams(url);
const id = urlObject.get("id");
// redirection sur la page index si pas d'id//
if (!id) {
    window.location.href = "index.html"
}
//Récupérer l'objet panier à partir du stockage local//
console.log(id)
if (!localStorage.getItem("panier")) {
    localStorage.setItem("panier", JSON.stringify([]))
}

const teddyDiv = document.getElementById("ours")
//appel de l'id dans le serveur local//
fetch("http://localhost:3000/api/teddies/" + id)
    .then(reponse => reponse.json())
    .then(reponse => {
        teddy(reponse)
    })
    //message d'erreur si le serveur ne répond pas//
    .catch(erreur => {
        teddyDiv.innerHTML = "<h2>Oups le serveur ne répond pas veuillez réessayer plus tard</h2>"
    })
//création des balises html//
function teddy(element) {

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
    //création du menu déroulant des options de couleurs//
    element.colors.forEach(element => {
        const option = document.createElement("option")
        option.textContent = element
        select.appendChild(option)
    });
    //création du bouton panier// 
    button.addEventListener("click", function () {
        const panier = JSON.parse(localStorage.getItem("panier"))
        panier.push(element)
        localStorage.setItem("panier", JSON.stringify(panier))
        window.location.href = "panier.html"
    })
    //ajout du bouton ajouter au panier//
    button.textContent = "ajouter au panier"
    article.appendChild(paragraphe)
    article.appendChild(image)
    article.appendChild(description)
    article.appendChild(select)
    article.appendChild(prix)
    article.appendChild(button)
    teddyDiv.appendChild(article)
}