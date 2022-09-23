import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'

let szamlalo1
let szamlalo2
let szamlalo3
let szamlalo4

function katt1(){
    szamlalo1++;
    document.getElementById("text1").textContent(szamlalo1)
}

function katt2(){
    szamlalo2++;
    document.getElementById("text1").textContent(szamlalo2)
}

function katt3(){
    szamlalo3++;
    document.getElementById("text1").textContent(szamlalo3)
}

function katt4(){
    szamlalo4++;
    document.getElementById("text1").textContent(szamlalo4)
}

function colorChange(){
    document.body.style.backgroundColor = document.getElementById("color").value;
}

function init(){
    document.getElementById("kep1").addEventListener("click", katt1)
    document.getElementById("kep2").addEventListener("click", katt2)
    document.getElementById("kep3").addEventListener("click", katt3)
    document.getElementById("kep4").addEventListener("click", katt4)
    document.getElementById("color").addEventListener("change", colorChange)
}

document.addEventListener("DOMContentLoaded", init)