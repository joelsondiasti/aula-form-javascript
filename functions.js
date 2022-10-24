var form = document.getElementById("contact");
var btnform = document.getElementById("btnForm");
var mensage = document.getElementById("mensage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  var data = new FormData(event.target);
  var infoUser = Object.fromEntries(data);
  console.log(infoUser);

  form.reset();
  mensage.innerText = `Obrigado ${infoUser.nome}, mensagem enviada com sucesso!`;
  mensage.style.display = "block";
  setTimeout(()=>{
    location.reload()
  }, 5000)
});
