let menuCoffee = `<h2>Coffee Menu</h2><div class="menu">Ice Americano</div><div class="menu">Hot Americano</div>`;
let menuBlended = `<h2>Blended Menu</h2><div class="menu">Ice Americano</div><div class="menu">Hot Americano</div>`;
let menuDessert = `<h2>Dessert Menu</h2><div class="menu">Ice Americano</div><div class="menu">Hot Americano</div>`;

$(document).ready(function() {
    //? 초기 화면에서는 두 번째, 세 번째 contanier를 보여주지 않는다.
    $("#menuBox").html(menuCoffee);

    $("#btnCoffee").click(function(){$("#menuBox").html(menuCoffee)});
    $("#btnBlended").click(function(){$("#menuBox").html(menuBlended)});
    $("#btnDessert").click(function(){$("#menuBox").html(menuDessert)});
})