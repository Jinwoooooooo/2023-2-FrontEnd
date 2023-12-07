function clickBlended() {
    $(".contanier").hide();
    $("#blended").slideDown(300);
}

$(document).ready(function() {
    //? 초기 화면에서는 두 번째, 세 번째 contanier를 보여주지 않는다.
    $("#blended").hide();
    $("#dessert").hide();

    $("#btnBlended").click(clickBlended);
})