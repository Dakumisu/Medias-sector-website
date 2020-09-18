// $p1 = document.getElementById("#Poly_2");
// $p2 = document.getElementById("#Poly_3");
// $p3 = document.getElementById("#Poly_4");
// $p4 = document.getElementById("#Poly_5");
// $p5 = document.getElementById("#Poly_6");
// $p6 = document.getElementById("#Poly_7");


$turn = 0;

$(document).ready(function () {
  $("#turn").click(function () {
    $turn = $turn + -60;
    console.log($turn);
    $("svg").css({"transform" : "rotateZ("+$turn+"deg)"});
  });

  $("#Poly_2").click(function () {
    console.log("MÉDIAS CLASSIQUES");
  });

  $("#Poly_3").click(function () {
    console.log("FOURNISSEURS D'ACCÈS");
  });

  $("#Poly_4").click(function () {
    console.log("CONTENUS CULTURELS");
  });

  $("#Poly_5").click(function () {
    console.log("ÉCONOMIE DES MÉDIAS");
  });

  $("#Poly_6").click(function () {
    console.log("RÉSEAUX SOCIAUX");
  });

  $("#Poly_7").click(function () {
    console.log("RÉGULATION DES MÉDIAS");
  });

  // $(document).scroll(function () {
  //     $('body').css('background-color','red');
  // });
      
});


test = function maFonction() {
  $('body').css('background-color','green');
}