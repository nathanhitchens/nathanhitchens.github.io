function changeImage() {
    document.getElementById("gunjanimage").setAttribute("src", "images/gunjanhit.JPG");
    
    setTimeout(() => {
        document.getElementById("gunjanimage").setAttribute("src", "images/gunjanstand.JPG");
    }, 250);
}