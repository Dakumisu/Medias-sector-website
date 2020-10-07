$turn = 0;

$(document).ready(function () {
  $("#turn").click(function () {
    $turn = $turn + -60;
    console.log($turn);
    $("svg").css({"transform" : "rotateZ("+$turn+"deg)"});
  });

  $("#Poly_2").click(function () {
    // console.log("MÉDIAS CLASSIQUES");
    $("svg").css({"opacity" : "0"});
  });

  $("#Poly_3").click(function () {
    // console.log("FOURNISSEURS D'ACCÈS");
    $("svg").css({"opacity" : "0"});
  });

  $("#Poly_4").click(function () {
    // console.log("CONTENUS CULTURELS");
    $("svg").css({"opacity" : "0"});
  });

  $("#Poly_5").click(function () {
    // console.log("ÉCONOMIE DES PLATEFORMES");
    $("svg").css({"opacity" : "0"});
  });

  $("#Poly_6").click(function () {
    // console.log("RÉSEAUX SOCIAUX");
    $("svg").css({"opacity" : "0"});
  });

  $("#Poly_7").click(function () {
    // console.log("RÉGULATION DES MÉDIAS");
    $("svg").css({"opacity" : "0"});
  });
      
});