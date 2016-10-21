'use strict';
$(document).ready(function(){
  var shoppingCart = $('#shopping_cart>tbody');
  var cartSubTotal = $('#shopping_cart>tfoot>tr#subTotal');
  var subTotal = 0;
  var tax = $('#shopping_cart>tfoot>tr#tax');
  var total = $('#shopping_cart>tfoot>tr#total')
  var burger = $("div#burger>a");
  var pizza = $("div#arugala>a");
  var swine = $("div#swine>a");
  var iceCream = $("div#iceCream>a");
  var menuItems = {
    royale : { name : 'Royale with Cheese', price : 8.99 },
    arugala : { name : 'Arugala Pizza', price : 11.99 },
    swine : { name : 'Smoked Swine', price : 14.99 },
    iceCream : { name : 'Ice Cream Biscuit', price : 7.99 }
  }

  // add items to cart
  burger.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.royale.name + '</td><td class="right-align">' + menuItems.royale.price + '</td></tr>');
      subTotal += (menuItems.royale.price);
      updatePrices();
    });
   pizza.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.arugala.name + '</td><td class="right-align">' + menuItems.arugala.price + '</td></tr>');
      subTotal += (menuItems.arugala.price);
      updatePrices();
    });
    swine.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.swine.name + '</td><td class="right-align">' + menuItems.swine.price + '</td></tr>');
      subTotal += (menuItems.swine.price);
      updatePrices();
    });
    iceCream.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.iceCream.name + '</td><td class="right-align">' + menuItems.iceCream.price + '</td></tr>');
      subTotal += (menuItems.iceCream.price);
      updatePrices();
      });

  // update subtotal, tax, total
  function updatePrices() {
    var tax = Math.round((subTotal * 0.028) * 100) / 100;
    var total = subTotal + tax;
    $('#subTotal').text('$ ' + subTotal.toFixed(2));
    $('#tax').text('$ ' + tax.toFixed(2));
    $('#total').text('$ ' + total.toFixed(2));
  }

});
