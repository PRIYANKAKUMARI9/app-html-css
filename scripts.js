function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


document.getElementById('scroll-left').addEventListener('click', () => {
    document.getElementById('image-bar').scrollBy({
        left: -300, // Adjust the value as needed
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', () => {
    document.getElementById('image-bar').scrollBy({
        left: 300, // Adjust the value as needed
        behavior: 'smooth'
    });
});
