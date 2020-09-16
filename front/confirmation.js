const url = window.location.search;
const urlObject = new URLSearchParams(url);
const orderId = urlObject.get("orderId");

console.log(orderId)