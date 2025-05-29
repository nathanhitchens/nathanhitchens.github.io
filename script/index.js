function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function nothing() {
    document.getElementById("p1").innerHTML = "Nothing Happened :(";
    sleep(1500).then(() => { document.getElementById("p1").innerHTML = "" });
}
