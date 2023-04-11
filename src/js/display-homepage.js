function display(val) {
    $(".content").children().hide();
    switch (+val) {
        case 0:
            $(".content .content-home").show();
            break;
        case 1:
            $(".content .content-about").show();
            break;
        case 2:
            $(".content .content-product").show();
            display_product(0);
            break;
        case 3:
            $(".content .content-tech").show();
            break;
        case 4:
            $(".content .content-news").show();
            break;
        case 5:
            $(".content .content-contact").show();
            break;
        default:
            $(".content .content-home").show();
            break;
    }
}

function display_product(val) {
    $(".content-product-type1").hide();
    $(".content-product-type2").hide();
    switch (val) {
        case 0:
            $(".content-product-type1").show();
            $(".content-product-type2").show();
            break;
        case 1:
            $(".content-product-type1").show();
            break;
        case 2:
            $(".content-product-type2").show();
            break;
        default:
            display(2);
            break;
    }
}