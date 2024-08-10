const showMenu = () => {
    const hamb = document.querySelector('.menu-hamb');
    const close = document.querySelector('.close');
    const nav = document.querySelector('nav.nav-mobile');
    const links = document.querySelectorAll('.nav-mobile a')
    console.log(links)

    const openManu = () => {
        hamb.style.display = 'none';
        close.style.display = 'block';
        nav.style.display = 'block';
        

    }

    const closeMenu = () => {
        hamb.style.display = 'block';
        close.style.display = 'none';
        nav.style.display = 'none';
    }

    hamb.addEventListener('click', openManu);

    close.addEventListener('click', closeMenu);   
    
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
   

    

    
}

showMenu()