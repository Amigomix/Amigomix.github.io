var productsCount = document.getElementById("products-count");
var addToCartButtons = document.querySelectorAll(".add_to_cart");

for (var i = 0;i<addToCartButtons.length;i++) {
	addToCartButtons[i].addEventListener('click', function(){
    // event.preventDafault()
        var prevProductsCount = +productsCount.textContent;
    productsCount.textContent = prevProductsCount+1
	})
}


  $('.slider').slick();
