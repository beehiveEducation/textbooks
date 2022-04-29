const link = 'link'

//INITIALIZE HEADER MENU
const headerLinks = document.querySelectorAll('.headerLinks .link');
initHeader();
//Initialize textbooks
function initHeader() {
    headerLinks.forEach(x => {
        x.addEventListener('click', function (e) {
    let id = e.target.classList.value;
    const classes = id.split(' ');
    individualClass = classes.find(x => x != link);
            if(individualClass.includes('home'){
               loadHomePage(e);
               }
            loadpage(e);  
        })
    })
}

function loadHomePage() {
    window.location.href = "/textbooks/";
}

function loadpage(e) {
    window.location.href = `/textbooks/routes/${individualClass}.html`;
}
