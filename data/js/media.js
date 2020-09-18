// $p1 = document.getElementById("#Polygone_2");
$p2 = document.getElementById("#Polygone_3");
$p3 = document.getElementById("#Polygone_4");
$p4 = document.getElementById("#Polygone_5");
$p5 = document.getElementById("#Polygone_6");
$p6 = document.getElementById("#Polygone_7");


$turn = 0;

$(document).ready(function () {
  $("#turn").click(function () {
    $turn = $turn + 60;
    console.log($turn);
    $("svg").css({"transform" : "rotateZ("+$turn+"deg)"});
  });

  // $(document).scroll(function () {
  //     $('body').css('background-color','red');
  // });
      
});


test = function maFonction() {
  $('body').css('background-color','green');
}