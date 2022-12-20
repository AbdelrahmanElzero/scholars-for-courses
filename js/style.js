
let navLinks = document.querySelectorAll('.navbar-nav .nav-link')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'))
        link.classList.add('active')
    })
})




let Totop = document.querySelector(".top");

window.onscroll = function (){
    if (this.scrollY >= 700){
        Totop.classList.add("show")
    }
    else{
        Totop.classList.remove("show")
    }
};


let sr = ScrollReveal({});

sr.reveal(`.landing_image`, {
    origin: 'bottom',
    distance: '60px',
    duration: '3000',
    delay: '200'
})



sr.reveal(`.text`, {
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: '200'
})

sr.reveal(`.box_subs`, {
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: '200'
})

sr.reveal(`.feature`, {
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: '200'
})

sr.reveal(`.left`, {
    origin: 'left',
    distance: '60px',
    duration: '3000',
    delay: '200'
})

sr.reveal(`.middle`, {
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: '200'
})

sr.reveal(`.right`, {
    origin: 'right',
    distance: '60px',
    duration: '3000',
    delay: '200'
})

sr.reveal(`.testimonial`, {
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: '200'
})


sr.reveal(`.contact__image`, {
    origin: 'bottom',
    distance: '60px',
    duration: '3000',
    delay: '200'
})

sr.reveal(`.contact-form`, {
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: '200'
})
