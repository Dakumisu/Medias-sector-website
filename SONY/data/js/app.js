import Swup from 'swup';
const swup = new Swup();

// window.onload = () => {
//     window.addEventListener("scroll", () => {
//         let taille = document.documentElement.scrollHeight - window.innerHeight;
//         let position = window.scrollY;
//         let largeur = document.documentElement.clientWidth;
//         let barre = position / taille * largeur;
//         document.getElementById("progress-bar").style.width = barre + "px";
//         console.log(barre + "px");

//         let ueue = document.getElementById("fullpage");
//         console.log(ueue);
//     });

//     let taille = document.documentElement.scrollHeight - window.innerHeight;
//     let position = window.scrollY;
//     let largeur = document.documentElement.clientWidth;
//     let barre = position / taille * largeur;

//     if (anchors == "progress1") {
//         document.getElementById("progress-bar").style.width = 50 + "px";
//     }



// }

// $(function () {
//     $(document).on('scroll', function () {
//         let hauteur = $(document).height() - $(window).height()
//         let position = $(document).scrollTop()
//         let largeur = $(window).width()
//         let barre = position / hauteur * largeur

//         $("#progress-bar").css("width", barre)
//         console.log(barre + "px");
//     });
// });