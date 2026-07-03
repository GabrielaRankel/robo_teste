const cards=document.querySelectorAll(".roboCard");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;
const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

const botaoMenu=document.getElementById("botaoMenu");
const menu=document.getElementById("menu");

botaoMenu.addEventListener("click",()=>{
menu.classList.toggle("ativo");
});

const pesquisa = document.getElementById("campoPesquisa");
const filtro = document.getElementById("campoFiltro");
const robos = document.querySelectorAll(".roboCard");

function filtrarRobos() {

    const texto = pesquisa.value.toLowerCase();
    const categoria = filtro.value;

    robos.forEach(robo => {

        const nome = robo.querySelector("h2").textContent.toLowerCase();
        const cat = robo.dataset.categoria;

        const passouPesquisa = nome.includes(texto);
        const passouFiltro = categoria === "todos" || cat === categoria;

        if (passouPesquisa && passouFiltro) {
            robo.style.display = "flex";
        } else {
            robo.style.display = "none";
        }

    });

}

pesquisa.addEventListener("input", filtrarRobos);
filtro.addEventListener("change", filtrarRobos);