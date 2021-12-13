let btndog = document.getElementById("btndog")
let btncat = document.getElementById("btncat")
let boxcat = document.getElementById("boxcat")
let boxdog = document.getElementById("boxdog")
btndog.addEventListener("click" , function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data =>{
        boxdog.innerHTML=""
        let image=document.createElement("img")
        image.setAttribute("src" , data.message)
        image.style.width="100%"
        image.style.height="100%"
        boxdog.appendChild(image)
    })
})

btncat.addEventListener("click" , function(){
    fetch("https://aws.random.cat/meow")
    .then(response => response.json())
    .then(data =>{
        boxcat.innerHTML=""
        let image=document.createElement("img")
        image.setAttribute("src" , data.file)
        image.style.width="100%"
        image.style.height="100%"
        boxcat.appendChild(image)
    })
})