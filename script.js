/* TYPING ANIMATION */

const words = [
"Web Developer",
"Computer Science Student",
"UI/UX Designer",
"Digital Artist"
]

let i = 0
let j = 0
let currentWord = ""
let isDeleting = false

function type(){

currentWord = words[i]

if(isDeleting){
j--
}else{
j++
}

document.querySelector(".typing").textContent = currentWord.substring(0,j)

if(!isDeleting && j === currentWord.length){
isDeleting = true
setTimeout(type,1000)
return
}

if(isDeleting && j === 0){
isDeleting = false
i = (i+1) % words.length
}

setTimeout(type,100)

}

type()



/* MOBILE MENU */

const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

toggle.onclick = () => {

nav.classList.toggle("active")

}



/* PROJECT MODAL */

function openModal(file,title){

document.getElementById("projectModal").style.display="block"

document.getElementById("modalViewer").src = file

document.getElementById("modalTitle").innerText = title

}

function closeModal(){

document.getElementById("projectModal").style.display="none"

document.getElementById("modalViewer").src = ""

}



/* PARTICLE BACKGROUND */

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for(let i=0;i<100;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="#00f5ff"

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()

p.y+=0.5

if(p.y>canvas.height) p.y=0

})

requestAnimationFrame(animate)

}

animate()
