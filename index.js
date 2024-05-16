/* import Typed from 'typed.js';

const Typed = new Typed('#typing', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 10,
}); */




/* const typed = new Typed('#typing', {
    strings: ['Photographer', 'Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed : 50,
    startDelay : 25,
    loop : true,
    loopCount : Infinity
  }); */
 
 
 
 /* function openMenu(){
    menu.classList.add("display-menu")
    } */
    /* function closeMenu(){
    menu.classList.remove("display-menu")
    } */
    /* arc.onclick = function(){
        alert("hola")
    } */
    //openButton.onclick = openMenu
    //openButton.addEventListener('click', openMenu)

    const nav = document.querySelector('nav')
    const listas = document.querySelectorAll('#menu-list-item')
    nav.addEventListener('click', function (pipoca) {
        /* if (event.target.closest('#openButton')) {
            menu.classList.add("display-menu")   
           } */

        if (pipoca.target.closest('#openButton')) {
            menu.classList.add("display-menu")   
        }
        if (pipoca.target.closest('#closeButton')) {
            menu.classList.remove("display-menu")
               
           }
        if (pipoca.target.closest('#menu-list-item')) {
            menu.classList.remove('display-menu')
          for (const lista of listas) {
            lista.classList.remove('active')
          }
          pipoca.target.classList.add('active')
               
        }
        
    }) 
    


    

    /* openButton.addEventListener('click', openMenu)
    let ar = document.getElementById("arc")
    //ar.innerText = "clickea"
    let h1 = document.querySelector("h1")
    //h1.innerText = "Goodbye" 

const lista1 = document.querySelectorAll('.lista li')
console.log(lista1)
const lista2 = Array.from(lista1)
console.log(lista2)
for (const li of lista2) {
    console.log(li)
    li.style.backgroundColor = "lightgreen"
}
//className reemplaza todas las clases
const caja = document.querySelector(".box")
//caja.className = "caja"
//classList adiciona o remueve una clase 
caja.classList.add('caja1', 'caja2')
caja.classList.remove('caja1')

const cajita = document.querySelector('#box')
const boton = document.querySelector('#box-btn')
boton.onclick = function () {
    cajita.classList.toggle('hiden')
    
} */
//background-size : cover

//object-fit : cover  ---> siempre que se meta la imagen en un div

//<script src="https://unpkg.com/scrollreveal"></script>
const sr = new ScrollReveal({
    origin :'top',
    distance : '80px',
    duration : 2000,
    reset : true
})

//sr.reveal('.hero-tittle', { origin :'top',distance : '80px' });
//absolute  relative

