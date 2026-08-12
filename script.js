const cards=document.querySelectorAll(".roboCard");

cards.forEach(card=>{
    card.addEventListener("mousemove",(e)=>{
        const rect=card.getBoundingClientRect();
        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;
        const rotateY=((x/rect.width)-0.5)*18;
        const rotateX=((y/rect.height)-0.5)*-18;
        card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    card.addEventListener("mouseleave",()=>{ card.style.transform=""; });
});

const botaoMenu=document.getElementById("botaoMenu");
const menu=document.getElementById("menu");
if(botaoMenu && menu){ botaoMenu.addEventListener("click",()=>menu.classList.toggle("ativo")); }

const pesquisa=document.getElementById("campoPesquisa");
const filtro=document.getElementById("campoFiltro");
const robos=document.querySelectorAll("#listaRobos .roboCard");
function filtrarRobos(){
    if(!pesquisa || !filtro) return;
    const texto=pesquisa.value.toLowerCase();
    const categoria=filtro.value;
    robos.forEach(robo=>{
        const nome=robo.querySelector("h2").textContent.toLowerCase();
        const cat=robo.dataset.categoria;
        robo.style.display=(nome.includes(texto) && (categoria==="todos" || cat===categoria)) ? "flex" : "none";
    });
}
if(pesquisa && filtro){ pesquisa.addEventListener("input",filtrarRobos); filtro.addEventListener("change",filtrarRobos); }

const pesquisaSensor=document.getElementById("campoPesquisaSensor");
const filtroSensor=document.getElementById("campoFiltroSensor");
const sensores=document.querySelectorAll("#listaSensores .sensorCard");
function filtrarSensores(){
    if(!pesquisaSensor || !filtroSensor) return;
    const texto=pesquisaSensor.value.toLowerCase();
    const categoria=filtroSensor.value;
    sensores.forEach(sensor=>{
        const nome=sensor.querySelector("h2").textContent.toLowerCase();
        const cat=sensor.dataset.categoriaSensor;
        const passou=nome.includes(texto) && (categoria==="todos" || cat===categoria);
        sensor.style.display=passou ? "flex" : "none";
    });
}
if(pesquisaSensor && filtroSensor){ pesquisaSensor.addEventListener("input",filtrarSensores); filtroSensor.addEventListener("change",filtrarSensores); }

const voltarTopo=document.getElementById("voltarTopo");
if(voltarTopo){
    window.addEventListener("scroll",()=>{ voltarTopo.style.display=window.scrollY>500 ? "flex" : "none"; });
    voltarTopo.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
}
