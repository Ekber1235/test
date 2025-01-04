function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
 }
 function  hiddenSidebar(){
    const sidebar = document.querySelector('.sidebar')
   sidebar.style.display ='none'
}
     
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.getElementsByClassName("close")[0];

loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

closeBtn.onclick = function() {
    loginModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
}



let availableKeywords = [
    { name: 'Sonic 3', url: 'sonic.html' },  
    { name: 'A Minecraft Movie', url: 'mc.html' },
    { name: 'Venom 3 last dance', url: 'venom.html' },
    { name: 'Naruto', url: 'naruto.html' },
    { name: 'Mad Max Sage', url: 'mad.html' },
    { name: 'Red One', url: 'red.html' },
    { name: 'Transformers One', url: 'transformers.html' },
    { name: 'Deadpool & Wolwerin', url: 'film.html' },
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.name.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result); 
}

function display(result) {
    const content = result.map((list) => {
        return `<li onclick="selectInput(this)" data-url="${list.url}">${list.name}</li>`;
    });
    resultsBox.innerHTML = result.length ? "<ul>" + content.join('') + "</ul>" : ""; 
}

function selectInput(list) {
    const url = list.getAttribute('data-url'); 
    if (url) {
        window.location.href = url; 
    }
    resultsBox.innerHTML = ''; 
}

function showAll() {
    document.querySelectorAll('.box').forEach(box => {
        box.classList.remove('hidden'); 
    });
}

showAll();

document.querySelectorAll('.toggle').forEach(item => {
    item.addEventListener('click', () => {
        const color = item.id.replace('show', '').toLowerCase(); 
        document.querySelectorAll('.box').forEach(box => {
            box.classList.toggle('hidden', color !== 'all' && !box.classList.contains(color));
        });
    });
});
