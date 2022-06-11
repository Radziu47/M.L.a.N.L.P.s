const socket = io();
let player_ready = false;
let stos1 = document.getElementById("stos1-p1");
let button_p2 = document.getElementById("button-p2");
const element2 = document.getElementById("button-p2");
const element = document.getElementById("kartyst");
const odkr = document.getElementById("odkr");
let ilo = 0;
let wolne = 2;
let wolne2 = 2;
let tab = [];


element.addEventListener('click', ()=>{
    const socketid = socket.id;
    player_ready = true;
    element.style.color = "white";
    socket.emit("ready", {player_ready, socketid});
}, {once:true})

socket.on('onready', el =>{
    element2.style.color ='green';
    element2.innerHTML = "Ready";
})

socket.on('start', ready =>{
    if (ready) {
        element.style.display = "none";
        element.nextElementSibling.style.display = "flex";
        button_p2.style.display = "none";
        button_p2.nextElementSibling.style.display = "flex";
    }
})

stos1.addEventListener("click", e => {
    los(wolne, wolne2);
})

function los() {
    let kropka = Math.floor(Math.random()*9)+2;
    if (wolne > 5) {
    }else if (wolne == 2) {
        let r = document.getElementById(`stos${wolne}-p1`);
        r.style.backgroundImage = "url('../karta.gif')";
        tab.push(kropka);
        wolne++;
        let r1 = document.getElementById(`stos${wolne}-p1`)
        r1.style.backgroundImage = "url('../karta.gif')";
        wolne++;
        ilo = 2;
        socket.emit('karty', ilo)
        
    } else{
    let r = document.getElementById(`stos${wolne}-p1`)
    r.style.backgroundImage = "url('../karta.gif')";
    tab.push(kropka);
    wolne++;
    ilo = 1;
    socket.emit('karty', ilo)
    }
   
}
socket.on('kartyend', show=>{
    if (show == 2) {
        let r = document.getElementById(`stos${wolne2}-p2`);
        r.style.backgroundImage = "url('../karta.gif')";
        wolne2++;
        let r1 = document.getElementById(`stos${wolne2}-p2`)
        r1.style.backgroundImage = "url('../karta.gif')";
        wolne2++; 
    } else if(show == 1){
        let r = document.getElementById(`stos${wolne2}-p2`)
        r.style.backgroundImage = "url('../karta.gif')";
        wolne2++;
    }else{
        console.log(show);
    }
    
})
let y = true;
odkr.addEventListener('click', ()=>{
    if (wolne > 3) {
    odkr.style.display = 'none'; 
    let v = 0;
        for (let i = 0; i < tab.length; i++) {
            v = v + tab[i];
        }
    socket.emit('koniec', v);

    let wynik_p1 = document.getElementById("wynik-p1"); 
    let krat_p1 = document.getElementById("krat-p1");
    const stol1 = document.getElementById("stol-p1");
    stol1.style.backgroundColor = "rgb(56, 53, 53)";
    wynik_p1.innerHTML = v;
    wynik_p1.style.display = "block";
    element.style.display = "none";
    krat_p1.style.display = "none";
    } else {
    return  
    }
    
})

socket.on("Question", wynik =>{
    const stol2 = document.getElementById("stol-p2");
    stol2.style.backgroundColor = "Green";

})


socket.on("koniec-end", wynik=>{
    if (wolne > 3) {
        let wynik_p2 = document.getElementById("wynik-p2"); 
        let krat_p2 = document.getElementById("krat-p2");
        const stol2 = document.getElementById("stol-p2");
        stol2.style.backgroundColor = "rgb(56, 53, 53)";
        wynik_p2.innerHTML = wynik;
        wynik_p2.style.display = "block";
        button_p2.style.display = "none";
        krat_p2.style.display = "none";
        
    } else {
        return
    }
})


socket.on("realend", (read1,read2)=>{
    let wynik_p1 = document.getElementById("wynik-p1"); 
    let wynik_p2 = document.getElementById("wynik-p2"); 
    if (read1 && !read2) {
        wynik_p1.style.color = "Green";
        wynik_p2.style.color = "Tomato";
    } else if(!read1 && read2){
        wynik_p2.style.color = "Green";
        wynik_p1.style.color = "Tomato";
    }else if(read1 && read2){
        wynik_p1.style.color = "yellow";
        wynik_p2.style.color = "yellow";
    }
})

