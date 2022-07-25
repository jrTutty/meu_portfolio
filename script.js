//Scrool dos menus à pagina

const menuItens = document.querySelectorAll(".menu a");

menuItens.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event)
{
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href'); 
    const to = document.querySelector(id).offsetTop;

    window.scroll
    ({
        top: to - 80,
        behavior: "smooth",
    });
}


function typeWriter(elemento)
{
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 75 * i)
    });
}



const titulo = document.querySelector('.slidearea h1');
typeWriter(titulo)



// Funcionalidade ao botão do menu para mobile

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() 
{
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

