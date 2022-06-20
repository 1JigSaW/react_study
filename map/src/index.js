import React from "react";
import ReactDOM from "react-dom";

const num = [1,2,3,4,5]
const res = num.map(function(item) {
    return item * item
})
console.log(res)

const names = ["aa", "bb", "cc", "dd"]
const res2 = names.map(function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
})

console.log(res2)

const pokemon = ["Bul", "Cha", "Squ"]
const res3 = pokemon.map((one) => {
    return "<p>" + one + "</p>";
})
ReactDOM.render(res3.join(" "), document.getElementById("root"))