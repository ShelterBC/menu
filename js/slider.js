$('#bavarages1').click(slidersAppear);
$('#navvCoff').click(slidersAppear);
function slidersAppear () {
    var newElems = $("<div id = 'addOne' class='slider'>" +
    "<div class='slider__item'> <img class='productImage' src='media/cofee/espresso.jpeg'> </div>" +
    "<div class='slider__item'><img class='productImage' src='media/cofee/coffee-americano.jpg'></div></div>"
    +"<div id = 'addOneo' class='productDescription'><p style = 'text-align: left;''>Еспресо, Американо</p><hr></div>");
    $('#fSlider').append(newElems);


    newElems = $("<div id = 'addTwo' class='slider'>" +
    "<div class='slider__item'> <img class='productImage' src='media/cofee/capuch.jpg'> </div>" +
    "<div class='slider__item'><img class='productImage' src='media/cofee/latte.jpg'></div>" + 
    "<div class='slider__item'><img class='productImage' src='media/cofee/flet.jpeg'></div></div>"
    +"<div id = 'addTwot' class='productDescription'><p style = 'text-align: left;''>Капучіно, Лате, Флет уайт</p><hr></div>");
    $('#sSlider').append(newElems);

    $(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true
    });
  });
  }

  $('#backk').click(slidersRemove);
    $('#navvLan').click(slidersRemove);
    $('#navvSnid').click(slidersRemove);
    $('#navvTea').click(slidersRemove);
    function slidersRemove() {
        $('#addOne').remove();
        $('#addOneo').remove();
        $('#addTwo').remove();
        $('#addTwot').remove();
  }
