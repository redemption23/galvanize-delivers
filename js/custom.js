'use strict';
$(document).ready(function(){
  var shoppingCart = $('#shopping_cart>tbody');
  var cartSubTotal = $('#subTotal');
  var custInfo = $('#orderForm');
  var submitButton = $(':button#submitOrder');
  var subTotal = 0;
  var tax = $('#shopping_cart>tfoot>tr#tax');
  var total = $('#shopping_cart>tfoot>tr#total');
  var burger = $("div#burger>a");
  var pizza = $("div#arugala>a");
  var swine = $("div#swine>a");
  var iceCream = $("div#iceCream>a");
  var menuItems = {
    royale : {
       name : 'Royale with Cheese',
       price : 8.99
      },
    arugala : {
       name : 'Arugala Pizza',
       price : 11.99
      },
    swine : {
      name : 'Smoked Swine',
      price : 14.99
      },
    iceCream : {
      name : 'Ice Cream Biscuit',
      price : 7.99
    }
  }

  // update subtotal, tax, total
  function updatePrices() {
    var tax = Math.round((subTotal * 0.028) * 100) / 100;
    var total = subTotal + tax;
    cartSubTotal.text('$ ' + subTotal.toFixed(2));
    $('#tax').text('$ ' + tax.toFixed(2));
    $('#total').text('$ ' + total.toFixed(2));
  }

  // add items to cart
  burger.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.royale.name + '</td><td class="right-align">' + menuItems.royale.price + '</td></tr>');
      Materialize.toast('Royale with Cheese added.', 3000);
      subTotal += (menuItems.royale.price);
      updatePrices();
    });
   pizza.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.arugala.name + '</td><td class="right-align">' + menuItems.arugala.price + '</td></tr>');
      Materialize.toast('Arugala Pizza added.', 3000);
      subTotal += (menuItems.arugala.price);
      updatePrices();
    });
    swine.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.swine.name + '</td><td class="right-align">' + menuItems.swine.price + '</td></tr>');
      Materialize.toast('Smoked Swine added.', 3000);
      subTotal += (menuItems.swine.price);
      updatePrices();
    });
    iceCream.click(function() {
      shoppingCart.append('<tr><td>' + menuItems.iceCream.name + '</td><td class="right-align">' + menuItems.iceCream.price + '</td></tr>');
      Materialize.toast('Ice Cream Biscuit added.', 3000);
      subTotal += (menuItems.iceCream.price);
      updatePrices();
      });

  // validate submit form
  submitButton.click(function(e){
    var fullName = $(':input.fullName');
    var phoneNumber = $(':input.phoneNumber');
    var address = $(':input.address');
    e.preventDefault();
    if(shoppingCart.children().length < 1){
      Materialize.toast('Your cart is empty. Please choose an item.', 3000);
    } else {
      if(!fullName.val() && !phoneNumber.val() && !address.val()) {
        fullName.addClass('invalid');
        Materialize.toast('Please enter a valid name.', 3000);
        phoneNumber.addClass('invalid');
        Materialize.toast('Please enter a valid number', 3000);
        address.addClass('invalid');
        Materialize.toast('Please enter a valid address.', 3000);
      } else if(fullName.val() && !phoneNumber.val() && !address.val()) {
        phoneNumber.addClass('invalid');
        Materialize.toast('Please enter a valid number.', 3000);
        address.addClass('invalid');
        Materialize.toast('Please enter a valid address.', 3000);
      } else if(fullName.val() && phoneNumber.val() && !address.val()){
        address.addClass('invalid');
        Materialize.toast('Please enter a valid address.', 3000);
      } else {
        shoppingCart.empty();
        orderForm.reset();
        subTotal = 0;
        $('#subTotal').empty();
        $('#tax').empty();
        $('#total').empty();
        Materialize.toast('Order Successfully submitted', 3000);
      }
    }
  });
});
