const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

//mostrar user
const mostrar = document.getElementById("user").value;


btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
}); 


document.addEventListener("DOMContentLoaded", function () {
    const registroBtn = document.querySelector(".sign-up .button"); 
    const mensajeExito = document.getElementById("registro-exitoso");
  
    registroBtn.addEventListener("click", function (event) {
      event.preventDefault(); 
  
      mensajeExito.style.display = "block";
  

      setTimeout(() => {
        mensajeExito.style.display = "none";
      }, 3000);
    });
  });

  