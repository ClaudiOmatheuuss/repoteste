const botao = document.querySelector(".menu-hamburguer")

const links = document.querySelectorAll(".menu-link")

botao.addEventListener("click", () => {
    for (const link of links) {
        if(link.style.display === "block") {
            link.style.display = "none"
        } else {
            link.style.display = "block"
        }
    }
    
})