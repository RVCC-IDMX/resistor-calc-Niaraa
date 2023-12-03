import { getResistorOhms } from './resistor.js';

const answer = document.querySelector(".answer")

const b0 = document.querySelector("#b0")
const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const b3 = document.querySelector("#b3")

const bands = {
    color1: "red",
    color2: "green",
    multiplier: "violet",
    tolerance: "gold"
};

const color1 = document.querySelector("#color1");

color1.addEventListener("click", (e) => {
    console.log(e.target.className.split(" "));
    const colors = e.target.className.split(" ");
    const color = colors[1];
    b0.classList.remove(bands.color1)
    b0.classList.add(color)
    bands.color1 = color
    const value = getResistorOhms(bands)
    console.log(value)
    answer.innerHTML = value

});

const color2 = document.querySelector("#color2");

color2.addEventListener("click", (e) => {
    console.log(e.target); // logs `false`
    const colors = e.target.className.split(" ");
    const color = colors[1];
    b1.classList.remove(bands.color2)
    b1.classList.add(color)
    bands.color2 = color
    const value = getResistorOhms(bands)
    console.log(value)
    answer.innerHTML = value

});

const multiplier = document.querySelector("#multiplier");

multiplier.addEventListener("click", (e) => {
    console.log(e.target); // logs `false`
    const colors = e.target.className.split(" ");
    const color = colors[1];
    b2.classList.remove(bands.multiplier)
    b2.classList.add(color)
    bands.multiplier = color
    const value = getResistorOhms(bands)
    console.log(value)
    answer.innerHTML = value

});

const tolerance = document.querySelector("#tolerance");

tolerance.addEventListener("click", (e) => {
    console.log(e.target); // logs `false`
    const colors = e.target.className.split(" ");
    const color = colors[1];
    b3.classList.remove(bands.tolerance)
    b3.classList.add(color)
    bands.tolerance = color
    const value = getResistorOhms(bands)
    console.log(value)
    answer.innerHTML = value

});