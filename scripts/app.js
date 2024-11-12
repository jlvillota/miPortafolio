function toggleNav() {
    const navWrapper = document.querySelector('.nav-wrapper');
    const overlay = document.querySelector('.overlay');
    
    navWrapper.classList.toggle('open');
    overlay.classList.toggle('active');
}


