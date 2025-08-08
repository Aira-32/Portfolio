// Seleziona gli elementi del DOM
const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu a');
let backdrop = null;

// Funzione per aprire il menu
function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
    
    // Rimuovi eventuali backdrop esistenti
    const existingBackdrop = document.getElementById('backdrop');
    if (existingBackdrop) {
        existingBackdrop.remove();
    }
    
    // Crea il nuovo backdrop
    backdrop = document.createElement('div');
    backdrop.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40';
    backdrop.id = 'backdrop';
    document.body.appendChild(backdrop);
    
    // Aggiungi l'evento di chiusura al nuovo backdrop
    backdrop.addEventListener('click', closeMenu);
}

// Funzione per chiudere il menu
function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = '';
    
    // Rimuovi il backdrop
    const existingBackdrop = document.getElementById('backdrop');
    if (existingBackdrop) {
        existingBackdrop.remove();
    }
}

// Aggiungi gli event listener
if (menuButton) {
    menuButton.addEventListener('click', openMenu);
}

if (closeButton) {
    closeButton.addEventListener('click', closeMenu);
}

// Chiudi il menu al click su qualsiasi link del menu
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Chiudi il menu con il tasto ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('translate-x-full')) {
        closeMenu();
    }
});

// Chiudi il menu al ridimensionamento della finestra
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && !mobileMenu.classList.contains('translate-x-full')) {
        closeMenu();
    }
});




const allContactButtons = document.querySelectorAll('.contact');
const contactModal = document.createElement('dialog');
contactModal.className = `bg-purple-500 self-center justify-self-center z-50 w-full md:w-1/2 lg:w-1/3 rounded-3xl p-8 transition-all duration-300 ease-in-out`
contactModal.innerHTML = 
`
<div>
    <h2 class="text-3xl text-center text-white mb-4 font-area-extended">How to contact me?</h2>
    <hr class="mb-6 border-white w-1/3 justify-self-center">
    <i class="fa-solid fa-xmark cursor-pointer absolute top-5 right-5"></i>
</div>
<div class="flex flex-col gap-4 text-lg">
    <a href="https://www.instagram.com/aira_dev/" role="button" aira-label="Instagram button" class="text-center p-2 px-4 rounded-full flex justify-center items-center transition-all duration-300 ease-in-out bg-gradient-to-r from-fuchsia-600 to-red-300 hover:scale-105">
        <i class="fa-brands fa-instagram"></i>
        <span class="grow -translate-y-0.5">Instagram</span>
    </a>
    <a href="mailto:aira.dev32@gmail.com" role="button" aria-label="Email button" class="text-center p-2 px-4 rounded-full border border-white text-white hover:text-purple-700 hover:bg-white transition-all duration-300 ease-in-out flex justify-center items-center">
        <i class="fa-solid fa-envelope"></i>
        <span class="grow -translate-y-0.5">aira.dev32@gmail.com</span>
    </a>
</div>
`

document.body.appendChild(contactModal);

// Assegnazione degli event listener per il modal
contactModal.querySelector('.fa-xmark').addEventListener('click', () => {
    contactModal.close();
});

allContactButtons.forEach(button => {
    button.addEventListener('click', () => {
        contactModal.showModal();
    });
});

contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.close();
    }
});

