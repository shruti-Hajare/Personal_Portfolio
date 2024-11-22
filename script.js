let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=() => {
    sections.forEach(sec => {
        let top=windows.scrolly;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classlist.remove('active');
                document.querySelector('header nav a [href=*='+id + ']').classlist.add('active');
            })
        }
    })
}
document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.querySelector('.btn'); // Select the button
    downloadBtn.addEventListener('click', function() {
        // Change the window location to the PDF file when clicked
        window.location.href = "resume.pdf"; // Replace with your actual file path
    });
})
