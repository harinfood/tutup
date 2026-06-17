document.addEventListener("click", () => {

    const audio =
    document.getElementById("music");

    audio.play();

}, { once:true });

window.addEventListener("load", () => {

    const audio =
    document.getElementById("music");

    audio.volume = 0.7;

    audio.play().catch(() => {
        console.log("Menunggu interaksi pengguna");
    });

});