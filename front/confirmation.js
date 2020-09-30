const url = window.location.search;
const urlObject = new URLSearchParams(url);
const orderId = urlObject.get("orderId");
const total = urlObject.get("total");
console.log(orderId)
document.getElementById("validation1").textContent = orderId
document.getElementById("total2").textContent = total




