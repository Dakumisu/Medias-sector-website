// $p1 = document.getElementById("#Polygone_2");
$p2 = document.getElementById("#Polygone_3");
$p3 = document.getElementById("#Polygone_4");
$p4 = document.getElementById("#Polygone_5");
$p5 = document.getElementById("#Polygone_6");
$p6 = document.getElementById("#Polygone_7");

document.getElementById('#Polygone_2').onclick = p1; 

$p1.addEventListener('click', event => {
    alert(`Nombre de clics : ${event.detail}`);
    alert('ueue');
  });

function test(clicked) {

}