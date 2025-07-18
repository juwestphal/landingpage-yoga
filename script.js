const modal = document.getElementById("join-modal")
//const btnOpen = document.querySelectorAll(".btn") 
const btnClose = document.querySelector(".close-btn")
const input = document.querySelector(".input")
const sendBtn = document.querySelector(".send-btn")
const msg = document.getElementById("msg")
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");

  const btnsOpen = document.querySelectorAll(".btn");
    btnsOpen.forEach(btn =>{
        btn.addEventListener("click", function(){
            modal.style.display = "flex"
        })
    })


btnClose.addEventListener("click", function(){
    modal.style.display = "none"
})

window.addEventListener("click", function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
})

sendBtn.addEventListener("click", function(){
    const nome = input.value.trim()
    const email = input.value.trim()

if(nome === "" || email === ""){
   msg.textContent = "Please fill in all fields"
    }else {
        msg.textContent = "";
        nomeInput.value = "";     // limpa o campo
        emailInput.value = "";    // limpa o campo
        document.getElementById("join-modal").style.display = "none";
    }
})


    
