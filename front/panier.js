const panier = JSON.parse(localStorage.getItem("panier"))
document.getElementById("in-cart-items-num").textContent = panier.length
const tbody = document.getElementById("cart-tablebody")
let total = 0
panier.forEach(element => {
total += element.price
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