const panier = JSON.parse(localStorage.getItem("panier"))
document.getElementById("in-cart-items-num").textContent = panier.length
const tbody = document.getElementById("cart-tablebody")
let total = 0
let produit = []
panier.forEach(element => {
total += element.price
produit.push(element._id)
const tr = document.createElement("tr")
const tdnom = document.createElement("td")
const tdprix = document.createElement("td")
tdnom.textContent = element.name
tdprix.textContent = element.price
tr.appendChild(tdnom)
tr.appendChild(tdprix)
tbody.appendChild(tr)   
});
document.getElementById("total").textContent = total


const form = document.getElementById("contact")
form.addEventListener("submit",function(event){
    event.preventDefault()
    const contact = {}
    const nom = document.getElementById("nom").value
    const prenom = document.getElementById("prenom").value
    const adresse = document.getElementById("adresse").value
    const ville = document.getElementById("ville").value
    const email= document.getElementById("email").value
    contact.firstName = prenom
    contact.lastName = nom
    contact.address = adresse 
    contact.city = ville
    contact.email = email
    fetch("http://localhost:3000/api/teddies/order",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({products:produit,contact:contact})
    })
    .then(reponse => reponse.json())
    .then(reponse => {
        console.log(reponse)
        window.location.href = "confirmation.html?orderId=" + reponse.orderId
    })

})
