var form = document.getElementById("contact");
var btnform = document.getElementById("btnForm");

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    alert("Você clicou em enviar")
}) 

// var data = new FormData(event.target);
// var reqBody = Object.fromEntries(data); 