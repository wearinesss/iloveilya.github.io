const no = document.querySelector('.a3');
const cats = document.querySelector('.cats');

no.addEventListener('click', () => {
    no.style.display = "none";
    document.querySelector('.cattext2').innerHTML="YES!!!";
})