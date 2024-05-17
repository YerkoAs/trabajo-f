
    const nav = document.querySelector('nav')
    const listas = document.querySelectorAll('#menu-list-item')
    nav.addEventListener('click', function (pipoca) {
        

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

    
    


const sr = new ScrollReveal({
    origin :'top',
    distance : '80px',
    duration : 2000,
    reset : true
})


  var typed = new Typed('#typing', {
    strings: ['Photographer', 'Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed : 50,
    startDelay : 25,
    loop : true,
    loopCount : Infinity
});


