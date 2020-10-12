// import Swup from 'swup';
// const swup = new Swup();
// import Scrollbar from 'smooth-scrollbar';
// Scrollbar.init(document.querySelector('#my-scrollbar'));

window.onload = () => {
    for ($i=0; $i < document.getElementsByClassName("section").length; $i++) {
        var progressSection$i = document.querySelector(".section-"+$i);
        // console.log(progressSection$i);
        var progressBarSection = progressSection$i.dataset.anchor;
        console.log(progressBarSection);
    }

    // window.addEventListener("scroll", () => {
    //     let taille = document.documentElement.scrollHeight - window.innerHeight;
    //     let position = window.scrollY;
    //     let largeur = document.documentElement.clientWidth;
    //     let barre = position / taille * largeur;
    //     document.getElementById("progress-bar").style.width = barre + "px";
    //     console.log(barre + "px");

    //     // let ueue = document.getElementById("fullpage");
    //     // console.log(ueue);
    // });

    // window.addEventListener("mousemove", () => {
    //     console.log("ueueue");
    //     if (progressBarSection == "progress0") {
    //         document.getElementById("progress-bar").style.width = 0 + "px";
    //     } else if (progressBarSection == "progress1") {
    //         document.getElementById("progress-bar").style.width = 50 + "px";
    //     }
    // })





    // let progressue = progressSection.getAttribute("anchor");
    // console.log(progressue);
//     let taille = document.documentElement.scrollHeight - window.innerHeight;
//     let position = window.scrollY;
//     let largeur = document.documentElement.clientWidth;
//     let barre = position / taille * largeur;





}